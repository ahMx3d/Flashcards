import React from "react"
import { StyleSheet, View } from "react-native"
import DeckCard from "./DeckCard"
import Button from "./Button"

const DeckDetail = ({ navigation, route }) => {
	const { item } = route.params
	return (
		<View style={styles.detailContainer}>
			<DeckCard {...item} style={{ borderBottomWidth: 0 }} />
			<View style={styles.buttonsContainer}>
				<Button
					styleBtn={{ backgroundColor: "#fff", marginVertical: 5 }}
					styleTxt={{ color: "#000" }}
					title="Add Card"
					onPress={() => navigation.navigate('NewCard')}
				/>
				<Button
					styleBtn={{ backgroundColor: "#000", marginVertical: 5 }}
					styleTxt={{ color: "#fff" }}
					title="Start Quiz"
					onPress={() => console.log("pressed")}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	detailContainer  : {
		flex           : 1,
		justifyContent : "center",
		alignItems     : "center",
	},
	buttonsContainer : {
		alignItems     : "center",
		justifyContent : "center",
	},
})

export default DeckDetail
