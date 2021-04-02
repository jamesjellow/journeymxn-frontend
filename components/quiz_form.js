import Link from 'next/link'

import styles from '../styles/components/quiz_form.module.scss'


function makeAnswerChoicesHTML(answers, question_num) {
	return answers.map((answer) => {
		return (
			<div class="choice__radio-group">
				<input type="radio" name={`choice${question_num + 1}`} className={styles["choice__btn"]} />
				<label className={styles["choice__label"]}>{answer}</label>
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
		</div>
	);
}