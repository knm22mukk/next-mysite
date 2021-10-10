import { SiNextDotJs, SiReact, SiTailwindcss, SiCraftcms } from 'react-icons/si'

export const SecondSection = () => {
  return (
    <>
      <div className="relative">
        <h2 className="text-3xl font-bold text-gray-600 mb-10 text-center">【フレームワーク & ライブラリー】</h2>
        <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
          <a href="https://nextjs.org/"　target="_blank" rel="noreferrer">
            <div className="flex items-center p-4 bg-white border-gray-200 rounded-lg shadow-lg ring-2 ring-offset-2 ring-offset-blue-600 ">
              <div className="p-2 mr-3 rounded-full text-3xl">
                <SiNextDotJs />
              </div>
              <div className="">
                <p className="mb-2 text-s font-medium text-gray-900">NEXT.js</p>
                <p className="text-sm font-normal text-gray-700">JavaScript</p>
              </div>
            </div>
          </a>
          <a href="https://ja.reactjs.org/" target="_blank" rel="noreferrer">
            <div className="flex items-center p-4 bg-white border-gray-200 rounded-lg shadow-lg ring-2 ring-offset-2 ring-offset-blue-600 ">
              <div className="p-2 mr-3 rounded-full text-3xl">
                <SiReact />
              </div>
              <div className="">
                <p className="mb-2 text-s font-medium text-gray-900">React</p>
                <p className="text-sm font-normal text-gray-700">JavaScript</p>
              </div>
            </div>
          </a>
          <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
            <div className="flex items-center p-4 bg-white border-gray-200 rounded-lg shadow-lg ring-2 ring-offset-2 ring-offset-blue-600 ">
              <div className="p-2 mr-3 rounded-full text-3xl">
                <SiTailwindcss />
              </div>
              <div className="">
                <p className="mb-2 text-s font-medium text-gray-900">TailWind</p>
                <p className="text-sm font-normal text-gray-700">CSS</p>
              </div>
            </div>
          </a>
          <a href="https://microcms.io/" target="_blank" rel="noreferrer">
            <div className="flex items-center p-4 bg-white border-gray-200 rounded-lg shadow-lg ring-2 ring-offset-2 ring-offset-blue-600 ">
              <div className="p-2 mr-3 rounded-full text-3xl">
                <SiCraftcms />
              </div>
              <div className="">
                <p className="mb-2 text-s font-medium text-gray-900">MicroCMS</p>
                <p className="text-sm font-normal text-gray-700">API</p>
              </div>
            </div>
          </a>          
        </div>
      </div>
    </>
  )
}