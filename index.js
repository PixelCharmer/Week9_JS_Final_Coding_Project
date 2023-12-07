
//! this class establishs the players who will "play" the game
class Player {
    constructor() {
        this.playerDeck = [];
        this.playerScore = 0;
    }

    //! tracks and shows each players score during the game
    showScore() {
        return this.playerScore;
    }
}


//! 52 cards that make up the deck. suite - the card suit, ranks - the card number, value - the value according the rank 
class Card {
    constructor(suit, value, rank) {
        this.suit = suit;
        this.value = value;
        this.rank = rank;
    }
}


//! an array that holds the deck of cards, and an array for each player that has their cards 
class Deck {
    constructor() {
        this.mainDeck = [];
        this.player1Cards = [];
        this.player2Cards = [];
    }

    //! establishes the cards in the deck. suits and ranks ("the card face")
    createDeck() {
        let suits = ['Clubs', 'Spades', 'Hearts', 'Diamonds']
        let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']

        //! links the card rank and value and loops through to give each rank a value
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                this.mainDeck.push(new Card(suits[i], ranks[j], j + 2));
            }
        }
    }

    // will run tests on this shuffle function to ensure it shuffles     

    //! this loop iterates over each element of the mainDeck array
    //! created a temporary variable and assigns it the value of the element at the current index i
    //! a random index is used to swap the current element with a randomly chosen element from the previous part of the array
    shuffle() {
        for (let i = 0; i < this.mainDeck.length; i++) {
            let tempPlaceHold = this.mainDeck[i];
            let randomCardAtIndex = Math.floor(Math.random() * i);

            //! swaps the current i element with the randomly choosen element
            //! then It swaps the element at the randomly chosen index with the temporarily stored element
            this.mainDeck[i] = this.mainDeck[randomCardAtIndex];
            this.mainDeck[randomCardAtIndex] = tempPlaceHold;
        }
    }

    //! splits and deals the 52 cards between the two players
    deal() {
        this.player1Cards = this.mainDeck.slice(0, 26);
        this.player2Cards = this.mainDeck.slice(26, 52);

    }
}

//! this class establishes the game and actions that happen during the game
class Game {
    constructor() {
        this.deck = new Deck();
        this.player1Cards;
        this.player2Cards;
        this.p1 = new Player();
        this.p2 = new Player();
    }

    //! when the game starts these actions happen
    startGame(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.deck.createDeck();
        console.log(this.deck.mainDeck);
        this.deck.shuffle();
        this.deck.deal();
        this.playHand();

    }

    playHand() {
        //! Identifies who each player is and makes note that the game is beginning
        console.log(`${this.player1} is player 1`);
        console.log(`${this.player2} is player 2`);
        console.log(`The game will now begin`);


        //! this loop will run as long as both players have cards to play.
        while (this.deck.player1Cards.length !== 0 && this.deck.player2Cards.length !== 0) {


            //! takes the last card from each players cards to play
            //! prints the popped off player card and prints it to the console
            this.player1Card = this.deck.player1Cards.pop();
            console.log(`\n${this.player1}'s Card`, this.player1Card);
            this.player2Card = this.deck.player2Cards.pop();
            console.log(`${this.player2}'s Card`, this.player2Card);

            //! compares the values of the cards drawn by player1 and player2 to determine round winnerr
            //! takes the player with the higher value card and increments the winners score
            //! no score is incremented if the cards are equal
            if (this.player1Card.value > this.player2Card.value) {
                this.p1.playerScore++;
                console.log(`${this.player1} wins this round`);
            } else if (this.player1Card.value < this.player2Card.value) {
                this.p2.playerScore++;
                console.log(`${this.player2} wins the round`);
            } else {
                console.log(`Tie: No score received this round`);        
            }

            //! logs the outcome of the round, the scores of both players, and a message indicating that the round is over.
            console.log(`${this.player1}'s Score:`, this.p1.showScore());
            console.log(`${this.player2}'s Score:`, this.p2.showScore());
            console.log(`Round  Over`);
        }

        //!  evaluates the final scores of the players and prints a message indicating the outcome of the game
        if (this.p1.playerScore > this.p2.playerScore) {
            console.log(`${this.player1} wins the game.`);
        } else if (this.p1.playerScore < this.p2.playerScore) {
            console.log(`${this.player2} wins the game.`);
        } else {
            console.log('Tie: No winner.')
        }
    }

}

//! This creates a new instance of the Game class and assigns it to the variable myGame
//! sets up the initial state of the game, identifies the players and cards, and then begins the gameplay
let myGame = new Game();
myGame.startGame("Loretta Lynn", "Conway Twitty");