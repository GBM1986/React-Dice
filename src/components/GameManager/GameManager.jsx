// GameManager.jsx
import React, { useState } from 'react';
import { Player } from '../Player/Player';
import { Dice } from '../Dice/Dice';

export const GameManager = () => {
    const [playerOneScore, setPlayerOneScore] = useState(0);
    const [playerTwoScore, setPlayerTwoScore] = useState(0);
    const [winner, setWinner] = useState(null);
    const [roll, setRoll] = useState(null); // Add roll state

    const rollDice = () => {
        const rollOne = Math.floor(Math.random() * 6) + 1;
        const rollTwo = Math.floor(Math.random() * 6) + 1;

        setRoll(rollOne); // Set roll state for Player One
        setPlayerOneScore(rollOne);
        setPlayerTwoScore(rollTwo);

        if (rollOne > rollTwo) {
            setWinner('Player One');
        } else if (rollTwo > rollOne) {
            setWinner('Player Two');
        } else {
            setWinner('Draw');
        }
    };

    return (
        <>
            <Player name={'Player One'} score={playerOneScore} style={{color: "green"}} />
            <Player name={'Player Two'} score={playerTwoScore} />
            <Dice rollDice={rollDice} roll={roll} />
            {winner && <p>{winner} wins!</p>}
        </>
    );
};
