import React from 'react';

const SkillsList = () => {
    // Przykładowa lista umiejętności
    const skills = ['Umiejętność 1', 'Umiejętność 2', 'Umiejętność 3'];

    return (
        <div>
            <h2>Lista umiejętności</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default SkillsList;
