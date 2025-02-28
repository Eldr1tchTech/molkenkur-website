import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import PropTypes from 'prop-types'

function Header(props) {
    const [currentPage, setCurrentPage] = useState(props.page);

    return (
        <header className="header">
            <h1 className="header-title">Schlosshotel Molkenkur</h1>
            <nav>
                <ul className="nav-style">
                    <li className={`nav-items ${currentPage === 'Home' ? 'active' : ''}`}>
                        <Link to="/molkenkur-website/" onClick={() => setCurrentPage('Home')}>Home</Link>
                    </li>
                    <li className={`nav-items ${currentPage === 'Hochzeiten' ? 'active' : ''}`}>
                        <Link to="/molkenkur-website/hochzeiten" onClick={() => setCurrentPage('Hochzeiten')}>Hochzeiten</Link>
                    </li>
                    <li className={`nav-items ${currentPage === 'Hotel' ? 'active' : ''}`}>
                        <Link to="/molkenkur-website/hotel" onClick={() => setCurrentPage('Hotel')}>Hotel</Link>
                    </li>
                    <li className={`nav-items ${currentPage === 'Restaurant' ? 'active' : ''}`}>
                        <Link to="/molkenkur-website/restaurant" onClick={() => setCurrentPage('Restaurant')}>Restaurant</Link>
                    </li>
                    <li className={`nav-items ${currentPage === 'Tagungen' ? 'active' : ''}`}>
                        <Link to="/molkenkur-website/tagungen" onClick={() => setCurrentPage('Tagungen')}>Tagungen</Link>
                    </li>
                    <li className={`nav-items ${currentPage === 'Events' ? 'active' : ''}`}>
                        <Link to="/molkenkur-website/events" onClick={() => setCurrentPage('Events')}>Events</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

Header.PropTypes = {
    page: PropTypes.string
}

Header.defaultProps = {
    page: 'Home'
}

export default Header;