import axios from 'axios';
import ArticleList from '../../components/articleList';
import Head from 'next/head';
export default function Page({ articles }) {
  if(!articles) {
    return <div>データがありません</div>
  }
  return (
    <>
      <Head>
        <title>ページ一覧</title>
      </Head>
      <ArticleList list={articles} />
    </>
  )
};

export async function getStaticProps() {
  const ENDPOINT = 'http://localhost:3002/articles';
  const result = await axios.get(ENDPOINT).then(res => res.data);
  console.log(result);
  return (
    { props: { articles: result } }
  )
}