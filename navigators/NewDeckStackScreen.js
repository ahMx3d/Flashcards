import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import NewDeck from "../components/NewDeck"

const NewDeckStackScreen = () => {
	const NewDeckStack = createStackNavigator()
	return (
		<NewDeckStack.Navigator
			initialRouteName="NewDeck"
			screenOptions={{
				headerTintColor  : "#00f59b",
				headerStyle      : { backgroundColor: "#000" },
				headerTitleAlign : "center",
			}}
		>
			<NewDeckStack.Screen
				name="NewDeck"
				component={NewDeck}
				options={{ title: "New Deck!", headerShown: false }}
			/>
		</NewDeckStack.Navigator>
	)
}

export default NewDeckStackScreen
