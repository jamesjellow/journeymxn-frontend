import Head from 'next/head'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import styles from '../styles/pages/about.module.scss'

const NavComponent = dynamic(() => import('../components/navigation'))

export default function About() {
  return (
    <div className="container">
      <Head>
        <title className={styles["about_journey"]}>Journeymxn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavComponent />

      <article className={styles["container"]}>
        <section classname={styles["info"]}>
          <div className={styles["title"]}>
            <h1>
              Building new paths for students and the communities they serve
            </h1>
          </div>
          <div className={styles["about"]}>
            <h1>About Us</h1>
            <p>
            Journeymxn is a web-based platform that aggregates up-to-date labor trend data, vocational/trade/skill-based career programs, and matches student profiles that are generated after an assessment quiz with a comprehensive roadmap that can use to explore different options.
            </p>
          </div>
          <div className={styles["vision"]}>
            <h1>The Vision</h1>
            <p>
            We plan to create a service that will function as an interactive quiz that will aggregate the data into our database. This data will then be visualized using charts, viewable only by the sponsor and other administrators for our initial version. This initial version will be completed by the end of this course and will be demoed to the faculty and our sponsor. We aim for the initial software to be deployed and tested by the Long Beach Unified School District. We will provide them with data to help educate students on the variety of career paths outside of a four year degree.
            </p>
          </div>
        </section>
        <section className={styles["team"]}>
          <div className={styles["team_title"]}>
            Meet the team!
          </div>
          <div className={styles["founder"]}>
            <img src="/Hai.jpg" alt="Photo of Hai"/>
            <div>
              <h1>Hai Truong</h1>
              <h1>Founder</h1>  
              <p>Hai has spent the past 8 years as a marketer, copywriter, and more recently a podcast producer. Currently a marketing strategist at UC Irvine, his alma mater, for the Office of the Vice Provost for Teaching and Learning. Hai supports a variety of projects centered on student success, teaching excellence, and also manage an annual $100,000 marketing budget for the university’s summer session division which enrolls approximately 14,000 students each summer.</p>
            </div>
          </div>
          <div className={styles["developers"]}>
            <div className={styles["person"]}>
              <img src="/Justin.jpg" alt="Photo of Justin"/>
              <h2>Justin Kang</h2>
              <h2>Front-end Developer</h2>
            </div>
            <div className={styles["person"]}>
              <img src="/Mugdha.jpg" alt="Photo of Mugdhaa"/>
              <h2>Mugdhaa Patankar</h2>
              <h2>Back-end Developer</h2>
            </div>
            <div className={styles["person"]}>
              <img src="/Gabe.jpg" alt="Photo of Gabe"/>
              <h2>Gabe De Mesa</h2>
              <h2>Back-end Developer</h2>
            </div>
            <div className={styles["person"]}>
              <img src="/Patrick.jpg" alt="Photo of Patrick"/>
              <h2>Patrick Castillofuentes</h2>
              <h2>Front-end Developer</h2>
            </div>
          </div>
        </section>
        <footer className={styles["footer"]}/>
      </article>
    </div>    
  )
}