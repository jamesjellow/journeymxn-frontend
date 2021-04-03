import Head from 'next/head'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import QuizForm from '../components/quiz_form'

import styles from '../styles/pages/quiz.module.scss'

const NavComponent = dynamic(() => import('../components/navigation'))

const questions_and_choices = [
  {
    question: "How are you?",
    answers: ["Very good", "Not good", "Who are you?"]
  },
  {
    question: "Do you like a music?",
    answers: ["Yes", "No", "Music is life"]
  },
  {
    question: "Did you eat something today?",
    answers: ["No", "No", "No"]
  }
]

export default function Quiz() {
  return (
    <div className="container">
      <Head>
        <title>Journeymxn</title>
        <meta name="viewport" content="width=device-width, initial-scale=0.41, maximum-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavComponent />
      

      <div className={styles["container"]}>
        <QuizForm questions={questions_and_choices} />

        <a className={styles["img-credit"]} href="http://www.freepik.com">Background image designed by Freepik</a>
      </div>
      
    </div>
  )
}
