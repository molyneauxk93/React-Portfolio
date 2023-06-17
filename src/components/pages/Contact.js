import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

export default function Contact() {
    //     Create state variables for the fields in the form
    // setting initial values to an empty string
    const [email, setEmail] = useState('');
    const [Name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type,  set the state of either email, username, and password
        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    //handle message box required error message if field is blank after clicked in
    const handleMessage = (e) => {
        const { target } = e;
        const inputValue = target.value;
        
        if(inputValue === '') {
            setErrorMessage('Message field is required');
        }
        
    };

    const handleFormSubmit = (e) => {
        // Preventing default
        e.preventDefault();

        //  check to see if the email is not valid or if the userName is empty
        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        }

        // clear out the input after a successful registration.
        setName('');
        setMessage('');
        setEmail('');
    };
    return (
        <div>
            <form className="form">
            <h2>Contact Me</h2>
            <h3>Name:</h3>
                <input
                    value={Name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="name"
                />
                <h3>Email:</h3>
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="email"
                />
                <h3>Message:</h3>
                <input
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    onMouseOut={handleMessage}
                    type="text"
                    placeholder="Message"
                />
                <button type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}