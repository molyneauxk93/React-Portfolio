import React, { useState } from 'react';
import Navigation from './Navigation';


function Header(props) {
    // return html along with navigating for portfolio through the Header component 
    return (
    <header className="header image-graphic">

    <h1>Kevin Molyneaux<span className="header-hidden">'s Portfolio</span></h1>
    <Navigation  currentPage={props.currentPage} handlePageChange={props.handlePageChange}/>
    </header>
    );
}

export default Header; 