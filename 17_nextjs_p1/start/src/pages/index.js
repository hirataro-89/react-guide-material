import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <h2>HOME</h2>
      <Link href={{
        pathname: '/07_router',
        query: {
          key: 'value'
        }}}>
        <a>/07_router</a>
      </Link>
    </>
  )
}

// Linkで囲った場合は画面リロードしない。