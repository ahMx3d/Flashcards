import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import Input from "./Input"
import Button from "./Button"

const NewDeck = () => {
	const [ value, setValue ] = useState("")
	return (
		<View style={styles.newDeckContainer}>
			<View style={styles.newDeckTextWrapper}>
				<Text style={styles.newDeckText}>
					What is the title of your new deck?
				</Text>
			</View>
			<Input
				style={styles.newDeckInput}
				onChangeText={(value) => setValue(value)}
				value={value}
				placeholder="Deck Title"
			/>
			<Button
				styleBtn={{ backgroundColor: "#000" }}
				styleTxt={{ color: "#fff" }}
				title="Submit"
				onPress={() => console.log("pressed")}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container          : {
		flex            : 1,
		backgroundColor : "#fff",
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
})

export default NewDeck
