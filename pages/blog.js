import Link from 'next/link'
import { client } from  '../libs/client'
import Layout from '../components/layouts/templete';
import Image from 'next/image';
import MyHead from '../components/layouts/my-head';
import Date from '../components/blogs/date';
import PageTitle from '../components/layouts/page-title';

export default function Blog({ blog }) {
  return (
    <Layout>
      <MyHead title="ブログ一覧ページ" description="包装資材営業マンむっくのブログ一覧ページ" />
      <PageTitle title="blog" />
      <div className="min-h-screen pb-10 px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {blog.map((blog) => (
            <Link key={blog.id} href={`/blog/${blog.id}`} passHref>
              <div className="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300 bg-white text-center cursor-pointer">
                <Image priority src={blog.image.url} className="rounded-t-lg w-full" height={300} width={300} alt="blogImage" />
                <div className="p-3">
                  <h2 className="md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900">
                    {blog.title}
                  </h2>
                  <p className="text-gray-700 my-3 hover-text-900">
                    {blog.description}
                  </p>
                  <p className="text-gray-700 my-3 hover-text-900">
                    <Date dateString={blog.publishedAt} />
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