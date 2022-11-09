import { useState, useEffect } from 'react';
import buildDeck from '../deck/deck';
import { dealOnePlayer, startGame } from './gameHelpers';
import styles from './game.module.css'

const Game = () => {
    const [playerOneHand, setPlayerOneHand] = useState([]);
    const [playerTwoHand, setplayerTwoHand] = useState([]);
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
                setPlayerOneHand,
                playerTwoHand, 
                setplayerTwoHand,
                playerThreeHand, 
                setPlayerThreeHand,
                playerFourHand, 
                setPlayerFourHand,
                deck)}>
                Start Game
                </button>
            <div>
            <div className={styles.playerHand}>
            Player One Hand
            <button onClick={() => dealOnePlayer(
                playerOneHand, 
                setPlayerOneHand,
                deck)}>
                Draw a Card
            </button>
            </div>
            <div>
            {playerOneHand.map((card) => (
                <div>{card.card} of {card.suit}</div>
            ))}
            </div>
            <div className={styles.playerHand}>
            Player Two Hand
            <button onClick={() => dealOnePlayer(
                playerTwoHand, 
                setplayerTwoHand,
                deck)}>
                Draw a Card
            </button>
            </div>
            <div>
            {playerTwoHand.map((card) => (
                <div>{card.card} of {card.suit}</div>
            ))}
            </div>
            <div className={styles.playerHand}>
            Player Three Hand
            <button onClick={() => dealOnePlayer(
                playerThreeHand, 
                setPlayerThreeHand,
                deck)}>
                Draw a Card
            </button>
            </div>
            <div>
            {playerThreeHand.map((card) => (
                <div>{card.card} of {card.suit}</div>
            ))}
            </div>
            <div className={styles.playerHand}>
            Player Four Hand
            <button onClick={() => dealOnePlayer(
                playerFourHand, 
                setPlayerFourHand,
                deck)}>
                Draw a Card
            </button>
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