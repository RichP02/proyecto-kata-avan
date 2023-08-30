import React, { useState } from 'react';
import './header.css';

const Header = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = event => {
        const query = event.target.value;
        setSearchQuery(query);
        onSearch(query);
    };

    return (
        <div className='header__container'>
            <input
                className='header__input-search'
                type='search'
                placeholder='Search a product...'
                value={searchQuery}
                onChange={handleSearchChange}
            />
            <div className='header__li-container'>
                <ul>
                    <li className='header__li'>
                        <a href="">Home</a>
                    </li>
                    <li className='header__li'>
                        <a href="">Login</a>
                    </li>
                    <li className='header__li'>
                        <a href="">SingUp</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
