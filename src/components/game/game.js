import {useState, useEffect} from 'react';
import buildDeck from '../deck/deck';
import { startGame } from './gameHelpers';

const Game = () => {
    const [playerOneHand, setPlayerOneHand] = useState([]);
    const [playerTwoHand, setPlayerTwoHand] = useState([]);
    const [playerThreeHand, setPlayerThreeHand] = useState([]);
    const [playerFourHand, setPlayerFourHand] = useState([]);
    const [deck, setDeck] = useState([]);

    useEffect(() => {
        setDeck(buildDeck);
      }, []);

    return (
        <div>
            <button onClick={() => startGame(
                setDeck, 
                buildDeck, 
                playerOneHand, 
                playerTwoHand, 
                playerThreeHand, 
                playerFourHand, 
                deck)}>
                Start Game
                </button>
            <div>
            Player One Hand
            <div>
            {playerOneHand.length > 0 && playerOneHand.map((card) => (
                <div>{card.card} of {card.suit}</div>
            ))}
            </div>
            Player Two Hand
            <div>
            {playerTwoHand.map((card) => (
                <div>{card.card} of {card.suit}</div>
            ))}
            </div>
            Player Three Hand
            <div>
            {playerThreeHand.map((card) => (
                <div>{card.card} of {card.suit}</div>
            ))}
            </div>
            Player Four Hand
            <div>
            {playerFourHand.map((card) => (
                <div>{card.card} of {card.suit}</div>
            ))}
            </div>
        </div>
        </div>
    )

}

export default Game; 