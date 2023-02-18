/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable react/no-danger */
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import { getPrismicClient } from '../services/prismic';
import { FiCalendar, FiUser } from 'react-icons/fi';
import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

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

export default function Home({}: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | spacetraveling</title>
      </Head>

      <main className={styles.homeContainer}>
        <Header />

        <div className={styles.Post}>
          <Link as="a" href="/">
            <strong>Como utilizar Hooks</strong>
          </Link>
          <p>Pensando em sincronização em vez de ciclos de vida.</p>
          <div>
            <span>
              <FiCalendar size={24} /> 15 Mar 2021
            </span>

            <span>
              <FiUser size={24} />
              Izaías Lima
            </span>
          </div>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient({});

  const postsResponse = await prismic.getByType('post', {
    fetch: ['post.title', 'post.subtitle', 'post.author'],
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
