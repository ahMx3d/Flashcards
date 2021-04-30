import React from "react"
import { StyleSheet, Text, View } from "react-native"
import Button from "./Button"

const Score = ({ score, cardsCount, navigation, handleInitials }) => (
	<View style={styles.scoreContainer}>
		<Text style={styles.headerText}>Your Score</Text>
		<Text style={styles.scoreText}>
			{score}/{cardsCount}
		</Text>
		<Button
			styleBtn={styles.backButton}
			styleTxt={styles.backButtonText}
			title="Back"
			onPress={() => navigation.navigate("DeckDetail")}
		/>
		<Button
			styleBtn={styles.reQuizButton}
			styleTxt={styles.reQuizButtonText}
			title="Re-Quiz"
			onPress={() => {
				handleInitials()
			}}
		/>
	</View>
)

const styles = StyleSheet.create({
	scoreContainer   : {
		flex           : 1,
		alignItems     : "center",
		justifyContent : "center",
	},
	headerText       : { fontSize: 50, color: "#000" },
	scoreText        : { fontSize: 50, color: "#000", letterSpacing: 5 },
	backButton       : {
		backgroundColor   : "#000",
		marginVertical    : 15,
		paddingHorizontal : 50,
	},
	backButtonText   : { color: "#fff", fontWeight: "bold" },
	reQuizButton     : {
		backgroundColor   : "#000",
		marginVertical    : 15,
		paddingHorizontal : 50,
	},
	reQuizButtonText : { color: "#fff", fontWeight: "bold" },
})

export default Score
