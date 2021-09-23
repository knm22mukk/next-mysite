import Layout from "../components/layouts/templete"
import { Hero } from "../components/toppage/hero"
import { FirstSection } from "../components/toppage/first-section"
import { SecondSection } from "../components/toppage/second-section"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <section className="p-10 container mx-auto px-6 md:px-0">
        <FirstSection />
        <hr className="w-40 my-10 border-4 rounded-md sm:mx-0 mx-auto" />
        <SecondSection />
      </section>
    </Layout>
  )
}
