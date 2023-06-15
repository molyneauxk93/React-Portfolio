import React, { useState } from 'react';
import Navigation from './Navigation';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';


function Header() {

const [currentPage, setCurrentPage] = useState('About');

const renderPage = () => {
    if(currentPage === 'About') {
        return <About />;
    }
    if (currentPage === 'Portfolio') {
        return <Portfolio />
    }
    if (currentPage === 'Contact') {
        return <Contact />
    }
    if (currentPage === 'Resume') {
        return <Resume />
    }
};

const handlePageChange = (page) => setCurrentPage(page);

    return (
    <div>
    <header className="header image-graphic">

    <h1>Kevin Molyneaux<span className="header-hidden">'s Portfolio</span></h1>
    <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
    {renderPage()}
    </div>
    );
}

export default Header; 