import Head from 'next/head'
import dynamic from 'next/dynamic'
import styles from '../styles/pages/dashboard.module.scss'

const Dropdown = dynamic(() => import('../components/dropdown'))

export default function Dashboard() {
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
        <h1>Skillset</h1>
        <select name="SkillSets" id="skillsets">
        <option value="none" selected disabled hidden>
            Choose an SkillSet
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
        <h1>Zip Code: </h1>
        <input type="text" placeholder="Enter ZipCode" name="uname" required className={styles["zip_input"]}/>
        <input className={styles["submit"]} type="submit" value="Submit"/>
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
