import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo_b.png';

const Header = () => {
    
    const [nav, setNav] = useState(false);

    return (
        <header>
            <nav className="nav">
                <div className="nav-brand">
                    <img src={logo} alt="" />
                </div>
                <div className="nav-menu">
                    <div className="nav-btn">
                        <button className={`${nav === true ? ` open ` : ` `} nav-toggler `} onClick={() => setNav(!nav)}>
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </button>
                    </div>
                    <ul className={`${nav === true ? ` open ` : ` `} nav-list `}>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/gen-bill" className="nav-link">
                                Genetare Bill
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;