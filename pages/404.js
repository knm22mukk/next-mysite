import Link from 'next/link';
import Image from 'next/image';

export default function Custom404() {
  return (
    <>
      <div className="container mx-auto h-screen flex items-center px-10">
        <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
          <div className="max-w-md">
            <div className="text-5xl font-dark font-bold pb-3">
              404
            </div>
              <p className="text-2xl md:text-3xl font-light leading-normal">
                ページが見つかりませんでした。
              </p>
              <p className="mb-8">
                The page you are looking for does not exist. It might have been moved or deleted.
              </p>
              <Link href='/' passHref>
                <button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700"><a>ホームに戻る</a></button>
              </Link>
          </div>
          <div className="max-w-lg">
            <Image src="/images/404.svg" width={400} height={400} alt="404" />
          </div>
        </div>
      </div>
    </>
  );
}