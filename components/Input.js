import React from "react"
import { StyleSheet, TextInput } from "react-native"

const Input = ({ value, placeholder, onChangeText, style }) => (
	<TextInput
		style={[ styles.textInput, style ]}
		onChangeText={onChangeText}
		value={value}
		placeholder={placeholder}
	/>
)

const styles = StyleSheet.create({
	textInput : {
		height            : 55,
		borderWidth       : 2,
		paddingHorizontal : 10,
		borderRadius      : 7,
		fontSize          : 20,
	},
})

export default Input
