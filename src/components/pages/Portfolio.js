import React from 'react';
import Project from '../Project'


export default function Portfolio() {
    // object for projects in my portfolio 
    const projects = [
        {
            title: 'PawsPlus+',
            link: 'https://molyneauxk93.github.io/PawsPlus-/',
            imagesrc: './images/PawsPlusLogo.jpg',
            description: 'PawsPlus+ Pet Finder! Find your new furry friend !'
        },
        {
            title: 'Break My Intake',
            link: 'https://evening-journey-80732.herokuapp.com/',
            imagesrc: './images/donut-chart-1.png',
            description: 'Lets Break your Intake Together!'
        },
        {
            title: 'Weather Dashboard',
            link: 'https://molyneauxk93.github.io/KevinMolyneaux-Weather-Dashboard/',
            imagesrc: './images/weather-icon.jpg',
            description: ' Keep up with current weather!'
        },
        {
            title: 'CT NestQuest',
            link: 'https://radiant-ridge-52062-42fcf9b129ea.herokuapp.com/',
            imagesrc: './images/ctnestquest.jpg',
            description: 'Rent with confidence and explore Connecticuts best!'
        },
        {
            title: 'Work Day Scheduler',
            link: 'https://molyneauxk93.github.io/KevinMolyneaux-Work-Day-Scheduler/',
            imagesrc: './images/workday.png',
            description: 'Stay organized with my work day scheduler!'
        },
        {
            title: 'Code Quiz',
            link: 'https://molyneauxk93.github.io/KevinMolyneaux-Code-Quiz/',
            imagesrc: './images/quiz.png',
            description: 'Test your coding knowledge with my code quiz app!'
        }

    
    ];
    //return html for my portfolio intro along with project object data to be loading into Project component 
    return (
        <div>
            <section className="about-portfolio">
                <h3 id="my-portfolio">My Portfolio Highlights !</h3>
                <p>Below are some projects that I have worked on so far. I believe that these projects
                    best highlight my abilities was a developer currently. If you are interested in seeing
                    more projects by me, please navigate to my GitHub! Thank you!
                </p>

            </section>

            <section className="projects">

            {
                projects.map((project) => <Project data={project}/>)
            }

            </section>
        </div>
    );
}
