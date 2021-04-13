import Head from 'next/head'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import styles from '../styles/pages/login.module.scss'

export default function Login() {
  return (
    <div className={styles["container"]}>
      <Head>
        <title>Journeymxn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
        <div className={styles["card"]}>
            <h1 className={styles["title"]}>Login</h1>

            <label for="uname" className={styles["userLabel"]}>Username</label>
            <input type="text" placeholder="Enter Username" name="uname" required className={styles["userInput"]}/>
            
            <label for="pass" className={styles["passLabel"]}>Password</label>
            <input type="text" placeholder="Enter Password" name="pass" required className={styles["passInput"]}/>

            <button type="submit" className={styles["submit"]}>LOGIN</button>
        </div>
    </div>
  )
}
