import { combineReducers } from "redux"
import { RECEIVE_DECKS, SAVE_DECK, ADD_CARD_TO_DECK } from "../actions"

/* 

Object {
  "card": Object {
    "answer": "fads",
    "question": "dsf",
  },
  "deck": "Udacicards",
  "type": "ADD_CARD_TO_DECK",
}

 */

const decks = (state = {}, action) => {
	switch (action.type) {
		case RECEIVE_DECKS:
			return {
				...state,
				...action.decks,
			}
		case SAVE_DECK:
			return {
				...state,
				[action.deck.title]: { ...action.deck },
			}
		case ADD_CARD_TO_DECK:
			const { card, deck } = action
			return {
				...state,
				[deck] : {
					...state[deck],
					questions : [ ...state[deck].questions, card ],
				},
			}

		default:
			return state
	}
}

export default combineReducers({ decks })
