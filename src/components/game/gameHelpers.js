/**
 * Helper function called by startGame to deal five cards to each player
 * @param {*} playerOneHand 
 * @param {*} playerTwoHand 
 * @param {*} playerThreeHand 
 * @param {*} playerFourHand 
 * @param {*} cards 
 * @param {*} deck 
 */
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

/**
 * deals a card to the specified player
 * @param {*} playerhand 
 * @param {*} setPlayerHand 
 * @param {*} deck 
 */
export function dealOnePlayer(playerhand, setPlayerHand, deck) {
    playerhand.push(deck[0]);
    deck.splice(0, 1);
    sortHand(playerhand, setPlayerHand);
}
    
/**
 * Sets game to initial state, with five cards in each player's hand
 * @param {*} setDeck 
 * @param {*} buildDeck 
 * @param {*} playerOneHand 
 * @param {*} setPlayerOneHand 
 * @param {*} playerTwoHand 
 * @param {*} setplayerTwoHand 
 * @param {*} playerThreeHand 
 * @param {*} setPlayerThreeHand 
 * @param {*} playerFourHand 
 * @param {*} setPlayerFourHand 
 * @param {*} deck 
 */
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
    ) {
        let deck = buildDeck();
        playerOneHand.length = 0;
        playerTwoHand.length = 0;
        playerThreeHand.length = 0;
        playerFourHand.length = 0;
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
    setDeck(deck);
}

/**
 * Sorts the specified playerHand by suit, then by card value
 * @param {*} playerHand 
 * @param {*} setPlayerHand 
 */
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