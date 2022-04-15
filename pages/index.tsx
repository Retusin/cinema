import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Cinema</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        {/* banner */}
        <section></section>
      </main>
      {/* modal */}
    </div>
  )
}

export default Home
