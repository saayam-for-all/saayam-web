import React, { useState, useEffect } from 'react';

function ContactInformation() {
    const [isEditing, setIsEditing] = useState(false);
    const [contactInfo, setContactInfo] = useState({
        firstName: '',
        lastName: '',
        preferredName: '',
        phoneticPronunciation: '',
        streetAddress: '',
        currentCity: '',
        currentState: '',
        currentCountry: '',
        zipCode: '',
        timeZone: ''
    });

    useEffect(() => {
        const savedContactInfo = JSON.parse(localStorage.getItem('contactInfo'));
        if (savedContactInfo) {
            setContactInfo(savedContactInfo);
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContactInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        localStorage.setItem('contactInfo', JSON.stringify(contactInfo));
    };

    return (
        <div className="section">
            <div className="section-header">
                <h2>Contact Information</h2>
                <button 
                    className={`edit-btn ${isEditing ? 'save-btn' : ''}`} 
                    onClick={isEditing ? handleSaveClick : handleEditClick}>
                    {!isEditing && <i className="fas fa-pencil-alt edit-icon"></i>}
                    {isEditing ? 'Save' : 'Edit'}
                </button>
            </div>

            <div className="info-group">
                <label>First Name</label>
                {isEditing ? (
                    <input 
                        type="text"
                        name="firstName"
                        value={contactInfo.firstName}
                        onChange={handleInputChange}
                        className="edit-input"
                    />
                ) : (
                    <p>{contactInfo.firstName}</p>
                )}
            </div>

            <div className="info-group">
                <label>Last Name</label>
                {isEditing ? (
                    <input 
                        type="text"
                        name="lastName"
                        value={contactInfo.lastName}
                        onChange={handleInputChange}
                        className="edit-input"
                    />
                ) : (
                    <p>{contactInfo.lastName}</p>
                )}
            </div>
            <div className="info-group">
                <label>Preferred Name</label>
                {isEditing ? (
                    <input 
                        type="text"
                        name="preferredName"
                        value={contactInfo.preferredName}
                        onChange={handleInputChange}
                        className="edit-input"
                    />
                ) : (
                    <p>{contactInfo.preferredName}</p>
                )}
            </div>
            <div className="info-group">
                <label>What is the phonetic pronunciation of your name?</label>
                {isEditing ? (
                    <input
                        type="text"
                        name="phoneticPronunciation"
                        value={contactInfo.phoneticPronunciation}
                        onChange={handleInputChange}
                        className="edit-input"
                    />
                ) : (
                    <p>{contactInfo.phoneticPronunciation}</p>
                )}
            </div>
            <div className="info-group">
                <label>Street Address</label>
                {isEditing ? (
                    <input
                        type="text"
                        name="streetAddress"
                        value={contactInfo.streetAddress}
                        onChange={handleInputChange}
                        className="edit-input"
                    />
                ) : (
                    <p>{contactInfo.streetAddress}</p>
                )}
            </div>
            <div className="info-group">
                <label>Current City</label>
                {isEditing ? (
                    <input
                        type="text"
                        name="currentCity"
                        value={contactInfo.currentCity}
                        onChange={handleInputChange}
                        className="edit-input"
                    />
                ) : (
                    <p>{contactInfo.currentCity}</p>
                )}
            </div>
            <div className="info-group">
                <label>Current State</label>
                {isEditing ? (
                    <input
                        type="text"
                        name="currentState"
                        value={contactInfo.currentState}
                        onChange={handleInputChange}
                        className="edit-input"
                    />
                ) : (
                    <p>{contactInfo.currentState}</p>
                )}
            </div>
            <div className="info-group">
                <label>Current Country</label>
                {isEditing ? (
                    <input
                        type="text"
                        name="currentCountry"
                        value={contactInfo.currentCountry}
                        onChange={handleInputChange}
                        className="edit-input"
                    />
                ) : (
                    <p>{contactInfo.currentCountry}</p>
                )}
            </div>
            <div className="info-group">
                <label>Zip Code</label>
                {isEditing ? (
                    <input
                        type="text"
                        name="zipCode"
                        value={contactInfo.zipCode}
                        onChange={handleInputChange}
                        className="edit-input"
                    />
                ) : (
                    <p>{contactInfo.zipCode}</p>
                )}
            </div>
            <div className="info-group">
                <label>Time Zone</label>
                {isEditing ? (
                    <input
                        type="text"
                        name="timeZone"
                        value={contactInfo.timeZone}
                        onChange={handleInputChange}
                        className="edit-input"
                    />
                ) : (
                    <p>{contactInfo.timeZone}</p>
                )}
            </div>
        </div>
    );
}

export default ContactInformation;