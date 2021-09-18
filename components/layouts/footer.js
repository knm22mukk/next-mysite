import Link from "next/link"

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
            <li className="p-2 cursor-pointer">
              <a href="#">icon</a>
            </li>
            <li className="p-2 cursor-pointer">
              <a href="#">icon</a>
            </li>
            <li className="p-2 cursor-pointer">
              <a href="#">icon</a>
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


