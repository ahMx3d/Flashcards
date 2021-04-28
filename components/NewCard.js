import React, { useState } from "react"
import { Text, View } from "react-native"
import Input from "./Input"
import Button from "./Button"

const NewCard = () => {
	const [ question, setQuestion ] = useState("")
	const [ answer, setAnswer ] = useState("")
	return (
		<View style={{ flex: 1, justifyContent: "center" }}>
			<Input
				style={{ marginHorizontal: 25, marginVertical: 25 }}
				onChangeText={(question) => setQuestion(question)}
				value={question}
				placeholder="Enter Question"
			/>
			<Input
				style={{ marginHorizontal: 25, marginVertical: 25 }}
				onChangeText={(answer) => setAnswer(answer)}
				value={answer}
				placeholder="Enter Answer"
			/>
			<Button
				styleBtn={{ backgroundColor: "#000", marginVertical: 25 }}
				styleTxt={{ color: "#fff" }}
				title="Submit"
				onPress={() => console.log("pressed")}
			/>
		</View>
	)
}

export default NewCard
