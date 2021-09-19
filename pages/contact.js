import Layout from "../components/layouts/templete";
import Image from "next/image"

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
            <div className="mt-8 text-center">
              <Image src="/images/377201.jpg" height={350} width={350} alt="contact-image" />
            </div>
          </div>
        </div>
        <form 
        action="https://formspree.io/f/xgerppdv"
        method="POST"
        >
          <div className="">
            <div>
              <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
              <input className="w-full text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" name="name" id="name" placeholder="" required />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
              <input className="w-full text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" name="email" id="email" placeholder="" required />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
              <textarea className="w-full h-32 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" placeholder="" />
            </div>
            <div className="mt-8">
              <button className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  )
}