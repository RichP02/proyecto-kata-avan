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

            <div className='header__filter-container'>
                <select>
                    <option value="">All Categories</option>
                    <option value="Grocery">Grocery</option>
                    <option value="Music">Music</option>
                    <option value="Computers">Computers</option>
                    <option value="Toys">Toys</option>
                    <option value="Health">Health</option>
                    <option value="">Kids</option>
                    <option value="Grocery">Sports</option>
                    <option value="Music">Outdoors</option>
                    <option value="Computers">Shoes</option>
                    <option value="Toys">Garden</option>
                    <option value="Health">Games</option>
                    <option value="Grocery">Jewelery</option>
                    <option value="Music">Movies</option>
                    <option value="Computers">Tools</option>
                    <option value="Toys">Automotive</option>
                    <option value="Health">Industrial</option>
                    <option value="Grocery">Baby</option>
                    <option value="Music">Beauty</option>
                    <option value="Computers">Home</option>
                    <option value="Toys">Electronics</option>
                    <option value="Health">Books</option>
                </select>
            </div>

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
