import React from 'react';

export default function About() {
    //about me section image and paragraph
    return (
        <div className='about-me'>
            <section>
                <div className='card-header'>
                <h2 id="about-me">About Me</h2>
                    <img src="./images/croppedJoshHeadshot2.jpg" alt="About Me Graphic" />
                </div>

                <p className='about-paragraph'>

                    Hi my name is Kevin Molyneaux, though I prefer to be called Josh! In my spare time I enjoy
                    Photography, working out, watching anime, playing video games, travelling and spending time
                    with my friends and family. While you are here, you should totally check out my Portfolio,
                    and if you like what you see and have any questions feel free to contact me! Thanks for
                    stopping by!

                </p>
            </section>
        </div>
    );
}