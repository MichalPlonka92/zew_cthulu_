import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateTraveler.scss';

const CreateTraveler = ({ setTravelers }) => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [profession, setProfession] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [residence, setResidence] = useState('');
    const [birthPlace, setBirthPlace] = useState('');

    const handleCreateTraveler = (event) => {
        event.preventDefault();

        if (!name || !profession || !age || !gender || !residence || !birthPlace) {
            alert('Uzupełnij wszystkie pola');
            return;
        }

        const newTraveler = {
            id: new Date().getTime(),
            name,
            profession,
            age,
            gender,
            residence,
            birthPlace,
        };

        setTravelers((prevTravelers) => [...prevTravelers, newTraveler]);

        setName('');
        setProfession('');
        setAge('');
        setGender('');
        setResidence('');
        setBirthPlace('');

        navigate(`/traveler/${newTraveler.id}`);
    };

    return (
        <div className="create-traveler">
            <h1>Dodaj Badacza</h1>
            <form onSubmit={handleCreateTraveler}>
                <label>
                    Imię i nazwisko badacza:
                    <input
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </label>
                <label>
                    Profesja:
                    <select
                        value={profession}
                        onChange={(event) => setProfession(event.target.value)}
                    >
                        <option value="">Wybierz profesję</option>
                        <option value="Policjant">Policjant</option>
                        <option value="Pielęgniarka">Pielęgniarka</option>
                        <option value="Strażak">Strażak</option>
                    </select>
                </label>

                <label>
                    Wiek:
                    <input
                        type="number"
                        value={age}
                        onChange={(event) => setAge(event.target.value)}
                    />
                </label>
                <label>
                    Płeć:
                    <select
                        value={gender}
                        onChange={(event) => setGender(event.target.value)}
                    >
                        <option value="">Wybierz płeć</option>
                        <option value="Mężczyzna">Mężczyzna</option>
                        <option value="Kobieta">Kobieta</option>
                    </select>
                </label>
                <label>
                    Miejsce zamieszkania:
                    <input
                        type="text"
                        value={residence}
                        onChange={(event) => setResidence(event.target.value)}
                    />
                </label>
                <label>
                    Miejsce urodzenia:
                    <input
                        type="text"
                        value={birthPlace}
                        onChange={(event) => setBirthPlace(event.target.value)}
                    />
                </label>
                <button type="submit">Stwórz</button>
            </form>
        </div>
    );
};

export default CreateTraveler;
