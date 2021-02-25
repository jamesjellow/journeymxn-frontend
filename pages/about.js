import Head from 'next/head'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const NavComponent = dynamic(() => import('../components/navigation'))

export default function About() {
  return (
    <div className="container">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=0.41, maximum-scale=1" />
        <title>Journeymxn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavComponent />
      
      <div>
        <h2>About</h2>
      </div>
    </div>
  )
}
