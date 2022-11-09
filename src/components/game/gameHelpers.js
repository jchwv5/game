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
    console.log(playerOneHand, playerTwoHand, playerThreeHand, playerFourHand)
}