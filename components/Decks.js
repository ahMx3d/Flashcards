import React, { useEffect, useState } from "react"
import {
	ActivityIndicator,
	FlatList,
	StyleSheet,
	TouchableOpacity,
	Text,
	View,
} from "react-native"
import { getDecksAsync, removeDecksAsync } from "../utils/helpers"
import DeckCard from "./DeckCard"

const Decks = ({ navigation }) => {
	const [ decks, setDecks ] = useState([])
	const [ isReady, setIsReady ] = useState(false)

	useEffect(() => {
		// removeDecksAsync()
		getDecksAsync()
			.then((decks) =>
				setDecks((ds) => ds.concat(Object.values(!decks ? {} : decks))),
			)
			.then(() => setIsReady((isReady) => !isReady))
			.catch((error) =>
				console.warn("Error setting decks into state: ", error),
			)
	}, [])

	const renderItem = ({ item }) => (
		<TouchableOpacity
			onPress={() => navigation.navigate("DeckDetail", { item })}
		>
			<DeckCard {...item} />
		</TouchableOpacity>
	)

	return !isReady ? (
		<View style={styles.loadingIndicator}>
			<ActivityIndicator size="large" color="#00ff00" />
		</View>
	) : (
		<View style={{ flex: 1 }}>
			{!decks.length ? (
				<View style={styles.noDecksContainer}>
					<Text style={styles.noDecksText}>
						👋 No Decks added yet
					</Text>
				</View>
			) : (
				<FlatList
					data={decks}
					renderItem={renderItem}
					keyExtractor={({ title }) => title}
				/>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	loadingIndicator : { flex: 1, justifyContent: "center" },
	noDecksContainer : {
		flex           : 1,
		justifyContent : "center",
		alignItems     : "center",
	},
	noDecksText      : {
		color      : "#000",
		fontSize   : 25,
		fontWeight : "bold",
	},
})

export default Decks
