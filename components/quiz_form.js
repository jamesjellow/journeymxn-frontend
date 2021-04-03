import Link from 'next/link'

import styles from '../styles/components/quiz_form.module.scss'


function makeAnswerChoicesHTML(answers, question_num) {
	return answers.map((answer, index) => {
		return (
			<div class={styles["choice__radio-group"]}>
				<input type="radio" id={`q${question_num + 1}a${index + 1}`} name={`choice${question_num + 1}`} className={styles["choice__radio-btn"]} />
				<label for={`q${question_num + 1}a${index + 1}`} className={styles["choice__label"]}>{answer}</label>
			</div>
		)
	})
}

export default function QuizForm({
	questions = [{"question": "default question1",
				  "answers": ["answer1", "answer2", "answer3"]},
				 {"question": "default question2",
				  "answers": ["answer1", "answer2", "answer3"]}]
}) {
	return (
		<div className={styles["card"]}>
			{questions.map((each, index) => {
				return  (
					<div className="quiz">
						<div className={styles["question"]}>
							{each.question}
						</div>
						{makeAnswerChoicesHTML(each.answers, index)}
					</div>
				);
			})}

			<button className={styles["quiz__submit-btn"]}>Submit</button>
		</div>
	);
}