import {useEffect, useState} from 'react';
import buildDeck from '../deck/deck';
import shuffle from '../deck/shuffle';

const Game = () => {
    const [playerOneHand] = useState([]);
    const [playerTwoHand] = useState([]);
    const [playerThreeHand] = useState([]);
    const [playerfourHand] = useState([]);
    const [deck, setDeck] = useState([]);

    useEffect(() => {
        setDeck(buildDeck);
      }, []);

    const startGame = () => {
        setDeck(shuffle(deck))
        
    }

    return (
        <div>
            <button onClick={startGame}>Start Game</button>
        <div>
            Player One Hand
            <div>{playerOneHand}</div>
            Player Two Hand
            <div>{playerTwoHand}</div>
            Player Three Hand
            <div>{playerThreeHand}</div>
            Player Four Hand
            <div>{playerfourHand}</div>
        </div>
        </div>
    )

}

export default Game; 