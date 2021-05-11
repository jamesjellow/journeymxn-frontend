import Link from 'next/link'
import {useState, useDispatchState} from '../components/context'

import styles from '../styles/components/quiz_form.module.scss'

function makeQuizzes(questions) {
	questions.forEach((qna_pair, index) => {
		let question = qna_pair["question"];
		let answers = qna_pair["answers"];

		let htmlDOM = 1;
	});
}

export default function QuizForm() {
	const state = useState();
  	const dispatch = useDispatchState();

	const questions = state.questions;

	const handleInputChange = (index, industry, skill, score) => {
		return (event) => {
			dispatch({type: "QUIZ-CHANGE", index: index, industry: industry, skill: skill, score: score});
		}
	}

	const checkInput = (inputId) => {
		return (event) => {
			event.preventDefault();
			console.log('b:', document.querySelector(`#${inputId}`).checked);
			document.querySelector(`#${inputId}`).checked = true;
			console.log('a:', document.querySelector(`#${inputId}`).checked);
		}
	}

	const makeQuestionHTML = (questions) => {
		return questions.map((question, index) => {
			return (
				<div className={styles["question"]}>
					<h4 className={styles["question__number"]}>{state.career_index * 5 + index + 1}.</h4>
					<h4 className={styles["question__question"]}>{question.question}</h4>
					<div className={styles["question__choice-container"]}>
						<input type="radio" name={`q${index}`} id={`q${index}-high`} className={styles["question__choice"]} onChange={handleInputChange(state.career_index * 5 + index, question.career, question.skill, 1)}></input>
						<div className={styles["question__label-container"]} onClick={checkInput(`q${index}-high`)} >
							<label htmlFor={`q${index}-high`} className={styles["question__label"]}>{question.answers.high}</label>
						</div>
					</div>
					<div className={styles["question__choice-container"]}>
						<input type="radio" name={`q${index}`} id={`q${index}-med`} className={styles["question__choice"]} onChange={handleInputChange(state.career_index * 5 + index, question.career, question.skill, 0)}></input>
						<div className={styles["question__label-container"]} onClick={checkInput(`q${index}-med`)}>
							<label htmlFor={`q${index}-med`} className={styles["question__label"]}>{question.answers.medium}</label>
						</div>
					</div>
					<div className={styles["question__choice-container"]}>
						<input type="radio" name={`q${index}`} id={`q${index}-low`} className={styles["question__choice"]} onChange={handleInputChange(state.career_index * 5 + index, question.career, question.skill, -1)}></input>
						<div className={styles["question__label-container"]} onClick={checkInput(`q${index}-low`)}>
							<label htmlFor={`q${index}-low`} className={styles["question__label"]}>{question.answers.low}</label>
						</div>
					</div>
				</div>
			)
		});
	}

	console.log(questions);
	return (
		<div className={styles["container"]}>
			{makeQuestionHTML(state.current_questions)}

      	</div>

	);
}