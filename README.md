# Video-Poker

Video-Poker is a Single Page Application that uses [Deck of Cards API](https://deckofcardsapi.com/).

## Main Functionality

When starting the application locally on initial load of the browser of the browser the user will see a button that says "Deal". When pressing the "Deal" button a new 52 card deck is shuffled and the top 5 cards from that deck are laid out horizontally in front of the user and the "Deal" button changes to "Go". The user can then click on any indivual card and an alert will pop up asking if the user wants to delete that selected card. The cards are automatically kept unless the user chooses to discard a card. If there is any cards discarded when the "Go" button is pressed the amount of cards that are discarded are replaced into the users hand. The "Go" button turns back into "Deal" and starts a new game and if a new game is started the score below the button is then populated with the score from the previous hand.

## Running The Project Locally

1. Clone the Repo
2. In the root directory type `yarn` or `npm i` to install the necessary dependencies.
3. After installing the necessary dependencies in the root directory type `yarn start` or `npm start`. This will open a new page in your default web browser on `localhost:3000`
