import Head from 'next/head'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import styles from '../styles/pages/quiz.module.scss'

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
      

      <div className={styles["container"]}>
        <div className={styles["card"]}>
          
        </div>

        <a className={styles["img-credit"]} href="http://www.freepik.com">Background image designed by Freepik</a>
      </div>
      
    </div>
  )
}
