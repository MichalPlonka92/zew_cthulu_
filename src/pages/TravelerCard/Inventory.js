import React from 'react';

const Inventory = () => {
    const items = ['Przedmiot 1', 'Przedmiot 2', 'Przedmiot 3'];

    return (
        <div>
            <h2>Ekwipunek</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Inventory;
