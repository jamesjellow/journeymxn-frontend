import Head from 'next/head'
import dynamic from 'next/dynamic'

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
        <div class="home-header__heading-container">
            <h1 class="heading-primary">
                <span class="heading-primary--main">Journeymxn</span>
                <span class="heading-primary--sub">Colleges. Careers. Futures.</span>
            </h1>

            <a href="#section-tours" class="btn btn--white btn--animated">Discover our tours</a>
        </div>
      </header>
    </div>
  )
}
