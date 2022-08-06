import React from 'react';
import arka_logo from "../../images/png/arka-logo.png";
import subaru_stars from "../../images/png/subaru.png";
import cart from "../../images/png/cart.png";
import "./Header.css";

function Header() {
    return (
        <header className='header'>
            <img className='logo' src={arka_logo} alt="our logo" />
            <nav className='nav'>
                <ul className='nav-ul'>
                    <li>
                        <img className='li-star' src={subaru_stars} alt="stars of subaru motors" />
                        <a href="#start" className='active'>Start your design</a>
                    </li>
                    <li>
                        <a href="#products">All products</a>
                    </li>
                    <li>
                        <a href="">Inspiration</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                </ul>
            </nav>
            <div className="profile">
                <a href="">ACCOUNT</a>
                <img src={cart} alt="cart" />
            </div>
        </header>
    );
};

export default Header;