import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TravelerList.scss';

const TravelerList = ({ travelers, deleteTraveler }) => {
    const [selectedTravelerId, setSelectedTravelerId] = useState('');

    const handleDeleteTraveler = (id) => {
        deleteTraveler(id);
    };

    const handleSelectTraveler = (event) => {
        setSelectedTravelerId(event.target.value);
    };

    return (
        <div className="traveler-list">
            <h1>Lista podróżników</h1>
            <div className="traveler-list__select">
                <select value={selectedTravelerId} onChange={handleSelectTraveler}>
                    <option value="">Wybierz podróżnika</option>
                    {travelers.map((traveler) => (
                        <option key={traveler.id} value={traveler.id}>
                            {traveler.name}
                        </option>
                    ))}
                </select>
                {selectedTravelerId && (
                    <div className="traveler-list__info">
                        <h2>Karta podróżnika - {travelers.find((traveler) => traveler.id === selectedTravelerId)?.name}</h2>
                        <button onClick={() => handleDeleteTraveler(selectedTravelerId)}>Usuń</button>
                        <Link to={`/traveler/${selectedTravelerId}`}>Przejdź do karty</Link>
                    </div>
                )}
                {!selectedTravelerId && <p>Wybierz podróżnika, aby zobaczyć informacje.</p>}
            </div>
        </div>
    );
};

export default TravelerList;
