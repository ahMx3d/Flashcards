import React, { useEffect, useState } from "react"
import { FlatList, TouchableOpacity, View } from "react-native"
import { getDecksAsync } from "../utils/helpers"
import DeckCard from "./DeckCard"

const Decks = ({ navigation }) => {
	const [ decks, setDecks ] = useState([])

	useEffect(() => {
		getDecksAsync()
			.then((decks) => setDecks((ds) => ds.concat(Object.values(decks))))
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

	return (
		<View style={{ flex: 1 }}>
			{decks && (
				<FlatList
					data={decks}
					renderItem={renderItem}
					keyExtractor={({ title }) => title}
				/>
			)}
		</View>
	)
}

export default Decks
