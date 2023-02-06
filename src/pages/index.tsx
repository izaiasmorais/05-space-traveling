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

export default function Home({}: HomeProps): JSX.Element {
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

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const postsPagination = {};

  return {
    props: {
      postsPagination,
    },
    revalidate: 1800,
  };
};
