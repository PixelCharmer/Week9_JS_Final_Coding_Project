let expect = chai.expect;


//! grouping the test with an argument that is a callback function containing the actual test cases
describe('Deck', () => {

    //! this nested is a more specific grouping that indicates its testing the shuffle function in the WAR game
    describe('#shuffle()', () => {

        //! creates a new instance of the Deck class andd then runs the shuffle fuction to test it
        it('should shuffle the deck', () => {
            const deck = new Deck();
            const originalDeck = [...deck.mainDeck];

            deck.shuffle();


            //! making assertions using Chai's 'expect'

            //!this assertion checks if the shuffled deck contains all the same elements as the original deck. It ensures that no cards are added or removed during shuffling
            expect(deck.mainDeck).to.have.members(originalDeck);

            //! this ensures that the shuffle method modifies the deck in place rather than creating a new deck
            expect(deck.mainDeck).to.not.equal(originalDeck);
        });

        //! checks if shuffling the deck maintains the same number of cards. It uses a similar approach as the first test case, but it checking the overal length of the deck
        it('should maintain the same number of cards', () => {
            const deck = new Deck();
            const originalDeckLength = deck.mainDeck.length;

            deck.shuffle();

            //! this assertion checks if the length of the shuffled deck is equal to the original deck's length
            expect(deck.mainDeck).to.have.lengthOf(originalDeckLength);
        });

    });
});
