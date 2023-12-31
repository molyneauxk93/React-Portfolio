import React, { useState } from 'react';

function Footer() {
    // Contact me section cards for the footer of portfolio
    return (

        <div className="contact">

                <section className="card">

                    <div className="card-header">
                        <a href="https://www.linkedin.com/in/joshua-molyneaux-a89624b9" target="_blank">
                            <img src="./images/linkedin.png" alt="Linkedin Graphic" />
                        </a>

                    </div>
                </section>


            <section className="card">

                <div className="card-header">
                    <a href="https://github.com/molyneauxk93" target="_blank">
                        <img src="./images/github-icon.jpg" alt="Email Graphic" />
                    </a>

                </div>


            </section>

            <section className="card">

                <div className="card-header">
                    <a href="https://www.instagram.com/josh_mol_/" target="_blank">
                        <img src="./images/Instagram-Icon.png" alt="Email Graphic" />
                    </a>

                </div>

            </section>

        </div>

    );
}

export default Footer; 