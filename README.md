# Flashcards

A react native mobile application (has been tested using android emulator) that allows users to study collections of flashcards. The app will allow users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.

## How to install

In your Terminal, enter the commands below

```
git clone https://github.com/ahMx3d/Flashcards.git

cd Flashcards

yarn install OR yarn OR npm install

yarn start OR $ expo start
```

### How to run

By running successfully you can see and do this:

 › Press a to open Android device or emulator, or i to open iOS emulator.

 › Press q to display QR code.

 › Press r to restart packager, or R to restart packager and clear cache.

 › Press d to toggle development mode. (current mode: development)

You could scan the QR code with [expo](https://expo.io/) on you phone.

#### Project Main Views

- Deck List View (Default View):
    - displays the title of each Deck
    - displays the number of cards in each deck

- Individual Deck View:
    - displays the title of the Deck
    - displays the number of cards in the deck
    - displays an option to start a quiz on this specific deck
    - An option to add a new question to the deck

- Quiz View:
    - displays a card question
    - an option to view the answer (flips the card)
    - a "Correct" button
    - an "Incorrect" button
    - the number of cards left in the quiz
    - Displays the percentage correct once the quiz is complete

- New Deck View:
    - An option to enter in the title for the new deck
    - An option to submit the new deck title

- New Question View:
    - An option to enter in the question
    - An option to enter in the answer
    - An option to submit the new question
