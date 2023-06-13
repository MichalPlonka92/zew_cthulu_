import React from 'react';

const CombatAndEquipment = () => {
    const weapons = ['Miecz', 'Łuk', 'Topór'];
    const armor = ['Zbroja', 'Tarcza'];

    return (
        <div>
            <h2>Walka i uzbrojenie</h2>
            <h3>Broń:</h3>
            <ul>
                {weapons.map((weapon, index) => (
                    <li key={index}>{weapon}</li>
                ))}
            </ul>
            <h3>Zbroja:</h3>
            <ul>
                {armor.map((piece, index) => (
                    <li key={index}>{piece}</li>
                ))}
            </ul>
        </div>
    );
};

export default CombatAndEquipment;
