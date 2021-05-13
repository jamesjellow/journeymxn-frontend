import { useReducer, useContext, createContext, useEffect} from 'react'
import jsonData from '../public/json/quiz.json'

const StateContext = createContext()
const StateDispatchContext = createContext()

const reducer = (state, action) => {
	let startIndex;
	let endIndex;

	switch (action.type) {
		case 'NAV-CHANGE':
			state.page_num = action.page_num;
			state = Object.assign({}, state);
			return state;
		case 'QUIZ-NEXT':
			state.career_index +=  1
			if (state.career_index == state.careers_length) {
				state.quiz_done = true;
			}
			
			startIndex = state.career_index * 5;
			endIndex = startIndex + 5;
			state.current_questions = state.questions.slice(startIndex, endIndex);
			console.log("next:", state);
			state = Object.assign({}, state);
			return state;
		case 'QUIZ-PREV':
			state.career_index -= 1;
			if (state.career_index == -1)
				state.career_index += 1;
			
			startIndex = state.career_index * 5;
			endIndex = startIndex + 5;
			state.current_questions = state.questions.slice(startIndex, endIndex);
			console.log("prev:", state);
			state = Object.assign({}, state);
			return state;
		case 'QUIZ-SELECT':
			state.selections[action.career][action.skill] = action.score;
			state = Object.assign({}, state);
			return state;
		case 'QUIZ-END':
			state.quiz_done = false;
			state = Object.assign({}, state);
			return state;
		case 'LOGIN':
			state.is_login = true;
			state = Object.assign({}, state);
			return state;
		case 'LOGOUT':
			state.is_login = false;
			state = Object.assign({}, state);
			return state;
		default:
			throw new Error(`Unknown Action: ${action.type}`);
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
	initial_state["selections"] = new Object();
	initial_state["career_answers"] = new Array();
	initial_state["career_index"] = 0;
	initial_state["careers_length"] = 0;
	initial_state["question_start"] = false;
	initial_state["is_login"] = false;
	initial_state["quiz_done"] = false;

	let current_career = "";
	quiz.forEach((entry) => {
		if (current_career != entry["career"]) {
			current_career = entry["career"]
			initial_state["careers"].push(current_career);
		}

		if (entry["career"] == initial_state["current_career"]) {
			initial_state["current_questions"].push(entry);
		}

		if (initial_state["selections"][entry["career"]] == undefined)
			initial_state["selections"][entry["career"]] = new Object();
		initial_state["selections"][entry["career"]][entry["skill"]] = null; // -2 is none, -1 is low, 0 is med, 1 is high
	});

	initial_state["careers_length"] = initial_state["careers"].length;

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