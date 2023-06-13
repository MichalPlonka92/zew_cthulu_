import React from 'react';

const Finances = () => {
    const currency = 'PLN';
    const amount = 1000;

    return (
        <div>
            <h2>Gotówka</h2>
            <p>Waluta: {currency}</p>
            <p>Ilość: {amount}</p>
        </div>
    );
};

export default Finances;
