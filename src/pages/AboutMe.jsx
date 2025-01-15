import React from 'react';
import '../styles/aboutme.css';
import WashingtonImage from '../assets/images/Washington.jpg'; // Use ES import

function AboutMe() {
    return (
    <section>
        <h2 className="about-me-title">About Me</h2>
        <div className="about-me">
        <img
        src={WashingtonImage} // Correct ES module import
        alt="Matthew Welcome"
        style={{ width: '150px', borderRadius: '50%' }}
        />

            <p>
            Hi, I’m Matthew Welcome! I’m a future full-stack web developer from Ohio, currently diving headfirst into learning how to code and build awesome websites and apps. When I’m not hitting the books (or the keyboard), you’ll find me out kayaking, hiking breathtaking trails, or flying my DJI drones to capture the world from above. These adventures inspire me and keep my creativity flowing, which I bring straight back to my projects.

I got into web development because I’ve always been fascinated by tech and wanted to turn that passion into something real. Now, I’m learning to code from the ground up, and I’m loving every challenge along the way. It’s exciting to see how logic and creativity can come together to make things that are not only functional but also fun to use.

Right now, I’m soaking up everything I can about JavaScript, React, PostgreSQL, and all the other tools that make the magic happen. I may not have the title of “full-stack developer” yet, but I’m working hard to get there, one project at a time.

Take a look at my portfolio, and you’ll see the energy, curiosity, and dedication I bring to every project. Let’s connect—I’d love to share what I’m working on and hear about what excites you, too!
            </p>
            </div>
        </section>
    );
}

export default AboutMe;
