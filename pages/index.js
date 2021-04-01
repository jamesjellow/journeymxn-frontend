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
      
      <header className={styles["home-header"]}>
        <div className={styles["home-header__heading-container"]}>
            <h1 className={styles["heading-primary"]}>
                <span className={`${styles["heading-primary--main"]} u-margin-bottom-small`}>Journeymxn</span>
                <span className={styles["heading-primary--sub"]}>Discover Your</span>
                <span className={styles["heading-primary--sub"]}>Colleges. Careers. Futures.</span>
            </h1>

            <Link href="/quiz">
              <a href="#!" className={`${btnStyles["btn"]} ${btnStyles["btn--white"]} ${btnStyles["btn--animated"]}`}>Take Our Career Quiz</a>
            </Link>
        </div>
      </header>
    </div>
  )
}
