import React from 'react';
import '../styles/portfolio.css';

function Portfolio() {
    const projects = [
    {
        title: 'Reactfolio',
      image: 'path-to-reactfolio-image.jpg', // Replace with actual image path
        deployedLink: 'https://example.com/reactfolio',
        repoLink: 'https://github.com/yourusername/reactfolio',
    },
    {
        title: 'Project 2',
        image: 'path-to-project2-image.jpg',
        deployedLink: 'https://example.com/project2',
        repoLink: 'https://github.com/yourusername/project2',
    },
    {
        title: 'Project 3',
        image: 'path-to-project3-image.jpg',
        deployedLink: 'https://example.com/project3',
        repoLink: 'https://github.com/yourusername/project3',
    },
    {
        title: 'Project 4',
        image: 'path-to-project4-image.jpg',
        deployedLink: 'https://example.com/project4',
        repoLink: 'https://github.com/yourusername/project4',
    },
    {
        title: 'Project 5',
        image: 'path-to-project5-image.jpg',
        deployedLink: 'https://example.com/project5',
        repoLink: 'https://github.com/yourusername/project5',
    },
    {
        title: 'Project 6',
        image: 'path-to-project6-image.jpg',
        deployedLink: 'https://example.com/project6',
        repoLink: 'https://github.com/yourusername/project6',
    },
    ];

    return (
    <section>
        <h2>Portfolio</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {projects.map((project, index) => (
            <div key={index} style={{ width: '30%' }}>
            <img
                src={project.image}
                alt={project.title}
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
            <h3>{project.title}</h3>
            <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                View App
            </a>
            <br />
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                GitHub Repo
            </a>
            </div>
        ))}
        </div>
    </section>
    );
}

export default Portfolio;
