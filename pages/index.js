import Layout from "../components/layouts/templete"
import MyHead from "../components/layouts/my-head"
import { Hero } from "../components/toppage/hero"
import { FirstSection } from "../components/toppage/first-section"
import { SecondSection } from "../components/toppage/second-section"

export default function Home() {
  return (
    <Layout>
      <MyHead />
      <Hero />
      <section className="p-10 container mx-auto px-6 md:px-0">
        <FirstSection />
        <SecondSection />
      </section>
    </Layout>
  )
}
