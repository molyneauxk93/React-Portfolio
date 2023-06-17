import React, { useState } from 'react';

function Navigation({ currentPage, handlePageChange }) {

    return (
        <nav>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a
                        href="#about-me"
                        onClick={() => handlePageChange('About')}
                        // This is a conditional (ternary) operator that checks to see if the current page is "About"
                        // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    >
                        About
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#Portfolio"
                        onClick={() => handlePageChange('Portfolio')}
                        // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                    >
                        Portfolio
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#Contact"
                        onClick={() => handlePageChange('Contact')}
                        // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#resume"
                        onClick={() => handlePageChange('Resume')}
                        // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                    >
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;