import { useReducer, useContext, createContext } from 'react'

const QuizStateContext = createContext()
const QuizDispatchContext = createContext()

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
];
let max_length = questions_and_choices.length;

const reducer = (state, action) => {
	switch (action.type) {
		case 'NEXT':
			state.index += 1
			if (state.index == max_length)
				state.index = max_length - 1;
			state.question = questions_and_choices[state.index]["question"];
			state.choices = questions_and_choices[state.index]["answers"];
			return state;
		case 'PREV':
			state.index -= 1
			if (state.index == max_length)
				state.index = max_length - 1;
			state.question = questions_and_choices[state.index]["question"];
			state.choices = questions_and_choices[state.index]["answers"];
			return state;
		default:
			throw new Error(`Unknown Action: ${action.type}`)
	}
}

export const quizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {"index": 0, "question": questions_and_choices[0]["question"], "choices": questions_and_choices[0]["answers"]});

  return (
    <quizDispatchContext.Provider value={dispatch}>
      <quizStateContext.Provider value={state}>
        {children}
      </quizStateContext.Provider>
    </quizDispatchContext.Provider>
  )
}

export const useQuiz = () => useContext(QuizStateContext)
export const useDispatchQuiz = () => useContext(QuizDispatchContext)