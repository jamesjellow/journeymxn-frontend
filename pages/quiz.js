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

  const questions = state.questions;

  const handleNext = (event) => {
    event.preventDefault();
    dispatch({type: 'QUIZ-NEXT'});

  };

  const handlePrev = (event) => {
    event.preventDefault();
    dispatch({type: 'QUIZ-PREV'});
  };

  const getBtnFunctionalityClass = (isPrev) => {
    if (state.career_index == 0 && isPrev)
      return styles["quiz-nav__btn--disabled"];
    if (state.career_index == state.careers_length - 1 && !isPrev)
      return styles["quiz-nav__btn--disabled"];
    return styles["quiz-nav__btn--enabled"];
  }

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
        <script type="text/javascript" src="/js/quiz.js"></script>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text&display=swap" rel="stylesheet" />
      </Head>

      <NavComponent />
      
      <div className={styles["container"]}>
        <QuizForm />
        <div className={styles["quiz-nav"]}>
          <a href="#!" className={`${styles["quiz-nav__btn"]} ${getBtnFunctionalityClass(true)}`} onClick={handlePrev}>previous</a>
          <h4 className={styles["quiz-nav__page"]} id="quiz-page">{`${state.career_index + 1} / ${state.careers_length}`}</h4>
          <a href="#!" className={`${styles["quiz-nav__btn"]} ${getBtnFunctionalityClass(false)}`} onClick={handleNext}>next</a>
        </div>
      </div>

      {/* <form action="#!" onSubmit={submitForm}>
        <label name="name" htmlFor="inp1">What is your name?</label> 
        <input type="text" id="inp1" />
        <button type="submit" className={styles["submit-btn"]}>Submit</button>
      </form> */}

      
    </div>
  )
}
