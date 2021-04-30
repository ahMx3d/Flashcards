import { StyleSheet } from "react-native"

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
	loadingIndicator : { flex: 1, justifyContent: "center" },
})

export default styles
