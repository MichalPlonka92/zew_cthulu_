import React from 'react';

const History = () => {
    const events = [
        'Wydarzenie 1',
        'Wydarzenie 2',
        'Wydarzenie 3',
        'Wydarzenie 4',
        'Wydarzenie 5'
    ];

    return (
        <div>
            <h2>Historia</h2>
            <ul>
                {events.map((event, index) => (
                    <li key={index}>{event}</li>
                ))}
            </ul>
        </div>
    );
};

export default History;
