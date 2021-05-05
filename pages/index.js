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

      <main className={styles["main"]}>
        <div className={styles["main__img-comp"]}>
          <img src="/finance.jpg" className={`${styles["main__img"]} ${styles["main__img--1"]}`} />
          <img src="/engineer.jpg" className={`${styles["main__img"]} ${styles["main__img--2"]}`} />
          <img src="/research.jpg" className={`${styles["main__img"]} ${styles["main__img--3"]}`} />

        </div>
        <div className={styles["main__heading-container"]}>
          <h1 className={styles["main__heading-primary--main"]}>
            In Demand Vocational, Trade & Skill-based Careers
          </h1>
          <h1 className={styles["main__heading-primary--sub"]}>
            Journeymxn aims to match students interests with an educational program that will lead to lifelong, gainful employment. after your assessment you will be provided results based resources of future resources.
          </h1>
        </div>
      </main>

      <main className={styles["main-2"]}>
        <div className={styles["main__heading-container"]}>
          <h1 className={styles["main__heading-primary--main"]}>
            Personalized Comprehensive Career Paths
          </h1>
          <h1 className={styles["main__heading-primary--sub"]}>
            Gain a fresh perspective on what the roadmap to employability looks like from highschool and/or community college.. Find a new pathway to link learning and earning without requiring a college degree.
          </h1>
        </div>
        <div className={styles["main-2__img-wrapper"]}>
          <img src="/path.jpg" className={styles["main-2__img"]} alt="path-img"/>
        </div>
      </main>

    </div>
  )
}
