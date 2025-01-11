import React, { useState } from 'react';
import '../styles/contact.css';

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Clear errors for the field being updated
        setErrors({ ...errors, [name]: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        // Validate fields
        if (!formData.name) newErrors.name = 'Name is required.';
        if (!formData.email) {
            newErrors.email = 'Email is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email address.';
        }
        if (!formData.message) newErrors.message = 'Message is required.';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            alert('Form submitted successfully!');
            // Clear form
            setFormData({ name: '', email: '', message: '' });
        }
    };

    return (
        <section>
            <h2>Contact Me</h2>
            <p>
                Or reach out directly via email:
                <a href="mailto:MSIMMW331@outlook.com"> MSIMMW331@outlook.com</a> or{' '}
                <a href="mailto:mwelc64@yahoo.com">mwelc64@yahoo.com</a>
            </p>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

                <label>
                    Message:
                    <textarea
                        name="message"
                        placeholder="Enter your message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </label>
                {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}

                <button type="submit">Send</button>
            </form>
        </section>
    );
}

export default Contact;
