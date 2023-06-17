import React from 'react';

export default function Resume() {

    //resume page html with download link to resume 
    return (
        <div>
            <h2>Resume</h2>

            <a className='resume-anchor' href='../files/KJMolyneauxResume2020.docx' download='Kevin Molyneaux - Resume' >Download my Resume</a>

            <h3>Front-end Proficiencies:</h3>

            <ul className='resume-list'>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>JQuery</li>
                <li>Responsive Design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>

            <h3>Back-end Proficiencies:</h3>

            <ul className='resume-list'>
                <li>Node</li>
                <li>APIs</li>
                <li>Express</li>
                <li>MySQL, sequelize</li>
                <li>NOSQL</li>
            </ul>

        </div>
    );
}