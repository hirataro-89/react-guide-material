import axios from "axios";
import { useEffect, useState } from "react";
import Head from "next/head";
import ArticleList from "../../components/articleList";

// API routes
export default function Page() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async() => {
      const ENDPOINT = '/api/articles';
      const result = await axios.get(ENDPOINT).then(res => res.data);
      setArticles(result);
    }
    getArticles();
  }, [])
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
}