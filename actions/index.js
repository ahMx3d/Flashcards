import { getDecksAsync } from "../utils/helpers"

export const ADD_CARD_TO_DECK = "ADD_CARD_TO_DECK"
export const SAVE_DECK = "SAVE_DECK"
export const RECEIVE_DECKS = "RECEIVE_DECKS"

export const addCardToDeck = (deck, card) => ({
	type : ADD_CARD_TO_DECK,
	deck,
	card,
})

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
