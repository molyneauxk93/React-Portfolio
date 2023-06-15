import React from 'react';

export default function Portfolio() {

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
        </div>
    );
}