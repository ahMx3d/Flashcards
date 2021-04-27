import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, View } from "react-native"
import { FontAwesome, Ionicons } from "@expo/vector-icons"
import Decks from "./components/Decks"
import NewDeck from "./components/NewDeck"

const Tabs = () => {
	const Tab = createMaterialTopTabNavigator()
	return (
		<Tab.Navigator
			tabBarPosition="bottom"
			initialRouteName="Decks"
			tabBarOptions={{
				activeTintColor   : "#00f59b",
				inactiveTintColor : "#fff",
				showIcon          : true,
				pressColor        : "#fff",
				tabStyle          : {
					backgroundColor : "#000",
					flexDirection   : "row",
					justifyContent  : "center",
				},
				labelStyle        : {
					fontSize : 18,
				},
			}}
		>
			<Tab.Screen
				name="Decks"
				component={Decks}
				options={{
					tabBarLabel : "Decks",
					tabBarIcon  : ({ focused, color, size = 25 }) => (
						<Ionicons
							name={
								focused ? (
									"ios-bookmarks"
								) : (
									"ios-bookmarks-outline"
								)
							}
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="NewDeck"
				component={NewDeck}
				options={{
					tabBarLabel : "New Deck",
					tabBarIcon  : ({ focused, color, size = 25 }) => (
						<FontAwesome
							name={focused ? "plus-square" : "plus-square-o"}
							color={color}
							size={size}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	)
}

const App = () => {
	return (
		<NavigationContainer>
			<View style={styles.container}>
				<StatusBar translucent style="light" backgroundColor="#000" />
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
