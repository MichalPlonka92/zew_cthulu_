import React, { useState } from 'react';
import './AdditionalInfo.scss';

const AdditionalInfo = ({ strength, onStrengthChange }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedStrength, setEditedStrength] = useState(strength);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleInputChange = (event) => {
        setEditedStrength(event.target.value);
    };

    const handleSaveClick = () => {
        onStrengthChange(editedStrength);
        setIsEditing(false);
    };

    const renderEditView = () => {
        return (
            <div className="additional-info__container">
                <div>{strength}</div>
                <div>{Math.floor(strength / 2)}</div>
                <div>{Math.floor(strength / 4)}</div>
                <span role="img" aria-label="Edit" onClick={handleEditClick}>
          ✏️
        </span>
            </div>
        );
    };

    const renderEditInput = () => {
        return (
            <div className="additional-info__container">
                <input type="number" name="strength" value={editedStrength} onChange={handleInputChange} />
                <button onClick={handleSaveClick}>Zapisz</button>
            </div>
        );
    };

    return (
        <div className="additional-info">
            <label>Siła:</label>
            {isEditing ? renderEditInput() : renderEditView()}
        </div>
    );
};

export default AdditionalInfo;
