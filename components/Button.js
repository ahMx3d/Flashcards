import React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

const Button = ({ styleBtn, styleTxt, title, onPress }) => (
	<TouchableOpacity style={[ styles.button, styleBtn ]} onPress={onPress}>
		<Text style={[ styles.buttonText, styleTxt ]}>{title}</Text>
	</TouchableOpacity>
)

const styles = StyleSheet.create({
	button     : {
		borderWidth       : 2,
		alignSelf         : "center",
		paddingHorizontal : 45,
		paddingVertical   : 15,
		borderRadius      : 7,
	},
	buttonText : {
		fontSize : 25,
	},
})

export default Button
