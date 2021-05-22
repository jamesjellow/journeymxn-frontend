import Head from 'next/head'

import {useState, useEffect} from 'react'
import EmbedSDK from '@mongodb-js/charts-embed-dom'

import styles from '../styles/pages/admin.module.scss'

export default function Admin() {

  const sdk = new EmbedSDK({
    baseUrl: 'https://charts.mongodb.com/charts-data-analytics-platform-gqxba'
  })

  const submissions = sdk.createChart({chartId: '93db39e7-506c-4fd4-a9ca-1fe5448217c8', width: 600, height: 400})
  const countBySchool = sdk.createChart({chartId: '38226042-9d91-488c-b999-c9174c66c671', width: 800, height: 400})
  const recByIndustry = sdk.createChart({chartId: '17f9410e-9387-4684-858a-71f6d8a56b6d', width: 800, height: 400})
  const recBySchool = sdk.createChart({chartId: 'd007be5e-ab94-4856-a659-96ff50ad812d', width: 600, height: 400})

  function renderCharts() {
    submissions.render(document.getElementById('submissions'))
    countBySchool.render(document.getElementById('countBySchool'))
    recByIndustry.render(document.getElementById('recByIndustry'))
    recBySchool.render(document.getElementById('recBySchool'))
  }

  function filterCharts(value) {
    submissions.setFilter({school_name: (value)})
    recByIndustry.setFilter({school_name: (value)})
  }

  useEffect(()=> {
    renderCharts()
  }, [])

  return (
    <div className={styles["container"]}>
      <Head>
        <title>Journeymxn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles["bar"]}>
        <img src="/icon-256.png" alt="journeymxn-logo" className={styles["icon-logo"]}/>
        <h1>Dashboard</h1>
        <a href="" className={styles["signout"]}>
          Sign out
        </a>
      </header>
      <section className={styles["filters"]}>
        <h1>Filter By: </h1>
        <div className={styles["nav"]}>
          <select name="school" id="school" className={styles["dropdown"]}>
            <option value="Select School" defaultValue hidden>Select School</option>
            <option value="Edison High">Edison High School</option>
            <option value="Fountain Valley High">Fountain Valley High School</option>
            <option value="Huntington Beach High">Huntington Beach High School</option>
            <option value="Marina High">Marina High School</option>
            <option value="Ocean View High">Ocean View High School</option>
            <option value="Westminster High">Westminster High School</option>
            <option value="Valley Vista High (Continuation)">Valley Vista High School</option>
            <option value="Huntington Beach Adult School">Huntington Beach Adult School</option>
            <option value="Coast High">Coast High School</option>
          </select>
          <button onClick={
            () => {
              const name = document.getElementById('school').value
              console.log()
              if(name){
                filterCharts(name)
              }
            }
          }>Click</button>
        </div>
      </section>        
      <section className={styles["dash"]}>
            <div className={styles["chart"]} id="submissions"></div>
            <div className={styles["chart"]} id="countBySchool"></div>
            <div className={styles["chart"]} id="recByIndustry"></div>
            <div className={styles["chart"]} id="recBySchool"></div>
      </section>

    </div>
  )
}
