import Head from 'next/head'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import styles from '../styles/pages/login.module.scss'

export default function Login() {
  return (
    <div className={styles["container"]}>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text&display=swap" rel="stylesheet"/> 
      <Head>
        <title>Journeymxn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className={styles["logo"]}>
            <img src="/../public/account_circle_black_24dp.svg" alt="journeymxn-logo"/>
            <h1>journeymxn</h1>
        </div>
        <form action="POST" className={styles["card"]}>
            <h1 className={styles["title"]}>Login</h1>

            <input type="text" placeholder="Enter Username" name="uname" required className={styles["userInput"]}/>
            <input type="password" placeholder="Enter Password" name="pass" required className={styles["passInput"]}/>

            <button type="submit" className={styles["submit"]}>LOGIN</button>
        </form>
    </div>
  )
}
