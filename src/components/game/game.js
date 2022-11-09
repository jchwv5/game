import {useEffect, useState} from 'react';
import buildDeck from '../deck/deck';
import shuffle from '../deck/shuffle';
import { dealAllPlayers } from './gameHelpers';

const Game = () => {
    const [playerOneHand, setPlayerOneHand] = useState([]);
    const [playerTwoHand, setPlayerTwoHand] = useState([]);
    const [playerThreeHand, setPlayerThreeHand] = useState([]);
    const [playerfourHand, setPlayerFourHand] = useState([]);
    const [deck, setDeck] = useState([]);

    useEffect(() => {
        setDeck(buildDeck);
      }, []);

    const startGame = () => {
        setDeck(shuffle(deck))
        dealAllPlayers(
            playerOneHand,
            playerTwoHand,
            playerThreeHand,
            playerfourHand,
            5,
            deck
        )
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