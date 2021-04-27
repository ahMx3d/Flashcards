import React, { useEffect, useState } from "react"
import { FlatList, View } from "react-native"
import { getDecks } from "../utils/api"
import DeckCard from "./DeckCard"

const Decks = () => {
	const [ decks, setDecks ] = useState([])

	useEffect(() => {
		setDecks((decks) => decks.concat(Object.values(getDecks())))
	}, [])

	const renderItem = ({ item }) => <DeckCard {...item} />

	return (
		<View style={{ flex: 1, marginTop: 50 }}>
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
