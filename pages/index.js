import Head from 'next/head'
import dynamic from 'next/dynamic'

const NavComponent = dynamic(() => import('../components/navigation'))

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Journeymxn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavComponent />
      
    </div>
  )
}
