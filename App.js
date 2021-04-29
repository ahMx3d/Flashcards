import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import Constants from "expo-constants"
import React from "react"
import { StyleSheet, View } from "react-native"
import { createStore } from "redux"
import { Provider } from "react-redux"
import reducer from "./reducer"
import middleware from "./middleware"
import Tabs from "./navigators/Tabs"

const App = () => (
	<Provider store={createStore(reducer, middleware)}>
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
	</Provider>
)

const styles = StyleSheet.create({
	container : {
		flex            : 1,
		backgroundColor : "#fff",
	},
})

export default App
