import AsyncStorage from "@react-native-async-storage/async-storage"
import * as Notifications from "expo-notifications"
import * as Permissions from "expo-permissions"
import { getDecks } from "./api"

const NOTIFICATION_KEY = "Flashcards:notifications"

export const clearLocalNotifications = async () =>
	await AsyncStorage.removeItem(NOTIFICATION_KEY).then(
		Notifications.cancelAllScheduledNotificationsAsync(),
	)

export const createNotification = () => ({
	title   : "Review your Flashcards!",
	body    : "👋 don't forget to review you stats for today",
	ios     : {
		sound : true,
	},
	android : {
		sound    : true,
		priority : "high",
		sticky   : false,
		vibrate  : true,
	},
})

export const setLocalNotification = async () => {
	await AsyncStorage.getItem(NOTIFICATION_KEY).then(JSON.parse).then(async (data) => {
		if (data === null) {
			await Permissions.askAsync(
				Permissions.NOTIFICATIONS,
			).then(async ({ status }) => {
				if (status === "granted") {
					Notifications.cancelAllScheduledNotificationsAsync()
					let tomorrow = new Date()
					tomorrow.setDate(tomorrow.getDate() + 1)
					tomorrow.setHours(12)
					tomorrow.setMinutes(0)

					Notifications.scheduleLocalNotificationAsync(
						createNotification(),
						{
							time   : tomorrow,
							repeat : "day",
						},
					)
					await AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
				}
			})
		}
	})
}

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
