import Layout from "../components/layouts/templete";
import Image from "next/image"
import { FaRegAddressCard } from 'react-icons/fa'
import { AiOutlineMail, AiOutlineMessage } from 'react-icons/ai'
import MyHead from "../components/layouts/my-head";
import PageTitle from "../components/layouts/page-title";

export default function Contact() {
  return (
    <Layout>
      <MyHead title="お問い合わせページ" description="包装資材営業マンむっくへのお問い合わせページです。" />
      <PageTitle title="contact" />
      <div className="max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-5 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold leading-tight">
              お気軽に<br />お問い合わせください
            </h2>
            <div className="mt-8">
              <Image src="/images/message.svg" height={300} width={420} alt="contact-image" />
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
                送信する
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  )
}