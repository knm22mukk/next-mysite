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
      <main className="py-16 container mx-auto px-6 md:px-0">
        <section className="py-16 container mx-auto px-6 md:px-0">
          <h1 className="text-3xl font-bold text-gray-600 mb-10">TextTextTextTextTextTextTextText</h1>
          <div className="grid sm:grid-cols-3 gap-4 grid-cols-2">
            <div>
              <div className="bg-gray-300 h-44"></div>
              <h3 className="text-lg font-semibold text-gray-500 mt-2">TextTextText<span className="text-gray-700">TextText</span></h3>
            </div>
            <div>
              <div className="bg-gray-300 h-44"></div>
              <h3 className="text-lg font-semibold text-gray-500 mt-2">TextTextText<span className="text-gray-700">TextText</span></h3>
            </div>
            <div>
              <div className="bg-gray-300 h-44"></div>
              <h3 className="text-lg font-semibold text-gray-500 mt-2">TextTextText<span className="text-gray-700">TextText</span></h3>
            </div>
          </div>
        </section>
        <section>
          <h1 className="inline-block text-gray-600 font-bold text-3xl mt-10">
            TextTextTextTextText<br />
            TextTextTextTextTextTextText
          </h1>

          <div className="grid grid-cols-3 gap-4 mt-10">
            <div>
              <h3 className="text-lg font-semibold text-gray-500 mt-2">1. TextTextText</h3>
              <p className="text text-gray-400">Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-500 mt-2">2. TextTextText</h3>
              <p className="text text-gray-400">Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-500 mt-2">3. TextTextText</h3>
              <p className="text text-gray-400">Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
