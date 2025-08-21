import React from 'react';

const Education: React.FC = () => {
    return (
        <section className="education">
            <h2>Education</h2>
            <div className="degree">
                <h3>Bachelor of Science in Computer Science</h3>
                <p>Graduated: [Year]</p>
                <p>University: [University Name]</p>
            </div>
            <div className="minors">
                <h4>Minors:</h4>
                <ul>
                    <li>Artificial Intelligence</li>
                    <li>Cybersecurity</li>
                </ul>
            </div>
        </section>
    );
};

export default Education;