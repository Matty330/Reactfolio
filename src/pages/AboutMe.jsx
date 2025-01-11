import React from 'react';
import '../styles/aboutme.css';
import WashingtonImage from '../assets/images/Washington.jpg'; // Use ES import

function AboutMe() {
    return (
    <section>
        <h2>About Me</h2>
        <img
        src={WashingtonImage} // Correct ES module import
        alt="Matthew Welcome"
        style={{ width: '150px', borderRadius: '50%' }}
        />

            <p>
                Hi, I’m Matthew Welcome, a passionate and driven full-stack web developer from Ohio. When I’m not busy coding, you can find me kayaking on serene waters, hiking breathtaking trails, or flying my DJI drones to capture the world from above. My hobbies fuel my creativity and problem-solving skills, both essential to my work as a developer.
            
            
                My journey into web development started with a desire for change. I’ve always been surrounded by computers and technology, but I wanted to take my passion a step further and build something meaningful with it. This led me to pursue a career in full-stack development, where I get to merge logic with creativity every day.
            
                I bring attention to detail, quick learning abilities, and a knack for thinking outside the box to every project I work on. Whether it's solving complex problems, learning new frameworks, or delivering clean, efficient code, I’m always up for a challenge. My background includes working with JavaScript, React, PostgreSQL, and other key tools that I continue to sharpen as I grow in this field.
            
            
                My ultimate goal is to work in a dynamic industry where I can collaborate on exciting projects that push boundaries and create meaningful user experiences. Whether that’s in tech, adventure, or creative industries, I’m ready to contribute my skills and learn even more along the way.
        
            
                When you visit my portfolio, I hope you’ll see not just my work, but also the passion and dedication I bring to everything I do. Let’s connect and create something amazing together!
            </p>
        </section>
    );
}

export default AboutMe;
