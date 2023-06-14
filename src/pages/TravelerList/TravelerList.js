import React from 'react';
import { Link } from 'react-router-dom';

const TravelerList = ({ travelers, handleDeleteTraveler }) => {
    return (
        <div>
            <h2>Lista podróżników</h2>
            <ul>
                {travelers.map((traveler) => (
                    <li key={traveler.id}>
                        <span>{traveler.name}</span>
                        <button onClick={() => handleDeleteTraveler(traveler.id)}>Usuń</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TravelerList;
