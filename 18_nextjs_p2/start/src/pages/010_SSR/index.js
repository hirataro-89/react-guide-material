import {useEffect, useState} from 'react';

export default function SSR({message}) {
  const [state, setState] = useState('thankyou');
  console.log('hello');
  console.log(message);
  const val = 0;
  useEffect(() => {
    console.log('useEffect');
    window.localStorage.setItem('key', 'value'); //windowオブジェクトはuseEffectの中で使う必要がある
    document.cookie = 'value=0; path=/;'
  },[])
  return (
    <>
      <h3>{val}</h3>
      <h3>{state}</h3>
    </>
  )
};

export async function getServerSideProps(context) {
  const { cookie } = context.req.headers;
  console.log('cookie:', cookie);
  console.log('getServerSideProps executed');
  return {
    // redirect : {
    //   destination: '/',
    //   permanent: false //恒久的に処理を行うか否か true: permanent, false: temporary
    // },
    props: {message: 'From Server Side Props'}
  }
}