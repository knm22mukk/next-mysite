import Header from "./header";
import Footer from "./footer";
import { ReturnTopButton } from "./return-top-button";

export default function Layout({ children }) {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white py-4 shadow-xl">
        <Header />
      </header>
      <main className="bg-gray-100 body-font">
        { children }
        <ReturnTopButton className="" />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}