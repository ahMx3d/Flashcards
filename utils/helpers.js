import AsyncStorage from "@react-native-async-storage/async-storage"
import { getDecks } from "./api"

const DECKS_KEY = "Flashcards:decks"

const setDummyDecksAsync = async () => {
	try {
		const decks = getDecks()
		await AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks))
	} catch (error) {
		console.warn("AsyncStorage error setting decks:", error)
	}
}

const formatDecks = (decks) =>
	decks ? JSON.parse(decks) : setDummyDecksAsync()

export const getDecksAsync = async () => {
	try {
		return await AsyncStorage.getItem(DECKS_KEY).then(formatDecks)
	} catch (error) {
		console.warn("AsyncStorage error getting decks:", error)
	}
}

export const getDeckAsync = async (title) =>
	await AsyncStorage.getItem(DECKS_KEY)
		.then((decks) => (!decks ? {} : JSON.parse(decks)))
		.then((decks) => decks[title])

export const setDeckAsync = async (title) => {
	try {
		await getDecksAsync()
			.then((decks) => ({
				...decks,
				[title] : {
					title,
					questions : decks[title] ? decks[title].questions : [],
				},
			}))
			.then(async (decks) => {
				await AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks))
			})
	} catch (error) {
		console.warn("AsyncStorage error setting new deck:", error)
	}
}

export const addCardToDeckAsync = async (title, card) => {
	try {
		await getDecksAsync()
			.then((decks) => ({
				...decks,
				[title] : {
					title,
					questions : decks[title].questions.concat([ card ]),
				},
			}))
			.then(async (decks) => {
				await AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks))
			})
	} catch (error) {
		console.warn("AsyncStorage error setting new deck:", error)
	}
}

export const removeDecksAsync = async () =>
	await AsyncStorage.removeItem(DECKS_KEY)
