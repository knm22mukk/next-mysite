import Link from 'next/link'
import { client } from  '../libs/client'
import Layout from '../components/layouts/templete';
import Image from 'next/image';

export default function Blog({ blog }) {
  return (
    <Layout>
      <div className="container px-10 py-5">
        <h1 className="font-bold text-xl">BLOG</h1>
        <div className="h-1 w-10 bg-blue-500 rounded"></div>
      </div>

      <div className="min-h-screen px-10 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 xl-grid-cols-4 gap-y-10 gap-x-6">
          {blog.map((blog) => (
            <Link key={blog.id} href={`/blog/${blog.id}`}>
              <div className="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300 bg-white text-center cursor-pointer">
                <Image priority src="/images/377201.jpg" className="rounded-t-lg w-full" height={300} width={300} alt="blogImage" />
                <div className="p-6">
                  <h1 className="md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900">
                    {blog.title}
                  </h1>
                  <p className="text-gray-700 my-2 hover-text-900">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quis.
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
    </Layout>
  )
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};