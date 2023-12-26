import Head from 'next/head';
import Script from 'next/script';
import { useState } from 'react';

export default function Page() {
  const [ load, setLoad ] = useState(false);
  return (
    <>
      <Head>
        <title>ページのタイトル</title>
        <meta property='og:title' content='ページのタイトル' />
      </Head>
      <Script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js'
        strategy='beforeInteractive'
        onLoad={() => setLoad(true)}
        onError={e => {
          console.error(e)
        }} />
        <h3>jQuery loaded: {load ? 'true' : 'false'}</h3>
    </>
  )
};