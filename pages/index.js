import Layout from "../components/layouts/templete"
import Link from "next/link"

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto bg-gray-400 h-80 rounded-md flex items-center">
        <div className="sm:ml-20 text-gray-50 text-center sm:text-left">
          <h1 className="text-5xl font-bold mb-4">MUKK BLOG</h1>
          <p className="text-lg inline-block sm:block">包装資材、グルメ情報を発信する個人ブログです。</p>
          <Link href="/blog" passHref>
            <button className="w-full px-6 py-2 my-3 text-sm font-bold text-white transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500"><a>記事を見る</a></button>
          </Link>
        </div>
      </div>
      <section className="pt-10 container mx-auto px-6 md:px-0">
        <h1 className="text-3xl font-bold text-gray-600 mb-10">Explore exotic locations in Finland</h1>
        <div className="grid sm:grid-cols-3 gap-4 grid-cols-2">
          <div>
            <div className="bg-gray-300 h-44"></div>
            <h3 className="text-lg font-semibold text-gray-500 mt-2">Saunas in <span className="text-gray-700">Helsinki</span></h3>
          </div>
          <div>
            <div className="bg-gray-300 h-44"></div>
            <h3 className="text-lg font-semibold text-gray-500 mt-2">Saunas in <span className="text-gray-700">Rovaniemi</span></h3>
          </div>
          <div>
            <div className="bg-gray-300 h-44"></div>
            <h3 className="text-lg font-semibold text-gray-500 mt-2">Saunas in <span className="text-gray-700">Ruka</span></h3>
          </div>
        </div>
        <hr className="w-40 my-10 border-4 rounded-md sm:mx-0 mx-auto" />
      </section>
      <section className="pb-5 container mx-auto px-6 md:px-0">
        <h1 className="inline-block text-gray-600 font-bold text-3xl">
          The holy sauna ritual <br />
          (or how does Saunatime work).
        </h1>

        <div className="grid grid-cols-3 gap-4 mt-10">
          <div>
            <h3 className="text-lg font-semibold text-gray-500 mt-2">1. Browse and book</h3>
            <p className="text text-gray-400">Start by searching for a location. Once you find a sauna you like, simply check the availability, book it, and make a secure payment right away.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-500 mt-2">2. Have a great bath</h3>
            <p className="text text-gray-400">Meet your host on the date you chose and enjoy the home sauna experience. Well handle the payment to the host after your experience.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-500 mt-2">3. Review the host</h3>
            <p className="text text-gray-400">If you enjoyed the experience, let others know by giving a review to your sauna host. This way others will know where to go.</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
