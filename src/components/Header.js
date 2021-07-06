import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [state, setActive] = useState('');
    const mobileMenu = () => {
        setActive('active');
    }
    return (
        <header>
            <nav className='navbar'>
                <ul className={`nav-menu ${state}`} >
                    <li className='nav-item'>
                        <Link to='/Login'>
                            Sign Up
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='nav-link'>
                            Sign In
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='nav-link'>
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className={`hamburguer ${state}`}  onClick={mobileMenu}>
                <span className={`bar ${state}`}></span>
                <span className={`bar ${state}`}></span>
                <span className={`bar ${state}`}></span>
            </div>
        </header>
    )
}

export default Header;