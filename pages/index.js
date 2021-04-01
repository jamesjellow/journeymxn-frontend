import Head from 'next/head'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import style from '../styles/pages/home.module.scss'

const NavComponent = dynamic(() => import('../components/navigation'))

export default function Home() {
  return (
    <div className={style["container"]}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=0.41, maximum-scale=1" />
        <title>Journeymxn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavComponent />
      
      <header className={style["home-header"]}>
        <div className={style["home-header__heading-container"]}>
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
