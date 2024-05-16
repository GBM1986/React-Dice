import React from 'react';

export const Dice = ({ setRoll, updateScore }) => {
    const rollDice = () => {
        const rolledNumber = Math.floor(Math.random() * 6) + 1;
        setRoll(rolledNumber);
        updateScore(rolledNumber);
    };

    return (
        <div>
            <button onClick={rollDice}>Roll Dice</button>
        </div>
    );
};
