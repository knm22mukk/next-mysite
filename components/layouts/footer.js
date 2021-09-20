import Link from "next/link"
import { FaInstagram } from 'react-icons/fa'
import { FiTwitter, FiGithub } from 'react-icons/fi'

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-800 flex flex-wrap items-center justify-between p-3 m-auto">
        <div className="container mx-auto flex flex-col flex-wrap items-center justify-between">
          <ul className="flex mx-auto text-gray-50 text-center">
            <Link href="/" passHref>
              <li className="p-2 hover:underline cursor-pointer"><a>HOME</a></li>
            </Link>
            <Link href="/introduce" passHref>
              <li className="p-2 hover:underline cursor-pointer"><a>INTRODUCE</a></li>
            </Link>
            <Link href="/blog" passHref>
              <li className="p-2 hover:underline cursor-pointer"><a>BLOG</a></li>
            </Link>
            <Link href="/contact" passHref>
              <li className="p-2 hover:underline cursor-pointer"><a>CONTACT</a></li>
            </Link>
          </ul>
          <ul className="flex mx-auto text-gray-50 text-center">
            <Link href="https://www.instagram.com/mukk_houzai/" passHref>
              <li className="p-2 cursor-pointer text-xl"><a><FaInstagram /></a></li>
            </Link>
            <Link href="https://twitter.com/mukk_houzai" passHref>
              <li className="p-2 cursor-pointer text-xl"><a><FiTwitter /></a></li>
            </Link>
            <Link href="https://github.com/knm22mukk/next-mysite" passHref>
              <li className="p-2 cursor-pointer text-xl"><a><FiGithub /></a></li>
            </Link>
          </ul>
          <div className="flex mx-auto text-gray-50 text-center">
            <small>© MUKK BLOG 2021</small>
          </div>
        </div>
      </footer>
    </>
  )
}


