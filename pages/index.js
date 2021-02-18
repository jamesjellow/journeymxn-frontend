import Head from 'next/head'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const NavComponent = dynamic(() => import('../components/navigation'))

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Journeymxn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavComponent />
      
      <header className="home-header">
        <div className="home-header__heading-container">
            <h1 className="heading-primary">
                <span className="heading-primary--main u-margin-bottom-small">Journeymxn</span>
                <span className="heading-primary--sub">Discover Your</span>
                <span className="heading-primary--sub">Colleges. Careers. Futures.</span>
            </h1>

            <Link href="/quiz">
              <a href="#!" className="btn btn--white btn--animated">Take Our Career Quiz</a>
            </Link>
        </div>
      </header>
    </div>
  )
}
