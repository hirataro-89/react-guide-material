import {useEffect, useState} from 'react';

export default function SSR() {
  const [state, setState] = useState('thankyou');
  console.log('hello');
  const val = 0;
  useEffect(() => {
    console.log('useEffect');
    window.localStorage.setItem('key', 'value'); //windowオブジェクトはuseEffectの中で使う必要がある
  },[])
  return (
    <>
      <h3>{val}</h3>
      <h3>{state}</h3>
    </>
  )
};