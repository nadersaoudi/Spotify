import type { NextPage } from 'next'
import Head from 'next/head'
import Dashboard from '../components/Dashboard'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Spotify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard />
    </div>
  )
}

export default Home
