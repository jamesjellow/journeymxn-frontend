import Head from 'next/head'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import QuizForm from '../components/quiz_form'
import {useState, useDispatchState} from '../components/context'

import styles from '../styles/pages/quiz.module.scss'

const NavComponent = dynamic(() => import('../components/navigation'))

export default function Quiz() {
  const state = useState();
  const dispatch = useDispatchState();

  const handleNext = (event) =>
    dispatch({
      type: 'QUIZ-NEXT',
  });

  const handleDecrease = (event) =>
    dispatch({
      type: 'QUIZ-PREV',
  });

  async function submitForm() {
    const url = 'https://journeymxn-api.herokuapp.com/submitForm';
    const someJSON = { "Hello" : "World" };
    const response = await fetch(url, {
      method: "post",
      headers: {
           "Content-Type": "application/json"
      },
      body : JSON.stringify(someJSON)
    })
    // console.log(response);
    if (response.status !== 201)
      console.error("Could not submit form")
    else
      console.log(await response.text())
  }

  return (
    <div className="container">
      <Head>
        <title>Journeymxn</title>
        <meta name="viewport" content="width=device-width, initial-scale=0.41, maximum-scale=1" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
        <script type="text/javascript" src="/js/jquery-3.6.0.min.js"></script>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text&display=swap" rel="stylesheet" />
      </Head>

      <NavComponent />
      
      <div className={styles["contaier"]}>
        <ul id="quiz" className={styles["slide-container"]}>
          <QuizForm quizState={state["current_questions"]} />
        </ul>
        <a className={styles["img-credit"]} href="http://www.freepik.com">Background image designed by Freepik</a>
      </div>

      <form action="#!" onSubmit={submitForm}>
        <label name="name" htmlFor="inp1">What is your name?</label> 
        <input type="text" id="inp1" />
        <button type="submit" className={styles["submit-btn"]}>Submit</button>
      </form>
      
    </div>
  )
}
