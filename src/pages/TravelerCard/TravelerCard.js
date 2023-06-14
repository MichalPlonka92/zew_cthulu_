import React, { useState } from 'react';
import { useParams, useNavigate, Routes, Route, Link } from 'react-router-dom';
import AdditionalInfo from './AdditionalInfo';
import DiceRoll from './DiceRoll';
import CharacterInfo from './CharacterInfo';
import SkillsList from './SkillsList';
import CombatAndEquipment from './CombatAndEquipment';
import Inventory from './Inventory';
import Finances from './Finances';
import History from './History';
import './TravelerCard.scss';

const TravelerCard = ({ travelers, setTravelers }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [strength, setStrength] = useState('');

    const traveler = travelers.find((traveler) => traveler.id.toString() === id);

    if (!traveler) {
        return <div>Nie znaleziono podróżnika.</div>;
    }

    const handleStrengthChange = (value) => {
        setStrength(value);
    };

    const handleRollDice = (diceType, result) => {
        console.log(`Wyrzucono ${result} na kości typu ${diceType}`);
    };

    const handleDeleteTraveler = (id) => {
        const updatedTravelers = travelers.filter((traveler) => traveler.id !== id);
        setTravelers(updatedTravelers);
        navigate('/');
    };

    const handleGoBackToList = () => {
        navigate('/');
    };

    return (
        <div className="card-container">
            <h1>Karta podróżnika - {traveler.name}</h1>
            <nav>
                <ul>
                    <li>
                        <Link to={`/traveler/${id}`}>Karta podróżnika</Link>
                    </li>
                    <li>
                        <Link to={`/traveler/${id}/skills`}>Umiejętności</Link>
                    </li>
                    <li>
                        <Link to={`/traveler/${id}/combat`}>Walka i wyposażenie</Link>
                    </li>
                    <li>
                        <Link to={`/traveler/${id}/inventory`}>Inwentarz</Link>
                    </li>
                    <li>
                        <Link to={`/traveler/${id}/finances`}>Finanse</Link>
                    </li>
                    <li>
                        <Link to={`/traveler/${id}/history`}>Historia</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<CharacterInfo traveler={traveler} />} />
                <Route path="/skills" element={<SkillsList />} />
                <Route path="/combat" element={<CombatAndEquipment />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/finances" element={<Finances />} />
                <Route path="/history" element={<History />} />
            </Routes>

            <h2>Dodatkowe informacje</h2>
            <AdditionalInfo strength={strength} onStrengthChange={handleStrengthChange} />

            <h2>Losowanie kości</h2>
            <DiceRoll type={4} onRollDice={handleRollDice} />
            <DiceRoll type={6} onRollDice={handleRollDice} />
            <DiceRoll type={8} onRollDice={handleRollDice} />
            <DiceRoll type={10} onRollDice={handleRollDice} />
            <DiceRoll type={100} onRollDice={handleRollDice} />

            <div className="travelers-list">
                <h2>Lista podróżników</h2>
                <ul>
                    {travelers.map((traveler) => (
                        <li key={traveler.id}>
                            <Link to={`/traveler/${traveler.id}`}>{traveler.name}</Link>
                        </li>
                    ))}
                </ul>
                <button onClick={() => handleDeleteTraveler(traveler.id)}>Usuń</button>
                <button onClick={handleGoBackToList}>Powrót</button>
            </div>
        </div>
    );
};

export default TravelerCard;
