import shuffle from "./shuffle";


const buildDeck = () => {
    let deck = [];

    const cards = [
        "Two",
        "Three",
        "Four",
        "Five",
        "Six",
        "Seven",
        "Eight",
        "Nine",
        "Ten",
        "Jack",
        "Queen",
        "King",
        "Ace"
      ];

    const suits = [
      "Diamonds",
      "Hearts",
      "Clubs",
      "Spades"
      ];
       for (let i = 0; i < suits.length; i++) {
        for (let n = 0; n < cards.length; n++) {
                let card = {
                    card: cards[n],
                    suit: suits[i],
                }
                deck.push(card);
            }
            shuffle(deck);
        }
        return deck;
}

export default buildDeck;