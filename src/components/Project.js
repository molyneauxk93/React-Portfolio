import React, { useState } from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';

function Project() {
    return (
<div className="body-class">
    {/* <!--Navigation banner at the top of webpage with my name and navigation links --> */}
    <Header/>

    {/* <!--Added section with a background image and my about me card--> */}
    <section className="image-graphic">

        <section className="about-me">
            <section className="card">
                <div className="card-header">
                    <img src="/images/croppedJoshHeadshot2.jpg" alt="About Me Graphic" />
                    <h2 id="about-me">About Me</h2>
                </div>

                <p>

                    Hi my name is Kevin Molyneaux, though I prefer to be called Josh! In my spare time i enjoy
                    Photography, working out, watching anime, playing video games, travelling and spending time
                    with my friends and family. While you are here, you should totally check out my Portfolio,
                    and if you like what you see and have any questions feel free to contact me! Thanks for
                    stopping by!

                </p>

            </section>
        </section>

    </section>

    {/* <!--Added section with header for my portfolio highlights as well as a paragraph with some detail--> */}
    <section className="about-portfolio">
        <h3 id="my-portfolio">My Portfolio Highlights !</h3>
        <p>Below are some projects that I have worked on so far. I believe that these projects
            best highlight my abilities was a developer currently. If you are interested in seeing
            more projects by me, please navigate to my GitHub! Thank you!
        </p>

    </section>

    {/* <!--Project Highlight cards section with cards of projects and one to navigate to additional projects--> */}
    <section className="projects">

        {/* <!--Horiseon Refactor Project Card--> */}
        <section className="card">
            <div className="card-header">
                <a href="https://molyneauxk93.github.io/PawsPlus-/" target="_blank">
                    <img src="../images/PawsPlusLogo.jpg" alt="PawsPlus Graphic" />
                </a>
                <h4>PawsPlus+</h4>
            </div>

            <p>

                PawsPlus+ Pet Finder! Find your new furry friend !

            </p>


        </section>

        {/* <!--Placeholder card shell for when I want to add more projects--> */}
        <section className="card">
            <div className="card-header">
                <a href="https://evening-journey-80732.herokuapp.com/" target="_blank">
                    <img src="../images/donut-chart-1.png" alt="Break My Intake Graphic" />
                </a>
                <h4>Break My Intake</h4>
            </div>

            <p>

                Let's Break your Intake Together!

            </p>


        </section>

        {/* <!--Placeholder card shell for when I want to add more projects--> */}
        <section className="card">
            <div className="card-header">
                <a href=" ">
                    <img src="../images/Placeholder.jpg" alt="Portfolio Graphic" />
                </a>
                <h4>Placeholder</h4>
            </div>

            <p>

                Check some of my projects that I have worked on so far!

            </p>


        </section>

        {/* <!--Placeholder card shell for when I want to add more projects--> */}
        <section className="card">
            <div className="card-header">
                <a href=" ">
                    <img src="../images/Placeholder.jpg" alt="Portfolio Graphic" />
                </a>
                <h4>Placeholder</h4>
            </div>

            <p>

                Check some of my projects that I have worked on so far!

            </p>

        </section>

        {/* <!--Portfolio Card for additional projects that are not in the highlights--> */}
        <section className="card">
            <div className="card-header">
                <a href="https://github.com/molyneauxk93/" target="_blank">
                    <img src="../images/PortfolioFolder.jpg" alt="Portfolio Graphic" />
                </a>
                <h4>More Projects</h4>
            </div>

            <p>

                Click here to see some of my other projects!

            </p>


        </section>


    </section>

    {/* <!--Contact Me section heading--> */}
    <section className="contact-me">

        <h5 id="contact-me">Contact Me</h5>

    </section>

    {/* <!--Contact Me section cards with links to my Linkedin, Email, and Phone--> */}
    <section className="contact">

        <section className="card">

            <div className="card-header">
                <a href="https://www.linkedin.com/in/joshua-molyneaux-a89624b9" target="_blank">
                    <img src="../images/linkedin.png" alt="Linkedin Graphic" />
                </a>

            </div>


        </section>

        <section className="card">

            <div className="card-header">
                <a href="mailto:joshua.molyneaux@live.com">
                    <img src="../images/email.jpg" alt="Email Graphic" />
                </a>

            </div>


        </section>

        <section className="card">

            <div className="card-header">
                <a href="tel:+01-860-999-3972">
                    <img src="../../images/telephone.jpg" alt="Telephone Graphic" />
                </a>

            </div>

        </section>

    </section>

    <Footer/>

</div>

);
        
}

export default Project;
