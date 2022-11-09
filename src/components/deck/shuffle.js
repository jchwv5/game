/**
 * Simple function to shuffle 52-card deck
 * @param {*} deck 
 * @returns 
 */
const shuffle = (deck) => {
    var j, x, i;
    for (i = deck.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = deck[i];
        deck[i] = deck[j];
        deck[j] = x;
    }
return deck;
}
export default shuffle;