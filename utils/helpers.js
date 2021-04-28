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

export const getDecksAsync = async () => {
	try {
		setDummyDecksAsync()
		return await AsyncStorage.getItem(DECKS_KEY).then(
			(decks) => (!decks ? {} : JSON.parse(decks)),
		)
	} catch (error) {
		console.warn("AsyncStorage error getting decks:", error)
	}
}
