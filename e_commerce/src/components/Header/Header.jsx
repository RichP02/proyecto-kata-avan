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
            {/* Resto del código... */}
        </div>
    );
}

export default Header;
