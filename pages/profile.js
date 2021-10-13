import Layout from "../components/layouts/templete";
import Image from 'next/image'
import { FaInstagram } from 'react-icons/fa'
import { FiTwitter, FiGithub } from 'react-icons/fi'
import MyHead from "../components/layouts/my-head";
import PageTitle from "../components/layouts/page-title"

export default function Profile() {
  return (
    <Layout>
      <MyHead title="むっくの自己紹介ページ" description="包装資材営業マンむっくの自己紹介ページです。" />
      <PageTitle title="profile" />
      <section className="mt-10">
        <div className="max-w-2xl px-6 text-center mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800">ようこそ！<br />包材営業マンのむっくです！</h2>
          <p className="text-gray-400 mt-10">
            包装資材業界に携わり7年経過しました。
            <br />
            日々新しい製品が発売されており、新しい情報をすぐにキャッチアップできるようにできるだけ多くの情報を発信していきたいと思います。
            <br />
            良ければ会社の方、お客様にもシェアしていただけると喜びます。
            <br />
            お問い合わせはCONTACTページからお願いします。
          </p>
          <div className="flex justify-center my-20">
            <Image src="/images/logo.png" width={300} height={300} alt="profile-image" className="rounded-full" />
          </div>
        </div>
      </section>

      <section className="bg-gray-600 py-10">
        <div className="container px-10 lg:px-24 mx-auto text-center">
          <h2 className="text-2xl font-semibold text-white">
            About me
          </h2>
          <p className="text-gray-400 mt-10">
            岩手県出身の30歳の営業マンです。
            <br />
            コロナ禍で対面営業が難しい中、ネットを活用した情報収集が求められていると感じます。
            <br />
            広く多くの情報を発信したいと思い、このWEBサイトを開発しました。
            <br />
            是非、多くの人に読んでいただけると嬉しいです。
            <br />
            私も記事の更新頑張ります！
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-2xl px-6 text-center mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800">Follow me</h2>
        </div>
        <div className="container px-10 lg:px-24 py-10 mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <a href="https://www.instagram.com/mukk_houzai/"　target="_blank" rel="noreferrer">
              <div className="flex items-center p-4 bg-white border-gray-200 rounded-lg shadow-lg">
                <div className="p-3 mr-4 bg-blue-500 text-white rounded-full">
                  <FaInstagram />
                </div>
                <div className="">
                  <p className="mb-2 text-sm font-medium text-gray-900">Instagram</p>
                  <p className="text-sm font-normal text-gray-700">更新します。</p>
                </div>
              </div>
            </a>
            <a href="https://twitter.com/mukk_houzai"　target="_blank" rel="noreferrer">
              <div className="flex items-center p-4 bg-white border-gray-200 rounded-lg shadow-lg">
                <div className="p-3 mr-4 bg-blue-500 text-white rounded-full">
                  <FiTwitter />
                </div>
                <div className="">
                  <p className="mb-2 text-sm font-medium text-gray-900">Twitter</p>
                  <p className="text-sm font-normal text-gray-700">更新します。</p>
                </div>
              </div>
            </a>
            <a href="https://github.com/knm22mukk/next-mysite"　target="_blank" rel="noreferrer">
              <div className="flex items-center p-4 bg-white border-gray-200 rounded-lg shadow-lg">
                <div className="p-3 mr-4 bg-blue-500 text-white rounded-full">
                  <FiGithub />
                </div>
                <div className="">
                  <p className="mb-2 text-sm font-medium text-gray-900">Github</p>
                  <p className="text-sm font-normal text-gray-700">更新します。</p>
                </div>
              </div>
            </a>
            <a href="#"　target="_blank" rel="noreferrer">
              <div className="flex items-center p-4 bg-white border-gray-200 rounded-lg shadow-lg">
                <div className="p-3 mr-4 bg-blue-500 text-white rounded-full">
                  
                </div>
                <div className="">
                  <p className="mb-2 text-sm font-medium text-gray-900">更新します</p>
                  <p className="text-sm font-normal text-gray-700">更新します。</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}