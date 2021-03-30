import Head from 'next/head'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const NavComponent = dynamic(() => import('../components/navigation'))

export default function About() {
  return (
    <div className="container">
      <Head>
        <title className="about_journey">Journeymxn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavComponent />

      <article className="about-container">

        <section className="about__title-container">
          <div className="title-pair">
            <h1 className="title-text">Journeymxn: Data Analytics</h1>
          </div>
          <div className="title-info">
            <h1 className="goal-title">Our Goal:</h1>
            <p className="title-goal-text">Journeymxn is a web-based platform that aggregates up-to-date labor trend data, vocational/trade/skill-based career programs, and matches student profiles that are generated after an assessment quiz with a comprehensive roadmap that can use to explore different options. Many high school students do not know what to do after they finish their academic curriculums. With little resources and guidance, they often end up feeling lost or hopeless despite increasing job opportunities and a large number of 4-year universities.We believe this issue comes from a lack of guidance and information about what it is like to go to community college and transfer from there. Therefore, it is in our best interest to provide accurate and useful information to those who struggle with planning for careers or colleges after graduation. </p>
            <h1 className="goal-title">Our Vision:</h1>
            <p className="title-goal-text">We plan to create a service that will function as an interactive quiz that will aggregate the data into our database. This data will then be visualized using charts, viewable only by the sponsor and other administrators for our initial version. This initial version will be completed by the end of this course and will be demoed to the faculty and our sponsor. We aim for the initial software to be deployed and tested by the Long Beach Unified School District. We will provide them with data to help educate students on the variety of career paths outside of a four year degree.</p>
          </div>
        </section>

        <section id="team-container">
          <div className="team-title-container">
            <h1 className="goal-title team-title">Meet the team</h1>
          </div>
          <div className="sponsor-card">
            <div className="sponsor-img">
              <img className="sponsor-card__image" src="/hai.jpg" alt="Photo of Hai"/>
            </div>
            <h2 className="sponsor-card__title">Founder: Hai Truong</h2>
            <div className="sponsor-card__text">
              <p>Hai has spent the past 8 years as a marketer, copywriter, and more recently a podcast producer. Currently a marketing strategist at UC Irvine, my alma mater, for the Office of the Vice Provost for Teaching and Learning. Hai supports a variety of projects centered on student success, teaching excellence, and also manage an annual $100,000 marketing budget for the university’s summer session division which enrolls approximately 14,000 students each summer, generating millions of dollars in essential revenue that supports staff, faculty, and student-facing programs and resources.</p>
            </div>
          </div>
          <div className="team-card card-left">
            <img className="team-card__image image-left" src="/justin.jpg" alt="Photo of Justin"/>
            <h2 className="team-card__title title-left">Front-End Developer: Justin Kang</h2>
            <p className="team-card__info info-left" >Justin is a 4th year Computer Science Major with a minor in Statistics. Justin specializes in Intelligent Systems, Machine Learning, and Creation/Analysis of Statistical Models.</p>
          </div>
          <div className="team-card card-right">
            <img className="team-card__image image-right" src="/mugdha.jpg" alt="Photo of Mugdhaa"/>
            <h2 className="team-card__title title-right">Back-End Developer: Mugdhaa Patankar</h2>
            <p className="team-card__info info-right" >Mugdhaa is a 3rd year Computer Science Major with a specialization in Information. An experienced web developer, who’s strengths shine in Back-End Development.</p>
          </div>
          <div className="team-card card-left">
            <img className="team-card__image image-left" src="/gabe.jpg" alt="Photo of Gabe"/>
            <h2 className="team-card__title title-left">Back-End Developer: Gabe De Mesa</h2>
            <p className="team-card__info info-left">Gabe is a 3rd year Computer Science Major, who enjoys working with data bases and big data, also specializes in Information.</p>
          </div>
          <div className="team-card card-right">
            <img className="team-card__image image-right" src="/patrick.jpg" alt="Photo of Patrick"/>
            <h2 className="team-card__title title-right">Front-End Developer: Patrick Castillofuentes</h2>
            <p className="team-card__info info-right" >Patrick is a 5th Year Computer Science Major. He specializes in network security and cryptography. In addition, Patrick is also has a background in graphic desi</p>
          </div>
        </section>
      
      
      </article>

    </div>

    
  )
}