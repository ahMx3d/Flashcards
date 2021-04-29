import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { connect } from "react-redux"
import Input from "./Input"
import Button from "./Button"
import { saveDeck } from "../actions"
import { setDeckAsync } from "../utils/helpers"

const NewDeck = ({ navigation, decks, dispatch, route }) => {
	const [ value, setValue ] = useState("")
	const [ validationError, setValidationError ] = useState(false)

	const submitDeck = () => {
		if (!value) {
			return setValidationError(true)
		}

		const item = {
			title     : value,
			questions : decks[value] ? decks[value].questions : [],
		}

		// Update Redux
		dispatch(saveDeck(item))
		// save into AsyncStorage
		setDeckAsync(value)
		// reset state
		setValue("")
		// navigate to details
		navigation.navigate("DeckDetail", { item })
	}

	return (
		<View style={styles.newDeckContainer}>
			<View style={styles.newDeckTextWrapper}>
				<Text style={styles.newDeckText}>
					What is the title of your new deck?
				</Text>
			</View>
			{validationError && (
				<Text style={styles.validationError}>
					Title can't be empty!
				</Text>
			)}
			<Input
				style={styles.newDeckInput}
				onChangeText={(value) => {
					setValue(value)
					setValidationError(false)
				}}
				value={value}
				placeholder="Deck Title"
			/>
			<Button
				styleBtn={{ backgroundColor: "#000" }}
				styleTxt={{ color: "#fff" }}
				title="Submit"
				onPress={submitDeck}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container          : {
		flex            : 1,
		backgroundColor : "#fff",
		justifyContent: 'center'
	},
	newDeckContainer   : {
		flex           : 1,
		justifyContent : "center",
	},
	newDeckTextWrapper : {
		alignItems : "center",
	},
	newDeckText        : {
		fontSize   : 50,
		textAlign  : "center",
		fontWeight : "bold",
	},
	newDeckInput       : {
		marginHorizontal : 25,
		marginVertical   : 50,
	},
	validationError    : {
		color      : "red",
		fontSize   : 25,
		fontWeight : "bold",
		alignSelf  : "center",
	},
})

const mapStateToProps = ({ decks }) => ({ decks })

export default connect(mapStateToProps)(NewDeck)
