import React, { useState } from 'react';
import Navigation from './Navigation';

function Header() {

    return (
    <header className="header">

    <h1>Kevin Molyneaux<span className="header-hidden">'s Portfolio</span></h1>
    <Navigation/>
    </header>
    );
}

export default Header; 