import Head from 'next/head'
import dynamic from 'next/dynamic'

const HeaderComponent = dynamic(() => import('../components/header'))

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Journeymxn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderComponent />
      
    </div>
  )
}
