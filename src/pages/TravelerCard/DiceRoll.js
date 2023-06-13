import React, { useState } from 'react';

const DiceRoll = ({ type, onRollDice }) => {
    const [result, setResult] = useState('');

    function rollDice() {
        const randomNumber = Math.floor(Math.random() * type) + 1;
        setResult(randomNumber);
        onRollDice(type, randomNumber);
    }

    return (
        <div>
            <img

                alt={`Kość k${type}`}
                style={{ cursor: 'pointer' }}
                onClick={rollDice}
            />
            <div>{result}</div>
        </div>
    );
};

export default DiceRoll;
