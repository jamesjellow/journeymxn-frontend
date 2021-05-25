import Head from 'next/head'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import axios from "axios"

import {useEffect} from 'react'
import {useState} from '../components/context'

import styles from '../styles/pages/login.module.scss'

export default function Login() {

  state = useState();

  const submit = async (e) => {

    e.preventDefault()
    
    let email = document.querySelector("#email").value
    let password = document.querySelector("#pass").value

    let submisison = {
      "email": email,
      "password": password
    }

    const url = 'https://journeymxn-api.herokuapp.com/login';
    const res = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(submisison)
    })

    console.log(res)

    if(res.status == 200) {
      window.location.href = "/admin"
    }

  }

  return (
    <div className={styles["container"]}>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text&display=swap" rel="stylesheet"/> 
      <Head>
        <title>Journeymxn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className={styles["logo"]}>
            <img src="/icon-256.png" alt="journeymxn-logo" className={styles["icon-logo"]}/>
            <h1>journeymxn</h1>
        </div>
        <form action="POST" className={styles["card"]}>
            <h1 className={styles["title"]}>Login</h1>

            <div className={styles["input_pair"]}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
              <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/></svg>
              <input id="email" type="text" placeholder="Enter Username" name="uname" required className={styles["userInput"]}/>
            </div>

            <div className={styles["input_pair"]}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                <g fill="none"><path d="M0 0h24v24H0V0z"/><path d="M0 0h24v24H0V0z" opacity=".87"/></g><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>
              <input id="pass" type="password" placeholder="Enter Password" name="pass" required className={styles["passInput"]}/>
            </div>

            <button type="submit" className={styles["submit"]} onClick={submit}>Login</button>
        </form>
    </div>
  )
}
