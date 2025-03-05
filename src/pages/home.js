import React from 'react';
import './home.css';
import { FaBars, FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';

function Home() {
    return (
        <div className='home-container'>
            <nav className='navbar'>
                <FaBars className='icon' />
                <FaShoppingCart className='icon' />
                <FaUser className='icon' />
            </nav>
            
            <div className='search-bar'>
                <input type='text' placeholder='Search' />
                <button><FaSearch /></button>
            </div>
            
            <div className='content'>
                <div className='ads'>ads</div>
                <div className='products'>products</div>
            </div>
        </div>
    );
}

export default Home;