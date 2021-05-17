import Head from 'next/head'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import {useEffect} from 'react'

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
    if (state.career_index == state.careers_length && !isPrev)
      return styles["quiz-nav__btn--disabled"];
    return styles["quiz-nav__btn--enabled"];
  }

  const onClickStart = (e) => {
    e.preventDefault();
    dispatch({type: 'QUIZ-START'});
  }

  const quizStart = () => {
    return (
      <div className={styles["container"]}>
        <div className={styles["quiz-start"]}>
          <a href="#!" onClick={onClickStart} className={styles["quiz-start__btn"]}>start quiz</a>
          <img src="icon.svg" alt="icon" className={styles["quiz-start__icon"]}/>
        </div>
      </div>
    
    );
  }

  const quiz = () => {
    if (state.quiz_start)
      return quizStart();
    return (
      <div className={styles["container"]}>
        <QuizForm />
        <div className={styles["quiz-nav"]}>
          <a href="#!" className={`${styles["quiz-nav__btn"]} ${getBtnFunctionalityClass(true)}`} onClick={handlePrev}>previous</a>
          <h4 className={styles["quiz-nav__page"]} id="quiz-page">{`${state.career_index + 1} / ${state.careers_length + 1}`}</h4>
          <a href="#!" className={`${styles["quiz-nav__btn"]} ${getBtnFunctionalityClass(false)}`} onClick={handleNext}>next</a>
        </div>
      </div>
    );
  }

  useEffect(() => {
		dispatch({type: 'LOAD'})
	}, []);

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
      
        {quiz()}

      <script type="text/javascript" src="../public/js/quiz.js">
      </script>
    </div>
  )
}
