import Head from 'next/head'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const NavComponent = dynamic(() => import('../components/navigation'))

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>Journeymxn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavComponent />

        <div className="about-contianer">
            <section className="about-container__journey">
                <h1 className="journey-title">
                    About Journeymxn
                </h1>
                <p className = "journey-info">
                Journeymxn is a web-based platform that aggregates up-to-date labor trend data, vocational/trade/skill-based career programs, and matches student profiles that are generated after an assessment quiz with a comprehensive roadmap that can use to explore different options.
                </p>
            </section>

            <section className="about-container__team">
                <h2 className="team-title">
                    Meet the team
                </h2>
                <div className="sponsor">
                    <img src="./public/Hai.jpg"/>
                </div>
                <ul classname="team-developers">
                    <div className="personOne">
                        <image href="">

                        </image>
                    </div>
                </ul>
            </section>
        </div>
    </div>

    
  )
}