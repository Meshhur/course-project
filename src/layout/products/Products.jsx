import React from 'react';
import "./Products.css";
import MyButton from '../../components/UI/button/MyButton';
import rectangles from "../../images/jpg/rectangles.jpg";
import box from "../../images/jpg/box.jpg";
import pillow from "../../images/jpg/pillow.jpg";
import scotch from "../../images/jpg/scotch.jpg";
import mini_card from "../../images/jpg/mini_card.jpg";
import blue_paper from "../../images/jpg/blue_paper.jpg";

function Products() {
    return (
        <section className='all-products container'>
            <article className='browse-products'>
                <h2 className='customer'>Products you can customize</h2>
                <MyButton className="myButton browse-btn">Browse all products</MyButton>
            </article>
            <section className='products container'>
                <div className="product">
                    <img className='product-image' src={rectangles} alt="rectangles" />
                    <article className='info-for-product'>
                        <article className="about-product carton-box">
                            <h3 className='product-text'>Custom Carton Boxes</h3>
                            <p className="product-text-item">
                                Create a clean brand presentation with this custom carton box.
                            </p>
                        </article>
                        <p className='price'>
                            Starting at:<br/>$10.44/unit
                        </p>
                    </article>
                </div>
                <div className="product">
                    <img className='product-image' src={box} alt="blue box" />
                    <article className='about-product no-price-box'>
                        <h3 className='product-text'>Custom Boxes</h3>
                        <p className="product-text-item">
                            A stylish and strong <br/>corrugated cardboard box.
                        </p>
                    </article>

                </div>
                <div className="product">
                    <img className='product-image' src={pillow} alt="white pillow" />
                    <article className='about-product no-price-poly'>
                        <h3 className='product-text'>Custom Poly Mailers</h3>
                        <p className="product-text-item">
                            A fully custom high quality self sealing poly mailer.
                        </p>
                    </article>

                </div>
                <div className="product">
                    <img className='product-image' src={scotch} alt="scotch" />
                    <article className='info-for-product'>
                        <article className="about-product custom-tape">
                            <h3 className='product-text'>Custom Tape</h3>
                            <p className="product-text-item">
                                High quality custom tape to seal your shipping boxes during delivery.
                            </p>
                        </article>
                        <p className='price'>
                            Starting at:<br/>$12.16/unit
                        </p>
                    </article>

                </div>
                <div className="product">
                    <img className='product-image' src={mini_card} alt="mini card" />
                    <article className='info-for-product'>
                        <article className="about-product sticker">
                            <h3 className='product-text'>Custom Stickers</h3>
                            <p className="product-text-item">
                                Add personality to your packages with custom stickers.
                            </p>
                        </article>
                        <p className='price'>
                            Starting at:<br/>$0.41/unit
                        </p>
                    </article>

                </div>
                <div className="product">
                    <img className='product-image' src={blue_paper} alt="paper" />
                    <article className='info-for-product'>
                        <article className="about-product custom-paper">
                            <h3 className='product-text'>Custom Tissue Paper</h3>
                            <p className="product-text-item">
                                The perfect addition to branding your package.
                            </p>
                        </article>
                        <p className='price'>
                            Starting at:<br/>$6.54/unit
                        </p>
                    </article>
                </div>
            </section>
            <article className='stocks'>
                <h3 className='stock-item'>
                    Need unbranded stock items?
                </h3>
                <MyButton className="white-btn">Shop stock</MyButton>
            </article>
        </section>
    );
};

export default Products;