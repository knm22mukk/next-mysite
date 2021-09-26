import Link from "next/link"
import { FaInstagram } from 'react-icons/fa'
import { FiTwitter, FiGithub } from 'react-icons/fi'

export default function Footer() {
  return (
    <>
      <div className="bg-gray-800 flex flex-wrap items-center justify-between p-3 m-auto">
        <div className="container mx-auto flex flex-col flex-wrap items-center justify-between">
          <ul className="flex mx-auto text-gray-50 text-center">
            <Link href="/" passHref>
              <li className="p-2 hover:underline cursor-pointer"><a>HOME</a></li>
            </Link>
            <Link href="/blog" passHref>
              <li className="p-2 hover:underline cursor-pointer"><a>BLOG</a></li>
            </Link>
            <Link href="/profile" passHref>
              <li className="p-2 hover:underline cursor-pointer"><a>PROFILE</a></li>
            </Link>
            <Link href="/contact" passHref>
              <li className="p-2 hover:underline cursor-pointer"><a>CONTACT</a></li>
            </Link>
          </ul>
          <ul className="flex mx-auto text-gray-50 text-center">
            <li className="p-2 cursor-pointer text-xl">
              <a href="https://www.instagram.com/mukk_houzai/"　target="_blank" rel="noreferrer"><FaInstagram /></a>
            </li>
            <li className="p-2 cursor-pointer text-xl">
              <a href="https://twitter.com/mukk_houzai"　target="_blank" rel="noreferrer"><FiTwitter /></a>
            </li>
            <li className="p-2 cursor-pointer text-xl">
              <a href="https://github.com/knm22mukk/next-mysite"　target="_blank" rel="noreferrer"><FiGithub /></a>
            </li>
          </ul>
          <div className="flex mx-auto text-gray-50 text-center">
            <a　href="https://storyset.com/online" target="_blank" rel="noreferrer">Online illustrations by Storyset</a>
          </div>
          <div className="flex mx-auto text-gray-50 text-center">
            <p>© MUKK BLOG 2021</p>
          </div>
        </div>
      </div>
    </>
  )
}


