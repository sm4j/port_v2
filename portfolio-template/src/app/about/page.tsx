import React from 'react';

const AboutPage = () => {
    return (
        <div className="about-container">
            <h1>About Me</h1>
            <img src="/pfp.png" alt="Profile" className="profile-image" />
            <p>
                I am a recent graduate with a Bachelor of Science in Computer Science, 
                complemented by dual minors in Artificial Intelligence and Cybersecurity. 
                My passion lies in leveraging technology to solve complex problems and 
                create innovative solutions.
            </p>
            <h2>Background</h2>
            <p>
                Throughout my academic journey, I have developed a strong foundation in 
                programming, algorithms, and system design. I have also gained hands-on 
                experience through various projects and internships, where I applied my 
                skills in real-world scenarios.
            </p>
            <h2>Interests</h2>
            <p>
                I am particularly interested in the fields of AI and cybersecurity, 
                and I am eager to explore opportunities that allow me to work at the 
                intersection of these domains.
            </p>
            <h2>Achievements</h2>
            <p>
                I have been involved in several projects that showcase my skills, 
                including developing machine learning models and implementing security 
                protocols for applications. I am excited to continue learning and 
                growing in my career.
            </p>
        </div>
    );
};

export default AboutPage;