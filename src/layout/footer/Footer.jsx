import React from 'react';
import "./Footer.css";
import arka_logo from "../../images/png/arka-logo.png";
import facebook from "../../images/png/facebook.png";
import twitter_logo from "../../images/png/twitter.png";
import insta_logo from "../../images/png/instagram.png";
import MyInput from '../../components/UI/input/MyInput';
import MyButton from '../../components/UI/button/MyButton';


function Footer() {
    return (
        <footer className='footer'>
            <div className="content container">
                <img className='f-logo' src={arka_logo} alt="our logo" />
                <ul className="contact">
                    <a href="#" className="contact-link">
                        <li className="contact-li">Custom Design</li>
                    </a>
                    <a href="#products" className="contact-link">
                        <li className="contact-li">All Products</li>
                    </a>
                    <a href="#customs" className="contact-link">
                        <li className="contact-li">Inspiration</li>
                    </a>
                    <a href="#" className="contact-link">
                        <li className="contact-li">Sustainability</li>
                    </a>
                    <a href="#" className="contact-link">
                        <li className="contact-li">Affiliate Program</li>
                    </a>
                    <a href="#" className="contact-link">
                        <li className="contact-li">Request Custom Quote</li>
                    </a>
                    <a href="#" className="contact-link">
                        <li className="contact-li">Request Dieline</li>
                    </a>
                </ul>
                <ul className="contact contact-2">
                    <a href="#" className="contact-link">
                        <li className="contact-li">About Us</li>
                    </a>
                    <a href="#" className="contact-link">
                        <li className="contact-li">Blog</li>
                    </a>
                    <a href="#" className="contact-link">
                        <li className="contact-li">Partners</li>
                    </a>
                    <a href="#" className="contact-link">
                        <li className="contact-li">Contact Us</li>
                    </a>
                    <a href="#" className="contact-link">
                        <li className="contact-li">FAQ</li>
                    </a>
                    <a href="#" className="contact-link">
                        <li className="contact-li">Terms & Conditions</li>
                    </a>
                </ul>
                <ul className="contact contact-3">
                    <a href="#" className="contact-link">
                        <li className="contact-li">Shopify App</li>
                    </a>
                    <a href="#" className="contact-link">
                        <li className="contact-li">14 Day Free Shopify Trial</li>
                    </a>
                    <a href="#" className="contact-link">
                        <li className="contact-li">BigCommerce</li>
                    </a>
                    <li className="contact-li logos">
                        <a href="https://ru-ru.facebook.com/">
                            <img className="social-media-png" src={facebook} alt="facebook" title='facebook'/>
                        </a>
                        <a href="https://twitter.com/?lang=ru">
                            <img className="social-media-png" src={twitter_logo} alt="twitter" title='twitter'/>
                        </a>
                        <a href="https://www.instagram.com/">
                            <img className="social-media-png" src={insta_logo} alt="instagram" title='instagram'/>
                        </a>
                    </li>
                </ul>
                <div className="offers">
                    <p className="offer-txt">
                        Get exclusive offers and tips.
                    </p>
                    <MyInput className="myInput email-input" placeholder="Your email" />
                    <MyButton className="myButton join-button">Join instantly</MyButton>
                </div>
            </div>
        </footer>
    );
};

export default Footer;