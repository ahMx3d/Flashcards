import { getDecksAsync } from "../utils/helpers"

export const SAVE_DECK = "SAVE_DECK"
export const RECEIVE_DECKS = "RECEIVE_DECKS"

export const saveDeck = (deck) => ({
	type : SAVE_DECK,
	deck,
})

export const handleInitialDecks = () => (dispatch) =>
	getDecksAsync().then((decks) => {
		dispatch(receiveDecks(decks))
	})

export const receiveDecks = (decks) => ({
	type  : RECEIVE_DECKS,
	decks,
})
