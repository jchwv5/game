export function dealAllPlayers(playerOneHand, playerTwoHand, playerThreeHand, playerFourHand, cards, deck) {
    while (cards > 0 ) {
        playerOneHand.push(deck[0])
        deck.splice(0, 1)
        playerTwoHand.push(deck[0])
        deck.splice(0, 1)
        playerThreeHand.push(deck[0])
        deck.splice(0, 1)
        playerFourHand.push(deck[0])
        deck.splice(0, 1)
        cards --;
    }
}
    
export function startGame(setDeck, 
    buildDeck, 
    playerOneHand,  
    playerTwoHand,  
    playerThreeHand,
    playerFourHand, 
    deck) {
        playerOneHand.length = 0;
        playerTwoHand.length = 0;
        playerThreeHand.length = 0;
        playerFourHand.length = 0;
        setDeck(buildDeck);
        dealAllPlayers(
            playerOneHand,
            playerTwoHand,
            playerThreeHand,
            playerFourHand,
            5,
            deck
        )
    sortHand(playerOneHand);
    sortHand(playerTwoHand);
    sortHand(playerThreeHand);
    sortHand(playerFourHand);
}

export function sortHand(cards) {
    cards.sort(function (a, b) {
        if (a.suitIndex < b.suitIndex ||
            (a.suitIndex === b.suitIndex && a.cardValue < b.cardValue)) {
            return -1;
        }
        return 1;
    });
}