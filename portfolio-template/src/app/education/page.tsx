import React from 'react';

const EducationPage = () => {
    return (
        <div className="education-container">
            <h1 className="text-3xl font-bold mb-4">Education</h1>
            <div className="degree">
                <h2 className="text-2xl">Bachelor of Science in Computer Science</h2>
                <p className="text-lg">Graduated: [Year]</p>
                <p className="text-md">University: [University Name]</p>
            </div>
            <div className="minors">
                <h3 className="text-xl mt-4">Minors:</h3>
                <ul className="list-disc list-inside">
                    <li>Artificial Intelligence</li>
                    <li>Cybersecurity</li>
                </ul>
            </div>
        </div>
    );
};

export default EducationPage;