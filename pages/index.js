import Head from 'next/head'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import styles from '../styles/pages/home.module.scss'
import btnStyles from '../styles/components/button.module.scss'

const NavComponent = dynamic(() => import('../components/navigation'))

export default function Home() {
  return (
    <div className={styles["container"]}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=0.41, maximum-scale=1" />
        <title>Journeymxn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavComponent />
      
      <header className={styles["header"]}>
        <div className={styles["header__heading-container"]}>
          <h1 className={styles["header__heading-primary--main"]}>
            Let us help your career find you
          </h1>
          <h1 className={styles["header__heading-primary--sub"]}>
            Take our short assessment and explore the in-demand careers and programs personalized for you.
          </h1>
          <Link href="/quiz">
            <a href="#!" className={`${btnStyles["btn"]} ${btnStyles["btn--black"]} ${btnStyles["btn--animated"]}`}>Take Our Career Quiz</a>
          </Link>
        </div>

        
        <div className={styles["header__img-wrapper"]}>
          <img src="/header_background2.jpg" className={styles["header__img"]} alt="header-img"/>
        </div>
        
      </header>

      <main className={styles["home-header"]}>

      </main>
    </div>
  )
}
