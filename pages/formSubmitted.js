import Head from 'next/head'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import styles from '../styles/pages/formSubmitted.module.scss'
import btnStyles from '../styles/components/button.module.scss'

const NavComponent = dynamic(() => import('../components/navigation'))

export default function formSubmitted() {
  return (
    <div className={styles["container"]}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=0.41, maximum-scale=1" />
        <title>Journeymxn</title>
        <link rel="icon" href="/favicon.icon" />
      </Head>

      <NavComponent />
      
      <main className={styles["confirm"]}>
        <div className={styles["confirm__card"]}>
          <h4 className={styles["confirm__title"]}>Thank you!</h4>
          <div className={styles["confirm__icon-box"]}>
            <svg className={styles["confirm__icon"]}> 
              <use xlinkHref="/sprite.svg#icon-email"></use>
            </svg>
          </div>
          <div className={styles["confirm__message"]}>
            <h4 className={styles["confirm__message-text"]}>Your quiz has been succesfully submitted. An email with the results of your assessmens has been sent. We hope you enjoyed our assessment!</h4>
            <Link href="/">
              <a href="#!" className={styles["confirm__btn"]}>return home</a>
            </Link>
          </div>
        </div>
      </main>

    </div>
  )
}
