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
                <h1 className="about-title">About Journeymxn</h1>
                <p className = "journey-info">
                Journeymxn is a web-based platform that aggregates up-to-date labor trend data, vocational/trade/skill-based career programs, and matches student profiles that are generated after an assessment quiz with a comprehensive roadmap that can use to explore different options.
                </p>
            </section>

            <section className="about-container__team">
                <h2 className="about-title team-title">
                    Meet the team
                </h2>
                <div className="sponsor about-flex">
                    <div className="sponsor-profile person-profile">
                    <h2 className ="sponsor__title person-title">Founder: Hai Truong</h2>
                      <img src="/Hai.jpg" alt="photo of hai"  className="person-photo" />
                    </div>
                    <p className="person-text">
                      Hai Truong is an experience marketer, copywriter, and podcast producer, whose projects primarily focus on student success and teaching excellence.
                    </p>
                </div>
                <div className="team-developers">
                    <div className="personOne about-flex">
                      <p className="person-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      <div className="person-profile">
                        <h2 className="team-developers__person person-title">Lead Developer: Justin Kang</h2>
                        <img src="/Justin.jpg" alt="photo of hai" className="person-photo" />
                        </div>
                    </div>
                    <div className="personTwo about-flex">
                      <div className="person-profile">
                        <h2 className="team-developers__person person-title">Back-End Developer: Mugdhaa Patankar</h2>
                        <img src="/Mugdha.jpg" alt="photo of mugdha" className="person-photo"/>
                      </div>
                      <p className="person-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                    </div>
                    <div className="personThree about-flex">
                      <p className="person-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      <div className="person-profile">
                        <h2 className="team-developers__person person-title">Back-End: Gabe De Mesa</h2>
                        <img src="/Gabe.jpg" alt="photo of hai" className="person-photo" />
                        </div>
                    </div>
                    <div className="personFour about-flex">
                      <div className="person-profile">
                        <h2 className="team-developers__person person-title">Front-End Developer: Patrick Castillofuentes</h2>
                        <img src="/Patrick.jpg" alt="photo of mugdha" className="person-photo"/>
                      </div>
                      <p className="person-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                    </div>


                </div>
            </section>

        </div>
    </div>

    
  )
}