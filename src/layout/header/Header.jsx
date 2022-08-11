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
                        <a href="#customs">Inspiration</a>
                    </li>
                    <li>
                        <a href="#requests">About</a>
                    </li>
                </ul>
            </nav>
            <div className="profile">
                <a href="#">ACCOUNT</a>
                <img src={cart} alt="cart" />
            </div>
            <div className="responsive-navbar">
                <input id="menu__toggle" type="checkbox" />
                <label class="menu__btn" for="menu__toggle">
                    <span></span>
                </label>
                <ul class="responsive-ul">
                    <li className='res-li'>
                        <a class="menu__item" href="#start">Start your design </a>
                    </li>
                    <li className='res-li'>
                        <a class="menu__item" href="#products">All products</a>
                    </li>
                    <li className='res-li'>
                        <a class="menu__item" href="#customs">Inspiration</a>
                    </li>
                    <li className='res-li'>
                        <a class="menu__item" href="#requests">About</a>
                    </li>
                    <li className='res-li'>
                        <a class="menu__item" href="#">ACCOUNT</a>
                        <img src={cart} alt="cart" />
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;