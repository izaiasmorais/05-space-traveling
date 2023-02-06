import Head from "next/head";
import Header from "../components/Header";
// import { GetStaticProps } from "next";

// import { getPrismicClient } from "../services/prismic";

// import commonStyles from "../styles/common.module.scss";
// import styles from "./home.module.scss";

// interface Post {
//   uid?: string;
//   first_publication_date: string | null;
//   data: {
//     title: string;
//     subtitle: string;
//     author: string;
//   };
// }

// interface PostPagination {
//   next_page: string;
//   results: Post[];
// }

// interface HomeProps {
//   postsPagination: PostPagination;
// }

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Space Traveling</title>
      </Head>

      <div>
        <Header />
      </div>
    </>
  );
}

// export function getStaticProps(): GetStaticProps {
//   const data = [];
//   // const prismic = getPrismicClient({});
//   // const postsResponse = await prismic.getByType(TODO);
//   // TODO
// }
