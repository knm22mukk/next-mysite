import Link from "next/link"
import { FaInstagram } from 'react-icons/fa'
import { FiTwitter, FiGithub } from 'react-icons/fi'

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-800 flex flex-wrap items-center justify-between p-3 m-auto">
        <div className="container mx-auto flex flex-col flex-wrap items-center justify-between">
          <ul className="flex mx-auto text-gray-50 text-center">
            <Link href="/">
              <li className="p-2 hover:underline"><a>HOME</a></li>
            </Link>
            <Link href="/introduce">
              <li className="p-2 hover:underline"><a>INTRODUCE</a></li>
            </Link>
            <Link href="/blog">
              <li className="p-2 hover:underline"><a>BLOG</a></li>
            </Link>
            <Link href="/contact">
              <li className="p-2 hover:underline"><a>CONTACT</a></li>
            </Link>
          </ul>
          <ul className="flex mx-auto text-gray-50 text-center">
            <li className="p-2 cursor-pointer text-xl">
              <a href="https://www.instagram.com/mukk_houzai/" target="_blank"><FaInstagram /></a>
            </li>
            <li className="p-2 cursor-pointer text-xl">
              <a href="https://twitter.com/mukk_houzai" target="_blank"><FiTwitter /></a>
            </li>
            <li className="p-2 cursor-pointer text-xl">
              <a href="https://github.com/knm22mukk/next-mysite" target="_blank"><FiGithub /></a>
            </li>
          </ul>
          <div className="flex mx-auto text-gray-50 text-center">
            <small>© MUKK BLOG 2021</small>
          </div>
        </div>
      </footer>
    </>
  )
}


