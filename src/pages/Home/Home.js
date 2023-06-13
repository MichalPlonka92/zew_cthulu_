import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Container>
            <h2>O czym jest gra</h2>
            <p>
                Zew Cthulhu to system RPG oparty na twórczości H.P. Lovecrafta, znanego amerykańskiego
                pisarza grozy. Przenosi nas w lata dwudzieste XX wieku, gdzie odkrywamy, że na ziemię
                przybyli Wielcy Przedwieczni, przerażające istoty z koszmarów. Kiedyś władali Ziemią,
                a ich miasta ukrywają się na dnie Pacyfiku, w wiecznych lodowcach i pod piaskami pustyń.
                Jedno z tych miast, R'lyeh, jest nadal zatopione, a w jego wnętrzu śpi Cthulhu - potężna
                istota uwięziona przez Starszych Bogów. Cthulhu próbuje wpływać na ludzką świadomość,
                aby lojalne mu sekty go uwolniły...            </p>

            <Link to="/create-traveler" className="btn btn-primary">Create Traveler</Link>
        </Container>
    );
};

export default Home;