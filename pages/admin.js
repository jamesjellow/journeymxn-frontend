import Head from 'next/head'

import {useEffect} from 'react'
import {useState, useDispatchState} from '../components/context'
import EmbedSDK from '@mongodb-js/charts-embed-dom'

import styles from '../styles/pages/admin.module.scss'

export default function Admin() {

  const state = useState()
  const dispatch = useDispatchState();

  if(!state.is_login)
  {
    const changePage = useEffect(() => { window.location.href = '/login'; });
    changePage
    return (
      <div className={styles["redirect"]}>
          <div className={styles["logo"]}>
              <img src="/icon-256.png" alt="journeymxn-logo" className={styles["icon-logo"]}/>
              <h1>journeymxn</h1>
              <h1>Redirecting...</h1>
          </div>
      </div>
    )
  }

  //SET UP LINK TO ACCESS CHARTS
  const sdk = new EmbedSDK({
    baseUrl: 'https://charts.mongodb.com/charts-data-analytics-platform-gqxba'
  })

  //CREATE CHARTS
  const submissions = sdk.createChart({chartId: '93db39e7-506c-4fd4-a9ca-1fe5448217c8', width: 600, height: 400})
  const countBySchool = sdk.createChart({chartId: '38226042-9d91-488c-b999-c9174c66c671', width: 800, height: 400})
  const recByIndustry = sdk.createChart({chartId: '17f9410e-9387-4684-858a-71f6d8a56b6d', width: 800, height: 400})
  const recBySchool = sdk.createChart({chartId: 'd007be5e-ab94-4856-a659-96ff50ad812d', width: 600, height: 400})
  const topSkills = sdk.createChart({chartId: '83caba7d-6f88-444f-896f-bc95ae885e72', width: 600, height: 400})
  const avgScoreSkills = sdk.createChart({chartId: 'c490d63f-4716-4d33-84b1-06f3b68dcfc8', width: 600, height: 400})

  function renderCharts() {
    submissions.render(document.getElementById('submissions'))
    countBySchool.render(document.getElementById('countBySchool'))
    recByIndustry.render(document.getElementById('recByIndustry'))
    recBySchool.render(document.getElementById('recBySchool'))
    topSkills.render(document.getElementById('topSkills'))
    avgScoreSkills.render(document.getElementById('avgScoreSkills'))
  }

  function filterCharts(value) {
    submissions.setFilter({school_name: value})
    countBySchool.setFilter({school_name: value})
    recByIndustry.setFilter({school_name: value})
    recBySchool.setFilter({'school_name': value})
    topSkills.setFilter({ 'form_response.school_name': value})
    avgScoreSkills.setFilter({ 'form_response.school_name': value})
  }

  function clearFilter(){
    submissions.setFilter({})
    countBySchool.setFilter({})
    recByIndustry.setFilter({})
    recBySchool.setFilter({})
    topSkills.setFilter({})
    avgScoreSkills.setFilter({})
  }

  const checkJWT = async () => {
    const url = 'https://journeymxn-api.herokuapp.com/admin';
    try {
        const res = await fetch(url, {
          method: "get",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
          }
        })

        if(res.status == 200) {
          renderCharts()
        }
        else {
          window.location.href = "/login"
        }

    } catch (e) {
      console.log(e)
    }
  }

  const logOut = () => {
    localStorage.removeItem('token')
    dispatch({type: "LOGOUT", is_login: true})
    window.location.href="/"
  }

  //RENDER INITIAL CHARTS
  useEffect(()=> {
    checkJWT()
  }, [])

  return (
    <div className={styles["container"]} id="expose">
      <Head>
        <title>Journeymxn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles["bar"]} >
        <a href="/" className={styles["icon-logo"]}>
          <img src="/icon-256.png" alt="journeymxn-logo" />
        </a>
        <h1>Dashboard</h1>
        <button className={styles["signout"]} onClick={logOut}>
          Log out
        </button>
      </header>
      <section className={styles["filters"]}>
        <h1>Filter By: </h1>
        <div className={styles["nav"]}>
          <select name="school" id="school" className={styles["dropdown"]}>
            <option value="All Schools" defaultValue>All Schools</option>
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
        </div>
        <button className={styles["button"]}onClick={
            () => {
              const name = document.getElementById('school').value
              console.log()
              if(name=="All Schools"){
                clearFilter()
              }
              else if(name)
              {
                filterCharts(name)
              }
            }
          }>Filter</button>
      </section>        
      <section className={styles["dash"]}>
            <div className={styles["chart"]} id="submissions"></div>
            <div className={styles["chart"]} id="countBySchool"></div>
            <div className={styles["chart"]} id="recByIndustry"></div>
            <div className={styles["chart"]} id="recBySchool"></div>
            <div className={styles["chart"]} id="topSkills"></div>
            <div className={styles["chart"]} id="avgScoreSkills"></div>
      </section>

    </div>
  )
}
