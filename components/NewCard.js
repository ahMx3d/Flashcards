import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { connect } from "react-redux"
import Input from "./Input"
import Button from "./Button"
import { addCardToDeck } from "../actions"
import { addCardToDeckAsync } from "../utils/helpers"

const NewCard = ({ navigation, route, dispatch }) => {
	const [ question, setQuestion ] = useState("")
	const [ answer, setAnswer ] = useState("")
	const [ questionValidationError, setQuestionValidationError ] = useState(
		false,
	)
	const [ answerValidationError, setAnswerValidationError ] = useState(false)

	const submitCard = () => {
		if (!question) {
			return setQuestionValidationError(true)
		}
		if (!answer) {
			return setAnswerValidationError(true)
		}

		const { item } = route.params
		const { title } = item

		// Update Redux
		dispatch(addCardToDeck(title, { question, answer }))
		// Update AsyncStorage
		addCardToDeckAsync(title, { question, answer })
		// reset state
		setAnswer("")
		setQuestion("")
		// Navigate to card detail
		navigation.navigate("DeckDetail", { item })
	}

	return (
		<View style={{ flex: 1, justifyContent: "center" }}>
			<Input
				style={{ marginHorizontal: 25, marginVertical: 25 }}
				onChangeText={(question) => {
					setQuestion(question)
					setQuestionValidationError(false)
				}}
				value={question}
				placeholder="Enter Question"
			/>
			{questionValidationError && (
				<Text style={styles.validationError}>
					Question can't be empty!
				</Text>
			)}
			<Input
				style={{ marginHorizontal: 25, marginVertical: 25 }}
				onChangeText={(answer) => {
					setAnswer(answer)
					setAnswerValidationError(false)
				}}
				value={answer}
				placeholder="Enter Answer"
			/>
			{answerValidationError && (
				<Text style={styles.validationError}>
					Answer can't be empty!
				</Text>
			)}
			<Button
				styleBtn={{ backgroundColor: "#000", marginVertical: 25 }}
				styleTxt={{ color: "#fff" }}
				title="Submit"
				onPress={submitCard}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	validationError : {
		color      : "red",
		fontSize   : 25,
		fontWeight : "bold",
		alignSelf  : "center",
	},
})

export default connect()(NewCard)
