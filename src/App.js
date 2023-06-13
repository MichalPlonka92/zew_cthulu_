import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Home from './pages/Home/Home';
import CreateTraveler from './pages/CreateTraveler/CreateTraveler';
import TravelerCard from './pages/TravelerCard/TravelerCard';
import './scss/main.scss';

const App = () => {
    const [travelers, setTravelers] = useState([]);

    useEffect(() => {
        // Pobierz podróżników z localStorage po załadowaniu aplikacji
        const storedTravelers = localStorage.getItem('travelers');
        if (storedTravelers) {
            setTravelers(JSON.parse(storedTravelers));
        }
    }, []);

    useEffect(() => {
        // Zapisz podróżników w localStorage po zmianie danych
        localStorage.setItem('travelers', JSON.stringify(travelers));
    }, [travelers]);


    const appStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/bgc_black.avif)`,
        backgroundSize: 'cover',
        minHeight: '100vh',
    };

    return (
        <Router>
            <div style={appStyle}>
                <Menu />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/create-traveler"
                        element={<CreateTraveler setTravelers={setTravelers} />}
                    />
                    <Route
                        path="/traveler/:id"
                        element={<TravelerCard travelers={travelers} setTravelers={setTravelers} />}
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
