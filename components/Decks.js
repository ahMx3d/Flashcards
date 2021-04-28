import React, { useEffect, useState } from "react"
import { FlatList, TouchableOpacity, View } from "react-native"
import { getDecks } from "../utils/api"
import DeckCard from "./DeckCard"

const Decks = ({ navigation }) => {
	const [ decks, setDecks ] = useState([])

	useEffect(() => {
		setDecks((decks) => decks.concat(Object.values(getDecks())))
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
