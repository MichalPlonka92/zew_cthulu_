import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateTraveler.scss';

const CreateTraveler = ({ setTravelers }) => {
    const navigate = useNavigate();

    // Stany dla przechowywania wartości wprowadzonych przez użytkownika
    const [name, setName] = useState('');
    const [profession, setProfession] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [residence, setResidence] = useState('');
    const [birthPlace, setBirthPlace] = useState('');

    const handleCreateTraveler = (event) => {
        event.preventDefault();

        // Sprawdzenie, czy wszystkie pola formularza są wypełnione
        if (!name || !profession || !age || !gender || !residence || !birthPlace) {
            alert('Uzupełnij wszystkie pola');
            return;
        }

        // Tworzenie nowego obiektu badacza na podstawie wprowadzonych danych
        const newTraveler = {
            id: new Date().getTime(), // Unikalne ID na podstawie aktualnego czasu
            name,
            profession,
            age,
            gender,
            residence,
            birthPlace,
        };

        // Aktualizacja listy badaczy w komponencie nadrzędnym
        setTravelers((prevTravelers) => [...prevTravelers, newTraveler]);

        // Czyszczenie pól formularza po dodaniu badacza
        setName('');
        setProfession('');
        setAge('');
        setGender('');
        setResidence('');
        setBirthPlace('');

        // Przekierowanie użytkownika na stronę z informacjami o nowym badaczu
        navigate(`/traveler/${newTraveler.id}`);
    };

    return (
        <div className="create-traveler">
            <h1>Dodaj Badacza</h1>
            <form onSubmit={handleCreateTraveler}>
                {/* Pole tekstowe do wprowadzenia imienia i nazwiska badacza */}
                <label>
                    Imię i nazwisko badacza:
                    <input
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </label>
                {/* Pole wyboru profesji badacza */}
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

                {/* Pole tekstowe do wprowadzenia wieku badacza */}
                <label>
                    Wiek:
                    <input
                        type="number"
                        value={age}
                        onChange={(event) => setAge(event.target.value)}
                    />
                </label>
                {/* Pole wyboru płci badacza */}
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
                {/* Pole tekstowe do wprowadzenia miejsca zamieszkania badacza */}
                <label>
                    Miejsce zamieszkania:
                    <input
                        type="text"
                        value={residence}
                        onChange={(event) => setResidence(event.target.value)}
                    />
                </label>
                {/* Pole tekstowe do wprowadzenia miejsca urodzenia badacza */}
                <label>
                    Miejsce urodzenia:
                    <input
                        type="text"
                        value={birthPlace}
                        onChange={(event) => setBirthPlace(event.target.value)}
                    />
                </label>
                {/* Przycisk do zatwierdzenia formularza */}
                <button type="submit">Stwórz</button>
            </form>
        </div>
    );
};

export default CreateTraveler;
