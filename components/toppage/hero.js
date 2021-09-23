import Link from 'next/link'

export const Hero = () => {
  return (
    <div className="container mx-auto bg-gray-400 h-80 rounded-md flex items-center">
      <div className="sm:ml-20 text-gray-50 text-center sm:text-left">
        <h1 className="text-5xl font-bold mb-4">MUKK BLOG</h1>
        <p className="text-lg inline-block sm:block">包装資材、グルメ情報を発信する個人ブログです。</p>
        <Link href="/blog" passHref>
          <button className="w-full px-6 py-2 my-3 text-sm font-bold text-white transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500"><a>記事を見る</a></button>
        </Link>
      </div>
    </div>
  )
}