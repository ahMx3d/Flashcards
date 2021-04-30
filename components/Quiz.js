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
import styles from "../styles/quiz"
import { clearLocalNotifications, setLocalNotification } from "../utils/helpers"
import Score from "./Score"

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
		clearLocalNotifications().then(setLocalNotification)
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
			<Score
				score={score}
				cardsCount={cardsCount}
				navigation={navigation}
				handleInitials={this.handleInitials}
			/>
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

const mapStateToProps = ({ decks }, { route }) => {
	const { title } = route.params.item
	const deck = decks[title]
	return {
		cardsCount : deck.questions.length,
		cards      : deck.questions,
	}
}

export default connect(mapStateToProps)(Quiz)
