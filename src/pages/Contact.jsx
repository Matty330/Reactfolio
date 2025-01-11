import React, { useState } from 'react';
import '../styles/contact.css';

function Contact() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(e.target.value)) {
            setError('Invalid email address');
        } else {
            setError('');
        }
    };

    return (
        <section>
            <h2>Contact Me</h2>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" required />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </label>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <label>
                    Message:
                    <textarea name="message" required></textarea>
                </label>
                <button type="submit" disabled={!!error}>
                    Send
                </button>
            </form>
        </section>
    );
}

export default Contact;
