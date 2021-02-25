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
                    <img src="/Hai.jpg" alt="photo of hai" className="person-photo" />
                    <p className="person-text">
                      Hai Truong is an experience marketer, copywriter, and podcast producer, whose projects primarily focus on student success and teaching excellence.
                    </p>

                </div>
                <ul className="team-developers">
                    <li className="personOne">
                      <p className="person-text">
                        Hai Truong is an experience marketer, copywriter, and podcast producer, whose projects primarily focus on student success and teaching excellence.
                      </p>
                      <img src="/Justin.jpg" alt="photo of hai" className="person-photo" />
                    </li>
                    <li className="personTwo">
                      <img src="/Mugdha.jpg" alt="photo of hai" className="person-photo" />
                      <p className="person-text">
                        Hai Truong is an experience marketer, copywriter, and podcast producer, whose projects primarily focus on student success and teaching excellence.
                      </p>
                    </li>
                    <li className="personThree">
                      <img src="/Gabe.jpg" alt="photo of hai" className="person-photo" />
                      <p className="person-text">
                        Hai Truong is an experience marketer, copywriter, and podcast producer, whose projects primarily focus on student success and teaching excellence.
                      </p>
                    </li>
                    <li className="personFour">
                      <img src="/Patrick.jpg" alt="photo of hai" className="person-photo" />
                      <p className="person-text">
                        Hai Truong is an experience marketer, copywriter, and podcast producer, whose projects primarily focus on student success and teaching excellence.
                      </p>
                    </li>
                </ul>
            </section>
        </div>
    </div>

    
  )
}