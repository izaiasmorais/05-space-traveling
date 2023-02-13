import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import { FiCalendar, FiUser } from "react-icons/fi";
import { GetStaticProps } from "next";
import { getPrismicClient } from "../services/prismic";

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({ postsPagination }: HomeProps): JSX.Element {
  console.log(postsPagination);

  return (
    <>
      <Head>
        <title>Home | spacetraveling</title>
      </Head>

      <div className="w-full h-screen p-4">
        <Header />

        <div
          className="mt-6 mx-auto w-full max-w-[700px] text-white
        flex flex-col gap-2"
        >
          <Link as="a" href="/">
            <strong
              className="font-bold text-3xl hover:text-highlight
            transition-colors cursor-pointer"
            >
              Como utilizar Hooks
            </strong>
          </Link>
          <p className="text-body text-lg">
            Pensando em sincronização em vez de ciclos de vida.
          </p>
          <div className="flex gap-6 mt-5 text-body">
            <span className="flex gap-2 items-center">
              <FiCalendar size={24} /> 15 Mar 2021
            </span>

            <span className="flex gap-2 items-center">
              <FiUser size={24} />
              Izaías Lima
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient({});

  const postsResponse = await prismic.getByType("post", {
    fetch: ["post.title", "post.subtitle", "post.author"],
    pageSize: 1,
  });

  const posts = postsResponse.results.map<Post>(({ data, ...post }) => ({
    uid: post.uid,
    data: {
      title: data.post,
      subtitle: data.subtitle,
      author: data.author,
    },
    first_publication_date: post.first_publication_date,
  }));

  const postPagination = {
    next_page: postsResponse.next_page,
    results: posts,
  };

  return {
    props: { postPagination },
    revalidate: 10 * 60, // 10 minutes
  };
};
