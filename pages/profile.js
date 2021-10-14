import Layout from "../components/layouts/templete";
import Image from 'next/image'
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
        <div className="px-24 md:px-10 py-10 text-center">
          <div className="flex justify-center items-center">
            <a href="https://www.instagram.com/mukk_houzai/"　target="_blank" rel="noreferrer" className="mx-4">
              <Image src='/images/instagram_icon.png' width={100} height={100} alt="instagram" />
            </a>
            <a href="https://twitter.com/mukk_houzai"　target="_blank" rel="noreferrer" className="mx-4">
              <Image src='/images/twitter_icon.png' width={100} height={100} alt="instagram" />
            </a>
            <a href="https://github.com/knm22mukk/next-mysite"　target="_blank" rel="noreferrer" className="mx-4">
              <Image src='/images/github_icon.png' width={100} height={100} alt="instagram" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}