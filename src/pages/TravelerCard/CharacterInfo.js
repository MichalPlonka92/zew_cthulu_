import React from 'react';
import './CharacterInfo.scss';

const CharacterInfo = ({ traveler }) => {
    return (
        <div className="character-info">
            <h2>Informacje o postaci:</h2>
            <div className="character-info__details">
                <div className="character-info__column">
                    <p>
                        <span>Imię i nazwisko:</span> {traveler.name}
                    </p>
                    <hr />
                    <p>
                        <span>Profesja:</span> {traveler.profession}
                    </p>
                    <hr />
                    <p>
                        <span>Wiek:</span> {traveler.age}
                    </p>
                </div>
                <div className="character-info__column">
                    <p>
                        <span>Płeć:</span> {traveler.gender}
                    </p>
                    <hr />
                    <p>
                        <span>Miejsce zamieszkania:</span> {traveler.residence}
                    </p>
                    <hr />
                    <p>
                        <span>Miejsce urodzenia:</span> {traveler.birthPlace}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CharacterInfo;
