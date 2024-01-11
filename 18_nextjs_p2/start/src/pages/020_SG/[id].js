import { useRouter } from 'next/router';

export default function Page({ id }) {
  const router = useRouter();
  if(router.isFallback) {
    return <h3>Loading...</h3>;
  }
  return <h3>このページは{ id }です。</h3>;
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
  return {
    props: {
      id: params.id
    }
  }
}