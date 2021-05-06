import { useReducer, useContext, createContext } from 'react'
import jsonData from '../public/json/quiz.json'

const StateContext = createContext()
const StateDispatchContext = createContext()

const reducer = (state, action) => {
	switch (action.type) {
		case 'NAV-CHANGE':
			state.page_num = action.page_num;
			return state;
		case 'QUIZ-NEXT':
			state.index += 1
			if (state.index == max_length)
				state.index = max_length - 1;
			state.question = questions_and_choices[state.index]["question"];
			state.choices = questions_and_choices[state.index]["answers"];
			return state;
		case 'QUIZ-PREV':
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

export const StateProvider = ({ children }) => {
	let quiz = jsonData;
	console.log(quiz)
	const initial_state = new Object();
	initial_state["page_num"] = 1;
	initial_state["questions"] = quiz;
	initial_state["careers"] = new Array();
	initial_state["current_career"] = quiz[0]["career"];
	initial_state["current_questions"] = new Array();
	initial_state["career_index"] = 0;

	let current_career = "";
	quiz.forEach((entry) => {
		if (current_career != entry["career"]) {
			current_career = entry["career"]
			initial_state["careers"].push(current_career);
		}

		if (entry["career"] == initial_state["current_career"]) {
			initial_state["current_questions"].push(entry);
		}
	});

	console.log(initial_state);

	const [state, dispatch] = useReducer(reducer, initial_state);

	return (
		<StateDispatchContext.Provider value={dispatch}>
			<StateContext.Provider value={state}>
				{children}
			</StateContext.Provider>
		</StateDispatchContext.Provider>
	)
}

export const useState = () => useContext(StateContext)
export const useDispatchState = () => useContext(StateDispatchContext)