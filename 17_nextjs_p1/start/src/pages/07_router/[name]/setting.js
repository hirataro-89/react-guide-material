import { useRouter } from 'next/router';

export default function Setting({ query }) {
  const router = useRouter();
  console.log(router.query);
  const clickHandler = () => {
    router.push('/', '/dummy-url');
  }
  return (
    <>
      <h2>{query.name}</h2>
      <h2>routerから取得：{router.query.name}</h2>
      <button onClick={clickHandler}>アクションによる画面遷移</button>
    </>
  )
}
// SSRを行う際に使用する関数
export async function getServerSideProps({ query }) {
  return {
    props: { query }
  }
}