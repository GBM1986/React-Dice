// GameManager.jsx
import React, { useState } from 'react';
import { Player } from '../Player/Player';
import { Dice } from '../Dice/Dice';

export const GameManager = () => {
    const [playerOneScore, setPlayerOneScore] = useState(0);
    const [playerTwoScore, setPlayerTwoScore] = useState(0);
    const [playerOneWins, setPlayerOneWins] = useState(0); // State for player one wins
    const [playerTwoWins, setPlayerTwoWins] = useState(0); // State for player two wins
    const [winner, setWinner] = useState(null);
    const [roll, setRoll] = useState(null);

    const rollDice = () => {
        const rollOne = Math.floor(Math.random() * 6) + 1;
        const rollTwo = Math.floor(Math.random() * 6) + 1;

        setRoll(rollOne);
        setPlayerOneScore(rollOne);
        setPlayerTwoScore(rollTwo);

        if (rollOne > rollTwo) {
            setWinner('Player One');
            setPlayerOneWins(prevWins => prevWins + 1); // Increment player one's win count
        } else if (rollTwo > rollOne) {
            setWinner('Player Two');
            setPlayerTwoWins(prevWins => prevWins + 1); // Increment player two's win count
        } else {
            setWinner('Draw');
        }

        // Check if any player has reached 5 wins
        if (playerOneWins === 4 || playerTwoWins === 4) {
            // Declare the winner and reset the game
            if (playerOneWins === 4) {
                setWinner('Player One wins the game!');
            } else {
                setWinner('Player Two wins the game!');
            }
            // Reset all scores and wins
            setPlayerOneScore(0);
            setPlayerTwoScore(0);
            setPlayerOneWins(0);
            setPlayerTwoWins(0);
        }
    };

    return (
        <>
            <Player name={'Player One'} score={playerOneScore} wins={playerOneWins} />
            <Player name={'Player Two'} score={playerTwoScore} wins={playerTwoWins} />
            <Dice rollDice={rollDice} roll={roll} />
            {winner && <p>{winner}</p>}
        </>
    );
};
