import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center flex-wrap p-3">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4">
            <span className="text-2xl font-bold uppercase tracking-wide">
              mukk blog
            </span>
          </a>
        </Link>
        <button 
          className="inline-flex p-3 hover:bg-gray-200 rounded lg:hidden text-gray-50 ml-auto hover:text-gray-50 outline-none"
          onClick={handleClick}  
        >
          <Image src="/images/hamburger.svg" height={30} width={30} alt="menu" className="text-gray-50" />
        </button>
        <div 
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto'>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full mx-3 py-2 font-bold items-center justify-center border-b-2 hover:border-blue-600'>
                HOME
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full mx-3 py-2 font-bold items-center justify-center border-b-2 hover:border-blue-600'>
                INTRODUCE
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full mx-3 py-2 font-bold items-center justify-center border-b-2 hover:border-blue-600'>
                BLOG
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full mx-3 py-2 font-bold items-center justify-center border-b-2 hover:border-blue-600'>
                CONTACT
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}