import React, { Component, useState } from "react"
import {
	ActivityIndicator,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native"
import { connect } from "react-redux"
import Button from "./Button"

class Quiz extends Component {
	state = {
		questions    : [],
		answers      : [],
		quizLength   : 0,
		qIndex       : 0,
		aIndex       : 0,
		quiz         : [],
		isReady      : false,
		flipper      : false,
		score        : 0,
		cardsCounter : 1,
	}

	componentDidMount() {
		this.handleInitials()
	}

	handleInitials = () => {
		const { cardsCount, cards } = this.props
		this.setState(({ quiz, questions, answers }) => ({
			qIndex       : Math.floor(Math.random() * cardsCount),
			aIndex       : Math.floor(Math.random() * cardsCount),
			quiz         : quiz.concat(cards),
			isReady      : true,
			questions    : questions.concat(
				cards.map(({ question }) => question),
			),
			answers      : answers.concat(cards.map(({ answer }) => answer)),
			quizLength   : cardsCount,
			score        : 0,
			cardsCounter : 1,
			flipper      : false,
		}))
	}

	flip = () => {
		this.setState(({ flipper }) => ({ flipper: !flipper }))
	}

	handleQuizLogic = () => {
		const { cardsCount } = this.props
		this.setState(
			({
				cardsCounter,
				qIndex,
				aIndex,
				questions,
				answers,
				quizLength,
			}) => {
				const quizNewLength = --quizLength
				return {
					cardsCounter :
						cardsCounter >= cardsCount
							? cardsCount
							: ++cardsCounter,
					flipper      : false,
					questions    : questions.filter((q, idx) => qIndex !== idx),
					answers      : answers.filter((a, idx) => aIndex !== idx),
					qIndex       : Math.floor(Math.random() * quizNewLength),
					aIndex       : Math.floor(Math.random() * quizNewLength),
					quizLength   : quizNewLength,
				}
			},
		)
	}

	calculateScore = (isCorrect) => {
		this.setState(({ score, questions, qIndex, quiz, answers, aIndex }) => {
			const questionCard = quiz.filter(
				({ question }) => question === questions[qIndex],
			)
			const [ answer ] = isCorrect
				? questionCard.map(
						({ answer }) =>
							answer === answers[aIndex] ? true : false,
					)
				: questionCard.map(
						({ answer }) =>
							answer !== answers[aIndex] ? true : false,
					)
			return {
				score : !answer ? score : ++score,
			}
		})
	}

	submit = (isCorrect) => {
		this.calculateScore(isCorrect)
		this.handleQuizLogic()
	}

	render = () => {
		const { cardsCount, navigation } = this.props,
			{
				questions,
				answers,
				qIndex,
				aIndex,
				flipper,
				score,
				cardsCounter,
				isReady,
				quizLength,
			} = this.state
		return !isReady ? (
			<View style={styles.loadingIndicator}>
				<ActivityIndicator size="large" color="#00ff00" />
			</View>
		) : !quizLength ? (
			<View
				style={{
					flex           : 1,
					alignItems     : "center",
					justifyContent : "center",
				}}
			>
				<Text style={{ fontSize: 50, color: "#000" }}>Your Score</Text>
				<Text style={{ fontSize: 50, color: "#000", letterSpacing: 5 }}>
					{score}/{cardsCount}
				</Text>
				<Button
					styleBtn={{
						backgroundColor   : "#000",
						marginVertical    : 15,
						paddingHorizontal : 50,
					}}
					styleTxt={{ color: "#fff", fontWeight: "bold" }}
					title="Back"
					onPress={() => navigation.navigate("DeckDetail")}
				/>
				<Button
					styleBtn={{
						backgroundColor   : "#000",
						marginVertical    : 15,
						paddingHorizontal : 50,
					}}
					styleTxt={{ color: "#fff", fontWeight: "bold" }}
					title="Re-Quiz"
					onPress={() => {
						this.handleInitials()
					}}
				/>
			</View>
		) : (
			<View style={styles.quizContainer}>
				<Text style={styles.cardsCount}>
					{cardsCounter}/{cardsCount}
				</Text>
				<View style={styles.cardWrapper}>
					<Text style={styles.cardTitle}>
						{flipper ? answers[aIndex] : questions[qIndex]}
					</Text>
					<TouchableOpacity onPress={this.flip}>
						<Text style={styles.cardFlipper}>
							{flipper ? "Question" : "Answer"}
						</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.buttonsContainer}>
					<Button
						styleBtn={styles.correctButton}
						styleTxt={{ color: "#fff" }}
						title="Correct"
						onPress={() => this.submit(true)}
					/>
					<Button
						styleBtn={styles.incorrectButton}
						styleTxt={{ color: "#fff" }}
						title="Incorrect"
						onPress={() => this.submit(false)}
					/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	quizContainer    : {
		flex              : 1,
		alignItems        : "center",
		justifyContent    : "space-around",
		paddingHorizontal : 10,
	},
	cardsCount       : {
		alignSelf     : "flex-start",
		fontSize      : 25,
		fontWeight    : "bold",
		color         : "#000",
		letterSpacing : 5,
	},
	cardWrapper      : {
		flex           : 2,
		alignItems     : "center",
		justifyContent : "center",
	},
	cardTitle        : {
		fontSize       : 50,
		textAlign      : "center",
		marginVertical : 20,
	},
	cardFlipper      : {
		fontSize        : 27,
		color           : "#ad0600",
		fontWeight      : "bold",
		backgroundColor : "transparent",
	},
	buttonsContainer : {
		flex           : 1,
		alignItems     : "center",
		justifyContent : "center",
	},
	correctButton    : {
		backgroundColor   : "#006100",
		marginVertical    : 5,
		borderColor       : "#006100",
		borderWidth       : 0,
		paddingVertical   : 12,
		paddingHorizontal : 79,
	},
	incorrectButton  : {
		backgroundColor   : "#ad0600",
		marginVertical    : 5,
		borderColor       : "#ad0600",
		borderWidth       : 0,
		paddingVertical   : 12,
		paddingHorizontal : 70,
	},
	loadingIndicator : { flex: 1, justifyContent: "center" },
})

const mapStateToProps = ({ decks }, { route }) => {
	const { title } = route.params.item
	const deck = decks[title]
	return {
		cardsCount : deck.questions.length,
		cards      : deck.questions,
	}
}

export default connect(mapStateToProps)(Quiz)
