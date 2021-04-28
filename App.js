import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import Constants from 'expo-constants';
import React from "react"
import { StyleSheet, View } from "react-native"
import Tabs from "./navigators/Tabs"

const App = () => {
	return (
		<NavigationContainer>
			<View style={styles.container}>
				<View style={{ height: Constants.statusBarHeight }}>
					<StatusBar
						translucent
						style="light"
						backgroundColor="#000"
					/>
				</View>
				<Tabs />
			</View>
		</NavigationContainer>
	)
}

const styles = StyleSheet.create({
	container : {
		flex            : 1,
		backgroundColor : "#fff",
	},
})

export default App
