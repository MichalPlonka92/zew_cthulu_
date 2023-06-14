import React, { useState } from 'react';

const DiceRoll = ({ type, onRollDice }) => {
    const [result, setResult] = useState('');

    function rollDice() {
        const randomNumber = Math.floor(Math.random() * type) + 1;
        setResult(randomNumber);
        onRollDice(type, randomNumber);
    }

    return (
        <div className="dice-roll" onClick={rollDice}>
            <div className="dice-roll__text">Kość k{type}</div>
            <div className="dice-roll__result">{result}</div>
        </div>
    );
};

export default DiceRoll;