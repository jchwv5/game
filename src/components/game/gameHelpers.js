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

export function dealOnePlayer(playerhand, setPlayerHand, deck) {
    playerhand.push(deck[0]);
    deck.splice(0, 1);
    sortHand(playerhand, setPlayerHand);
}
    
export function startGame(setDeck, 
    buildDeck, 
    playerOneHand,
    setPlayerOneHand,  
    playerTwoHand,
    setplayerTwoHand,  
    playerThreeHand,
    setPlayerThreeHand,
    playerFourHand, 
    setPlayerFourHand,
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
    sortHand(playerOneHand, setPlayerOneHand);
    sortHand(playerTwoHand, setplayerTwoHand);
    sortHand(playerThreeHand, setPlayerThreeHand);
    sortHand(playerFourHand, setPlayerFourHand);
}

export function sortHand(playerHand, setPlayerHand) {
    playerHand.sort(function (a, b) {
        if (a.suitIndex < b.suitIndex ||
            (a.suitIndex === b.suitIndex && a.cardIndex < b.cardIndex)) {
            return -1;
        }
        return 1;
    });
    setPlayerHand([...playerHand])
}