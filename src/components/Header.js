import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [state, setActive] = useState('');
    const mobileMenu = () => {
        if(state === ''){
            setActive('active');
        } else {
            setActive('');
        }
    }
    return (
        <header>
            <nav className='navbar'>
                <ul className={`nav-menu ${state}`} >
                    <li className='nav-item' onClick={mobileMenu}>
                        <Link to='/signup'>
                            Sign Up
                        </Link>
                    </li>
                    <li className='nav-item' onClick={mobileMenu}>
                        <Link to='/signin'>
                            Sign In
                        </Link>
                    </li>
                    <li className='nav-item' onClick={mobileMenu}>
                        <Link to='/about'>
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className={`hamburger ${state}`}  onClick={mobileMenu}>
                <span className={`bar ${state}`}></span>
                <span className={`bar ${state}`}></span>
                <span className={`bar ${state}`}></span>
            </div>
        </header>
    )
}

export default Header;