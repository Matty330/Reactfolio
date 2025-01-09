import React from `react`;

function Contact() {
    return (
        <section>
            <h2>Contact</h2>
            <form>
                <label>
                    Name: 
                    <input type="text" name="name" required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" required />
                </label>
                <label>
                    Message:
                    <textarea name="message" required></textarea>
                </label>
                <button type="submit">Send</button>
            </form>
        </section>
    );
}

export default Contact;