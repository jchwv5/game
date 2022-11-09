import {useState, useEffect} from 'react';
import buildDeck from '../deck/deck';
import { startGame } from './gameHelpers';
import styles from './game.module.css'

const Game = () => {
    const [playerOneHand] = useState([]);
    const [playerTwoHand] = useState([]);
    const [playerThreeHand] = useState([]);
    const [playerFourHand] = useState([]);
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
            <div className={styles.playerHand}>
            Player One Hand
            </div>
            <div>
            {playerOneHand.length > 0 && playerOneHand.map((card) => (
                <div>{card.card} of {card.suit}</div>
            ))}
            </div>
            <div className={styles.playerHand}>
            Player Two Hand
            </div>
            <div>
            {playerTwoHand.map((card) => (
                <div>{card.card} of {card.suit}</div>
            ))}
            </div>
            <div className={styles.playerHand}>
            Player Three Hand
            </div>
            <div>
            {playerThreeHand.map((card) => (
                <div>{card.card} of {card.suit}</div>
            ))}
            </div>
            <div className={styles.playerHand}>
            Player Four Hand
            </div>
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