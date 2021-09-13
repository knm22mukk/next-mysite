import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="bg-gray-100 body-font">
        { children }
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}