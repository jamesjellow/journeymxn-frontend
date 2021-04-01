import Head from 'next/head'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import '../styles/pages/quiz.module.scss'

const NavComponent = dynamic(() => import('../components/navigation'))

export default function Quiz() {
  return (
    <div className="container">
      <Head>
        <title>Journeymxn</title>
        <meta name="viewport" content="width=device-width, initial-scale=0.41, maximum-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavComponent />
      
      <div className="quiz">
        <div className="quiz__container">
          Quiz
        </div>
      </div>
      
    </div>
  )
}
