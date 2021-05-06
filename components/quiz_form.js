import Link from 'next/link'

import styles from '../styles/components/quiz_form.module.scss'


function makeAnswerChoicesHTML(answers, question_num) {
	return answers.map((answer, index) => {
		return (
			<div className={styles["choice__radio-group"]}>
				<input type="radio" id={`q${question_num + 1}a${index + 1}`} name={`choice${question_num + 1}`} className={styles["choice__radio-btn"]} />
				<label for={`q${question_num + 1}a${index + 1}`} className={styles["choice__label"]}>{answer}</label>
			</div>
		)
	})
}

function makeQuizzes(questions) {
	questions.forEach((qna_pair, index) => {
		let question = qna_pair["question"];
		let answers = qna_pair["answers"];

		let htmlDOM = 1;
	});
}

export default function QuizForm({quizState}) {
	return (
		<div className={styles["container"]}>

			{/* <ul id="quiz" className={styles["slide-container"]}>
				<li id="slide" className={styles["quiz-slide"]}>
					<div class={`${styles["quiz-slide__content"]} ${styles["quiz-slide__content--1"]}`}>
						<span>Lorem</span>
					</div>    
				</li>
				<li id="slide" className={styles["quiz-slide"]}>
					<div class={`${styles["quiz-slide__content"]} ${styles["quiz-slide__content--2"]}`}>
						<span>Ipsum</span>
					</div>    
				</li>
				<li id="slide" className={styles["quiz-slide"]}>
					<div class={`${styles["quiz-slide__content"]} ${styles["quiz-slide__content--3"]}`}>
						<span>Spani</span>
					</div>    
				</li>
			</ul> */}

			<span className={`${styles["nav-btn"]} ${styles["nav-btn__left"]} fa fa-chevron-left fa-3x`} id="left-btn"></span>
			<span className={`${styles["nav-btn"]} ${styles["nav-btn__right"]} fa fa-chevron-right fa-3x`} id="right-btn"></span>
			
      	</div>

	);
}