import Link from 'next/link'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai'
import { RiArticleLine, RiProfileLine } from 'react-icons/ri'

export default function Header() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center flex-wrap">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4">
            <span className="text-2xl font-bold uppercase tracking-wide">
              mukk blog
            </span>
          </a>
        </Link>
        <button 
          className="inline-flex p-3 hover:bg-gray-200 rounded md:hidden text-gray-50 ml-auto hover:text-gray-50 outline-none"
          onClick={handleClick}  
        >
          <span className="text-gray-700 text-bold text-3xl"><GiHamburgerMenu /></span>
        </button>
        <div 
          className={`${
            active ? '' : 'hidden'
          }   w-full md:inline-flex md:flex-grow md:w-auto`}
        >
          <div className='md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center items-start flex flex-col md:h-auto'>
            <Link href='/'>
              <a className='md:inline-flex md:w-auto w-full mx-3 py-2 font-bold items-center justify-center border-b-2 hover:border-blue-600'>
                <AiOutlineHome className="mx-2 text-blue-600 text-xl" />
                <span className="mr-2">HOME</span>
              </a>
            </Link>
            <Link href='/blog'>
              <a className='md:inline-flex md:w-auto w-full mx-3 py-2 font-bold items-center justify-center border-b-2 hover:border-blue-600'>
                <RiArticleLine className="mx-2 text-blue-600 text-xl" />
                <span className="mr-2">BLOG</span>
              </a>
            </Link>
            <Link href='/profile'>
              <a className='md:inline-flex md:w-auto w-full mx-3 py-2 font-bold items-center justify-center border-b-2 hover:border-blue-600'>
                <RiProfileLine className="mx-2 text-blue-600 text-xl" />
                <span className="mr-2">PROFILE</span>
              </a>
            </Link>
            <Link href='/contact'>
              <a className='md:inline-flex md:w-auto w-full mx-3 py-2 font-bold items-center justify-center border-b-2 hover:border-blue-600'>
                <AiOutlineMail className="mx-2 text-blue-600 text-xl" />
                <span className="mr-2">CONTACT</span>
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}