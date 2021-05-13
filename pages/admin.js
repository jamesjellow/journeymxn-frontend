import Head from 'next/head'
import dynamic from 'next/dynamic'
import {useState} from '../components/context'
import {useEffect} from 'react'
import styles from '../styles/pages/admin.module.scss'

const NavComponent = dynamic(() => import('../components/navigation'))

export default function Quiz() {

  const state = useState();

  if(state.is_login)
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

  function getSelected(id)
  {
    const select = document.getElementById(id)
    const choice = select.options[select.selectedIndex].value
    return choice
  }

  function getInput(id) {
    return document.getElementById(id).value
  }

  function filterValues() {
    const values = {
      industry: getSelected('industries'),
      skillset: getSelected('skillsets'),
      zip: getInput('zip')
    }
    console.log(values)
  }

  return (
    <div className="container">
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
        <h1>Zip Code </h1>
        <input type="text" placeholder="Enter ZipCode" name="uname" required className={styles["zip_input"]} id="zip"/>
        <h1>Industry</h1>
        <select name="industries" id="industries">
          <option value="none" selected disabled hidden>
            Choose an Industry
          </option>
          <option value="Finance">Finance</option>
          <option value="Business/Administration">Business/Administration</option>
          <option value="Creative/Media">Creative/Media</option>
          <option value="Education/Public Sector">Education/Public Sector</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Technology">Technology</option>
          <option value="Service">Skilled</option>
          <option value="Skilled Trade">Skilled Trade</option>
          <option value="Architecture and Engineering">Architecture and Engineering</option>
          <option value="Public Service">Public Service</option>
        </select>
        <h1>Skill Set</h1>
        <select name="SkillSets" id="skillsets">
        <option value="none" selected disabled hidden>
            Choose a Skill Set
          </option>
          <option value="Presentation">Presentation</option>
          <option value="Critical thinking">Critical thinking</option>
          <option value="Communication">Communication</option>
          <option value="Negotiation">Negotiation</option>
          <option value="Multitasking">Multitasking</option>
          <option value="Inductive reasoning">Inductive reasoning</option>
          <option value="Ability to work under stress/pressure">Ability to work under stress/pressure</option>
          <option value="Problem solving">FinanProblem solvingce</option>
          <option value="Flexibility">Flexibility</option>
          <option value="Creativity">Creativity</option>
          <option value="Interpersonal">Interpersonal</option>
          <option value="Analytical">Analytical</option>
          <option value="Public speaking">Public speaking</option>
          <option value="Conflict management">Conflict management</option>
          <option value="Reasoning">Reasoning</option>
          <option value="Persuasion">Persuasion</option>
          <option value="Decision making">Decision making</option>
          <option value="Negotiation">Negotiation</option>
          <option value="Detail Oriented">Detail Oriented</option>
          <option value="Physical strength">Physical strength</option>
          <option value="Basic math skills">Basic math skills</option>
          <option value="Coordination">Coordination</option>
          <option value="Logical thinking">Logical thinking</option>
        </select>
        <input className={styles["submit"]} type="button" value="Submit" onClick={filterValues} />
      </section>
      <section className={styles["data"]}>
        <div className={styles["chart"]}>
        </div>
        <div className={styles["graph"]}>
        </div>
        <div className={styles["graph-2"]}>
        </div>
        <div className={styles["sheet"]}>
        </div>
      </section>
    </div>
  )
}
