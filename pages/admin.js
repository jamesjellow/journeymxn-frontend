import Head from 'next/head'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const NavComponent = dynamic(() => import('../components/navigation'))

export default function Quiz() {
  return (
    <div className="container">
      <Head>
        <title>Journeymxn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavComponent />
      
      <div>
        <h2>Admin</h2>
      </div>
    </div>
  )
}
