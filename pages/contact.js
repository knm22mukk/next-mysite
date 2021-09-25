import Layout from "../components/layouts/templete";
import Image from "next/image"
import { FaRegAddressCard } from 'react-icons/fa'
import { AiOutlineMail, AiOutlineMessage } from 'react-icons/ai'

export default function Contact() {
  return (
    <Layout>
      <div className="container px-10 py-5">
        <h1 className="font-bold text-xl">CONTACT</h1>
        <div className="h-1 w-10 bg-blue-500 rounded"></div>
      </div>
      <div className="max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-5 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              お気軽に<br />お問い合わせください
            </h2>
            <div className="mt-8">
              <Image src="/images/macbook.jpg" height={300} width={420} alt="contact-image" />
            </div>
          </div>
        </div>
        <form 
        action="https://formspree.io/f/xgerppdv"
        method="POST"
        >
          <div className="">
            <div>
              <p className="text-xl text-gray-600 font-bold"><span className="inline-flex px-2"><FaRegAddressCard /></span>お名前</p>
              <input className="w-full text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" name="name" id="name" placeholder="" required />
            </div>
            <div className="mt-8">
              <p className="text-xl text-gray-600 font-bold"><span className="inline-flex px-2"><AiOutlineMail /></span>メールアドレス</p>
              <input className="w-full text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" name="email" id="email" placeholder="" required />
            </div>
            <div className="mt-8">
              <p className="text-xl text-gray-600 font-bold"><span className="inline-flex px-2"><AiOutlineMessage /></span>Message</p>
              <textarea className="w-full h-32 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" placeholder="" />
            </div>
            <div className="mt-8">
              <button className="text-xl font-bold tracking-wide bg-blue-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  )
}