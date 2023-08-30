import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Products from '../components/Products/Products';
import './home.css';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = query => {
        setSearchQuery(query);
    };

    return (
        <>
            <Header onSearch={handleSearch} />
            <div className='home_container'>
                <Products searchQuery={searchQuery} />
            </div>
        </>
    );
}

export default Home;
