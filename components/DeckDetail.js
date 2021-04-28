import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import DeckCard from "./DeckCard"

const DeckDetail = ({ navigation, route }) => {
	const { item } = route.params
	return (
		<View style={styles.detailContainer}>
			<DeckCard {...item} style={{ borderBottomWidth: 0 }} />
			<View style={styles.buttonsContainer}>
				<TouchableOpacity style={[ styles.button, styles.cardButton ]}>
					<Text style={[ styles.buttonText, styles.cardButtonText ]}>
						Add Card
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={[ styles.button, styles.quizButton ]}>
					<Text style={[ styles.buttonText, styles.quizButtonText ]}>
						Start Quiz
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	detailContainer  : {
		flex           : 1,
		justifyContent : "center",
		alignItems     : "center",
	},
	buttonsContainer : {
		alignItems     : "center",
		justifyContent : "center",
	},
	button           : {
		marginVertical    : 5,
		alignSelf         : "center",
		paddingHorizontal : 45,
		paddingVertical   : 15,
		borderRadius      : 7,
	},
	buttonText       : {
		fontSize : 25,
	},
	quizButton       : {
		backgroundColor : "#000",
	},
	cardButton       : {
		backgroundColor : "#fff",
		borderWidth     : 2,
	},
	quizButtonText   : {
		color : "#fff",
	},
	cardButtonText   : {
		color : "#000",
	},
})

export default DeckDetail
