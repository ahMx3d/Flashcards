import React, { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { connect } from "react-redux"
import Button from "./Button"

const Quiz = (props) => {
	// dispatch, navigation, route
	// { deck, title, cardsCount, cards }

	const [ offset, setOffset ] = useState(0)
	const [ flipper, setFlipper ] = useState(false)
	const [ score, setScore ] = useState(0)

	return (
		<View style={styles.quizContainer}>
			<Text style={styles.cardsCount}>
				{offset + 1}/{props.cardsCount}
			</Text>
			<View style={styles.cardWrapper}>
				<Text style={styles.cardTitle}>
					{flipper ? (
						props.cards[offset].answer
					) : (
						props.cards[offset].question
					)}
				</Text>
				<TouchableOpacity
					onPress={() => setFlipper((flipper) => !flipper)}
				>
					<Text style={styles.cardFlipper}>
						{flipper ? "Question" : "Answer"}
					</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.buttonsContainer}>
				<Button
					styleBtn={styles.correctButton}
					styleTxt={{ color: "#fff" }}
					title="Correct"
					onPress={() => console.log("pressed")}
				/>
				<Button
					styleBtn={styles.incorrectButton}
					styleTxt={{ color: "#fff" }}
					title="Incorrect"
					onPress={() => console.log("pressed")}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	quizContainer    : {
		flex              : 1,
		alignItems        : "center",
		justifyContent    : "space-around",
		paddingHorizontal : 10,
	},
	cardsCount       : {
		alignSelf     : "flex-start",
		fontSize      : 25,
		fontWeight    : "bold",
		color         : "#000",
		letterSpacing : 5,
	},
	cardWrapper      : {
		flex           : 2,
		alignItems     : "center",
		justifyContent : "center",
	},
	cardTitle        : {
		fontSize       : 50,
		textAlign      : "center",
		marginVertical : 20,
	},
	cardFlipper      : {
		fontSize        : 27,
		color           : "#ad0600",
		fontWeight      : "bold",
		backgroundColor : "transparent",
	},
	buttonsContainer : {
		flex           : 1,
		alignItems     : "center",
		justifyContent : "center",
	},
	correctButton    : {
		backgroundColor   : "#006100",
		marginVertical    : 5,
		borderColor       : "#006100",
		borderWidth       : 0,
		paddingVertical   : 12,
		paddingHorizontal : 79,
	},
	incorrectButton  : {
		backgroundColor   : "#ad0600",
		marginVertical    : 5,
		borderColor       : "#ad0600",
		borderWidth       : 0,
		paddingVertical   : 12,
		paddingHorizontal : 70,
	},
})

const mapStateToProps = ({ decks }, { route }) => {
	const { title } = route.params.item
	const deck = decks[title]
	return {
		deck,
		title      : deck.title,
		cardsCount : deck.questions.length,
		cards      : deck.questions,
	}
}

export default connect(mapStateToProps)(Quiz)
