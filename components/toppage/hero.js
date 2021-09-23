import Link from 'next/link'

export const Hero = () => {
  return (
    <>
      <div className="w-full bg-center bg-cover h-96" style={{ backgroundImage: `url("/images/moldimage.jpg")` }}>
        <div className="flex items-center justify-center w-full h-full">
          <div className="text-center mx-10">
            <h1 className="text-5xl font-bold mb-4 text-white">MUKK BLOG</h1>
            <p className="text-lg inline-block sm:block text-white">包装資材、グルメ情報を発信する個人ブログです。</p>
            <Link href="/blog" passHref>
              <button className="px-6 py-2 my-3 text-sm font-bold text-white transition-colors duration-200 transform bg-blue-500 rounded-md w-auto hover:bg-blue-600 focus:outline-none"><a>記事を見る</a></button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}