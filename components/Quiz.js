import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Button from "./Button"

const Quiz = () => (
	<View style={styles.quizContainer}>
		<Text style={styles.cardsCount}>2/2</Text>
		<View style={styles.cardWrapper}>
			<Text style={styles.cardTitle}>
				Does React Native work with android?
			</Text>
			<TouchableOpacity>
				<Text style={styles.cardFlipper}>Answer</Text>
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

export default Quiz
