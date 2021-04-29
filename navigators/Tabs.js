import React, { useEffect } from "react"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { FontAwesome, Ionicons } from "@expo/vector-icons"
import { connect } from "react-redux"
import DecksStackScreen from "./DecksStackScreen"
import NewDeckStackScreen from "./NewDeckStackScreen"
import { handleInitialDecks } from "../actions"

const Tabs = ({ dispatch }) => {
	const Tab = createMaterialTopTabNavigator()

	useEffect(() => {
		dispatch(handleInitialDecks())
	}, [])

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
				component={DecksStackScreen}
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
				component={NewDeckStackScreen}
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

export default connect()(Tabs)
