import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import Decks from "../components/Decks"
import DeckDetail from "../components/DeckDetail"
import NewCard from '../components/NewCard'

const DecksStackScreen = () => {
	const DecksStack = createStackNavigator()
	return (
		<DecksStack.Navigator
			initialRouteName="Decks"
			screenOptions={{
				headerTintColor  : "#00f59b",
				headerStyle      : { backgroundColor: "#000" },
				headerTitleAlign : "center",
			}}
		>
			<DecksStack.Screen
				name="Decks"
				component={Decks}
				options={{ title: "Decks!", headerShown: false }}
			/>
			<DecksStack.Screen
				name="DeckDetail"
				component={DeckDetail}
				options={({ route }) => {
					const { title } = route.params.item
					return { title }
				}}
			/>
			<DecksStack.Screen
				name="NewCard"
				component={NewCard}
				options={{ title: "Add Card!" }}
			/>
		</DecksStack.Navigator>
	)
}

export default DecksStackScreen
