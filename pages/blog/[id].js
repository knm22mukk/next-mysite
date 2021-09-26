import Layout from "../../components/layouts/templete";
import { client } from "../../libs/client";
import Link from 'next/link'

export default function BlogId({ blog }) {
  return (
    <Layout>
      <main className="container mx-auto p-10">
        <h1 className="text-center font-bold text-4xl">{blog.title}</h1>
        <p className="text-sm mt-3">{blog.publishedAt}</p>
        <p className="text-sm mt-3">カテゴリー：<span className="">{blog.category.name}</span></p>
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
          className="prose prose-lg mt-5"
        />
        <div className="mt-10">
          <Link href='/blog' passHref>
            <button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">
              <a>一覧に戻る</a>
            </button>
          </Link>
        </div>
      </main>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { 
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};