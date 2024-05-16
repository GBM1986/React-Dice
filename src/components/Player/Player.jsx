import React from 'react';

import dice1 from '../../assets/Images/dice1.svg';
import dice2 from '../../assets/Images/dice2.svg';
import dice3 from '../../assets/Images/dice3.svg';
import dice4 from '../../assets/Images/dice4.svg';
import dice5 from '../../assets/Images/dice5.svg';
import dice6 from '../../assets/Images/dice6.svg';

export const Player = ({ name, score }) => {
    
    const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

    
    const renderDiceImage = () => {
  
        const normalizedScore = Math.max(1, Math.min(6, score));
        return diceImages[normalizedScore - 1];
    };

    return (
        <div>
            <p>Name: {name}</p>
            <img src={renderDiceImage()} alt={`Dice ${score}`} />
        </div>
    );
};
