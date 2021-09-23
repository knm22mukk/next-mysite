import Image from 'next/image'

export const FirstSection = () => {
  return (
    <div className="lg:px-24 md:px-10">
      <h1 className="text-3xl font-bold text-gray-600 mb-10 text-center">【このWEBサイトの紹介】</h1>
      <div className="grid sm:grid-cols-3 gap-4 grid-cols-1">
        <div className="container mx-auto rounded-lg max-w-md text-center">
          <Image src="/images/cooking.svg" width={250} height={250} className="w-full" alt="code" />
          <h3 className="text-lg font-semibold text-gray-500 mt-2">包装資材などの消耗品を紹介します。</h3>
        </div>
        <div className="container mx-auto rounded-lg max-w-md text-center">
          <Image src="/images/information.svg" width={250} height={250} className="w-full" alt="code" />
          <h3 className="text-lg font-semibold text-gray-500 mt-2">商品情報を幅広くお伝えします。</h3>
        </div>
        <div className="container mx-auto rounded-lg max-w-md text-center">
          <Image src="/images/code.svg" width={250} height={250} className="w-full" alt="code" />
          <h3 className="text-lg font-semibold text-gray-500 mt-2">このWEBサイトは私のプログラミングの学習も兼ねて開発しました。</h3>
        </div>
      </div>
    </div>
  )
}