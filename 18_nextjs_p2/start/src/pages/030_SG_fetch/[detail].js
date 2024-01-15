import axios from 'axios';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Article from "../../components/article"
export default function Detail({ article }) {
  const ENDPOINT = 'http://localhost:3002/articles';
  const router = useRouter();
  if(router.isFallback) {
    return <h3>Loading...</h3>
  }
  return (
    <>
      <Head>
        <title>{article.title}</title>
      </Head>
      <Article data={article} />
    </>
  )
}

export async function getStaticPaths() {
  const result = await axios.get(ENDPOINT).then(res => res.data);
  if(!result) return;
  const paths = result.map((article) => ({ params: {detail: article.id} }))
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const result = await axios.get(`${ENDPOINT}/${params.detail}`).then(res => res.data);
  console.log(result);
  return (
    { props: { article: result } }
  )
}