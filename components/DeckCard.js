import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const DeckCard = ({ title, questions }) => {
	return (
		<View style={styles.deckContainer}>
			<TouchableOpacity onPress={() => console.log("title pressed")}>
				<Text style={styles.deckTitle}>{title}</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => console.log("count pressed")}>
				<Text style={styles.deckContent}>{questions.length} cards</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	deckContainer : {
		alignItems        : "center",
		padding           : 50,
		borderBottomWidth : 2,
		borderBottomColor : "gray",
	},
	deckTitle     : {
		fontSize   : 40,
		fontWeight : "bold",
		textAlign  : "center",
	},
	deckContent   : {
		color     : "gray",
		fontSize  : 25,
		textAlign : "center",
	},
})

export default DeckCard
