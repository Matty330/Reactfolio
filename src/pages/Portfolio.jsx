import React from 'react';
import {motion} from 'framer-motion'; //import motion for animation 
import Project1Image from '../assets/images/Project 1.jpg';
import Project2Image from '../assets/images/Project 2.jpg';
import Project3Image from '../assets/images/Project 3.jpg';
import Project4Image from '../assets/images/Project 4.jpg';
import Project5Image from '../assets/images/Project 5.jpg';
import Project6Image from '../assets/images/Project 6.jpg';
import '../styles/portfolio.css';

function Portfolio() {
    const projects = [
        {
            title: 'Readme-generator',
            image: Project1Image,
            deployedLink: 'https://example.com/reactfolio',
            repoLink: 'https://github.com/Matty330/readme-generator.git',
        },
        {
            title: 'Fortune Cookie',
            image: Project2Image,
            deployedLink: 'https://matty330.github.io/pixel-C-project1/',
            repoLink: 'https://github.com/Matty330/pixel-C-project1.git',
        },
        {
            title: 'Javascript Clock',
            image: Project3Image,
            deployedLink: 'https://matty330.github.io/JavaScript-clock/',
            repoLink: 'https://github.com/Matty330/JavaScript-clock.git',
        },
        {
            title: 'Rotating Image Gallery',
            image: Project4Image,
            deployedLink: 'https://matty330.github.io/Rotating-image-gallery/',
            repoLink: 'https://github.com/Matty330/Rotating-image-gallery.git',
        },
        {
            title: 'Button Ripple',
            image: Project5Image,
            deployedLink: 'https://matty330.github.io/Button-ripple/',
            repoLink: 'https://github.com/Matty330/Button-ripple.git',
        },
        {
            title: 'Weather APP',
            image: Project6Image,
            deployedLink: 'https://matty330.github.io/weatherappv2/',
            repoLink: 'https://github.com/Matty330/weatherappv2.git',
        },
    ];

    return (
        <section style={{ padding: '20px' }}>
            <h2>Portfolio</h2>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '20px',
                    justifyContent: 'center',
                }}
            >
                {projects.map((project, index) => (
                    <div
                        key={index}
                        style={{
                            width: '300px',
                            border: '1px solid #ccc',
                            borderRadius: '10px',
                            padding: '15px',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                            textAlign: 'center',
                            backgroundColor: '#a8dadc',
                        }}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            style={{
                                width: '100%',
                                height: '200px',
                                objectFit: 'cover',
                                borderRadius: '8px',
                                marginBottom: '10px',
                            }}
                        />
                        <h3>{project.title}</h3>
                        <a
                            href={project.deployedLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-block',
                                margin: '5px 0',
                                padding: '10px 15px',
                                backgroundColor: '#007bff',
                                color: 'white',
                                textDecoration: 'none',
                                borderRadius: '5px',
                            }}
                        >
                            View App
                        </a>
                        <br />
                        <a
                            href={project.repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-block',
                                margin: '5px 0',
                                padding: '10px 15px',
                                backgroundColor: '#28a745',
                                color: 'white',
                                textDecoration: 'none',
                                borderRadius: '5px',
                            }}
                        >
                            GitHub Repo
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;
