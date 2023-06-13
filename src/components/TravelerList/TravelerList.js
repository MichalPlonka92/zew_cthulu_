import React from 'react';
import { Link } from 'react-router-dom';

const TravelerList = ({ travelers, handleDelete }) => {
    const handleDeleteTraveler = (id) => {
        if (window.confirm('Czy na pewno chcesz usunąć tego podróżnika?')) {
            handleDelete(id);
        }
    };

    return (
        <div>
            <h2>Lista podróżników</h2>
            <ul>
                {travelers.map((traveler) => (
                    <li key={traveler.id}>
                        <Link to={`/traveler/${traveler.id}`}>{traveler.name}</Link>
                        <button onClick={() => handleDeleteTraveler(traveler.id)}>Usuń</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TravelerList;
