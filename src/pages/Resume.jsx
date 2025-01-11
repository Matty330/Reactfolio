import React from 'react';
import '../styles/resume.css'; // Connect the styles file for Resume

function Resume() {
    return (
        <section>
            <h2>Resume</h2>
            <a href="path-to-your-resume.pdf" download>Download My Resume</a>
            <ul>
                <li>Proficiency 1</li>
                <li>Proficiency 2</li>
                <li>Proficiency 3</li>   
            </ul>
        </section>
    );
}

export default Resume;