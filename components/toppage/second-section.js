import { SiNextDotJs, SiReact, SiTailwindcss, SiCraftcms } from 'react-icons/si'

export const SecondSection = () => {
  return (
    <>
      <div class="relative">
        <h3 class="text-3xl font-bold text-gray-600 mb-10 text-center text-uppercase">【フレームワーク & ライブラリー】</h3>
        <div class="grid grid-cols-2 gap-5 uppercase">

          <div class="group flex items-center bg-white shadow-xl gap-5 px-6 py-5 rounded-lg ring-2 ring-offset-2 ring-offset-blue-600 mt-5 transition">
            <SiNextDotJs className="w-9 text-3xl" />
            <div>
              <span>next.js</span>
              <span class="text-xs text-blue-300 block">javascript</span>
            </div>
          </div>

          <div class="group flex items-center bg-white shadow-xl gap-5 px-6 py-5 rounded-lg ring-2 ring-offset-2 ring-offset-blue-600 mt-5 transition">
            <SiReact className="w-9 text-3xl" />
            <div>
              <span>react</span>
              <span class="text-xs text-blue-300 block">javascript</span>
            </div>
          </div>

          <div class="group flex items-center bg-white shadow-xl gap-5 px-6 py-5 rounded-lg ring-2 ring-offset-2 ring-offset-blue-600 mt-5 transition">
            <SiTailwindcss className="w-9 text-3xl" />
            <div>
              <span>tailwind</span>
              <span class="text-xs text-blue-300 block">css</span>
            </div>
          </div>

          <div class="group flex items-center bg-white shadow-xl gap-5 px-6 py-5 rounded-lg ring-2 ring-offset-2 ring-offset-blue-600 mt-5 transition">
            <SiCraftcms className="w-9 text-3xl" />
            <div>
              <span>microcms</span>
              <span class="text-xs text-blue-300 block">api</span>
            </div>
          </div>

          
        </div>
      </div>
    </>
  )
}