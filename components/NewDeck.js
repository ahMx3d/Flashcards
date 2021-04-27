import React from "react"
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native"

const NewDeck = () => (
	<View style={styles.newDeckContainer}>
		<View style={styles.newDeckTextWrapper}>
			<Text style={styles.newDeckText}>
				What is the title of your new deck?
			</Text>
		</View>
		<TextInput
			style={styles.newDeckInput}
			// onChangeText={}
			// value={}
			placeholder="Deck Title"
		/>
		<TouchableOpacity style={styles.newDeckButton}>
			<Text style={styles.newDeckSubmit}>Submit</Text>
		</TouchableOpacity>
	</View>
)

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
		height            : 55,
		marginHorizontal  : 25,
		marginVertical    : 50,
		borderWidth       : 2,
		paddingHorizontal : 10,
		borderRadius      : 7,
		fontSize          : 20,
	},
	newDeckButton      : {
		alignSelf         : "center",
		backgroundColor   : "#000",
		paddingHorizontal : 45,
		paddingVertical   : 15,
		borderRadius      : 7,
	},
	newDeckSubmit      : {
		color    : "#fff",
		fontSize : 25,
	},
})

export default NewDeck
