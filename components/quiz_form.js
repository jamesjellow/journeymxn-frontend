import Link from 'next/link'
import {useState, useDispatchState} from '../components/context'

import styles from '../styles/components/quiz_form.module.scss'
import stateJSON from '../public/json/state.json'
import { Router } from 'next/router';

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

	const handleInputChange = (index, career, skill, score) => {
		// console.log(state.selections);
	}

	const checkInput = (inputId, career, skill, score) => {
		return (event) => {
			event.preventDefault();
			console.log(state.selections);
			document.querySelector(`#${inputId}`).checked = true;
			dispatch({type: "QUIZ-SELECT", career: career, skill: skill, score: score});
			console.log('a:', document.querySelector(`#${inputId}`).checked);
		}
	}

	const submit = async (e) => {
		// e.preventDefault();
		let stateName = document.querySelector("#state").value
		let schoolDist = document.querySelector("#school-dist").value;
		let schoolName = document.querySelector("#school").value;
		let email = document.querySelector("#email").value;

		console.log(stateName);
		console.log(email);

		let responses = [];
		for (const [career, value] of Object.entries(state.selections)) {
			for (const [skill, score] of Object.entries(value)) {
				responses.push({"career": career, "skill": skill, "score": score})
			}
		}

		let submission = {
			"emailto": email,
			"state": stateName,
			"school district": schoolDist,
			"school": schoolName,
			"responses": responses
		}

		console.log("success", submission);

		const url = 'https://journeymxn-api.herokuapp.com/submitForm';
		const response = await fetch(url, {
			method: "post",
			headers: {
				"Content-Type": "application/json"
			},
			body : JSON.stringify(submission)
		});
		// console.log(response);
		if (response.status !== 201)
			console.error("Could not submit form")
			// Popup and say error submitting form
		else {
			console.log(await response.text());
			state.finished_form = true;
			// redirect them to /formSumitted
		}
			
	};


	const onInvalidEmail = (e) => {
		return e.target.setCustomValidity("Please type in your email correctly.");
	};

	const listStateOptions = () => {
		let states = ['AK', 'AL', 'AR', 'AS', 'AZ', 'BI', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'GU', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VI', 'VT', 'WA', 'WI', 'WV', 'WY'];


		return states.map((elm) => {return (<option value={elm}>{elm}</option>)})
	}

	const makeQuestionHTML = (questions) => {
		if (!state.quiz_done) {
			return questions.map((question, index) => {
				let page_id = state.career_index * 5
				return (
					<div className={styles["question"]}>
						<h4 className={styles["question__number"]}>{page_id + index + 1}.</h4>
						<h4 className={styles["question__question"]}>{question.question}</h4>
						<div className={styles["question__choice-container"]}>
							<input type="radio" name={`q${page_id + index}`} id={`q${page_id + index}-high`} className={styles["question__choice"]} onChange={handleInputChange(page_id + index, question.career, question.skill, 1)} checked={state.selections[question.career][question.skill] == 1}></input>
							<div className={styles["question__label-container"]} onClick={checkInput(`q${page_id + index}-high`, question.career, question.skill, 1)} >
								<label htmlFor={`q${page_id + index}-high`} className={styles["question__label"]} >{question.answers.high}</label>
							</div>
						</div>
						<div className={styles["question__choice-container"]}>
							<input type="radio" name={`q${page_id + index}`} id={`q${page_id + index}-med`} className={styles["question__choice"]} onChange={handleInputChange(page_id + index, question.career, question.skill, 0)} checked={state.selections[question.career][question.skill] == 0}></input>
							<div className={styles["question__label-container"]} onClick={checkInput(`q${page_id + index}-med`, question.career, question.skill, 0)}>
								<label htmlFor={`q${page_id + index}-med`} className={styles["question__label"]}>{question.answers.medium}</label>
							</div>
						</div>
						<div className={styles["question__choice-container"]}>
							<input type="radio" name={`q${page_id + index}`} id={`q${page_id + index}-low`} className={styles["question__choice"]} onChange={handleInputChange(page_id + index, question.career, question.skill, -1)} checked={state.selections[question.career][question.skill] == -1}></input>
							<div className={styles["question__label-container"]} onClick={checkInput(`q${page_id + index}-low`, question.career, question.skill, -1)}>
								<label htmlFor={`q${page_id + index}-low`} className={styles["question__label"]}>{question.answers.low}</label>
							</div>
						</div>
					</div>
				)
			});
		} else {
			return (
				<form className={styles["submit"]}>
					<h4 className={styles["submit__title"]}>Almost Done!</h4>
					<div className={styles["submit__submit-box"]}>
						<h4 className={styles["submit__label"]}>Find Your State</h4>
						<select className={styles["submit__dropdown"]} name="state" id="state">
							{listStateOptions()}
						</select>
					</div>
					<div className={styles["submit__submit-box"]}>
						<h4 className={styles["submit__label"]}>Find your school district</h4>
						<select className={styles["submit__dropdown"]} name="school-dist" id="school-dist">
							<option value="Huntington Beach Union High">Huntington Beach Union High</option>
						</select>
					</div>
					<div className={styles["submit__submit-box"]}>
						<h4 className={styles["submit__label"]}>Find your school</h4>
						<select className={styles["submit__dropdown"]} name="school" id="school">
							<option value="Edison High">Edison High</option>
							<option value="Fountain Valley High">Fountain Valley High</option>
							<option value="Huntington Beach High">Huntington Beach High</option>
							<option value="Ocean View High">Ocean View High</option>
							<option value="Marina High">Marina High</option>
							<option value="Valley Vista High (Continuation)">Valley Vista High (Continuation)</option>
							<option value="Coast High">Coast High</option>
						</select>
					</div>
					<div className={styles["submit__submit-box"]}>
						<label htmlFor="email">Your Email</label>
						<input id="email" pattern="^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$" onInvalid={onInvalidEmail} required></input>
					</div>
					
					<button type="submit" className={styles["submit__submit-btn"]} onClick={submit}>Submit</button>
				</form>
			);
		}	
	}

	console.log(questions);
	return (
		<div className={styles["container"]}>
			{makeQuestionHTML(state.current_questions)}

      	</div>

	);
}