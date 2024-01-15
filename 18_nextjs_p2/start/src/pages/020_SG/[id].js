import { useRouter } from 'next/router';

export default function Page({ id, date }) {
  const router = useRouter();
  if(router.isFallback) {
    return <h3>Loading...</h3>;
  }
  return <h3>このページは{ id }です。{date}</h3>;
};

export async function getStaticPaths() {
  console.log('getStaticPaths excuted');
  return {
    paths: [
      {params: {id: "1"}},
      {params: {id: "2"}}
    ],
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  // console.log(context);
  console.log('getStaticProps excuted');
  const date = new Date;
  return {
    props: {
      id: params.id,
      date: date.toJSON()
    },
    revalidate: 5 //ISRを使用する際に必要なプロパティ　最後に更新されてから5秒後に再度更新する
  }
}