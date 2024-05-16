import React from 'react';

export const Dice = ({ rollDice }) => {
    return (
        <div>
            <button onClick={rollDice}>Roll Dice</button>
        </div>
    );
};