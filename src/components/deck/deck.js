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
    
    const values = [
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        10,
        10,
        10,
        15
    ]

    const suits = [
      "Diamonds",
      "Hearts",
      "Clubs",
      "Spades"
      ];

    
      for (var i = 0; i < 52; i++) {
        deck.push({
          suitIndex: Math.floor(i / cards.length),
          suit: suits[Math.floor(i / cards.length)],
          cardValue: values[i % values.length],
          cardIndex: i % cards.length,
          card: cards[i % cards.length]
        });
      }
    
  shuffle(deck);
      
   return deck;
}

export default buildDeck;