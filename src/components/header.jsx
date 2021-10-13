import React from 'react'
import { Link } from 'react-router-dom'

const header = () => {
    return (
        <header>
            <nav>
                <div className="navbar-brand">
                    <img src="" alt="" />
                </div>
                <div className="menu-btn">
                    <button className="menu-toggler"></button>
                </div>
                <div className="nav-menu">
                    <ul className="nav-list">
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

export default header;