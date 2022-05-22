import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/scss/navbar.scss';

const Navbar = () => {
    return (
        <div>
            <ul className='navbar-container'>
                
                <Link to='/'><li className='nav-item'>Home</li></Link>
                <Link to='/manage'><li className='nav-item'>Manage Station</li></Link>
                <Link to='/login'><li className='nav-item last-item'>Login</li></Link>
                

            </ul>
            
        </div>
    );
};

export default Navbar;