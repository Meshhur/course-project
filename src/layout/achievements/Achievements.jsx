import React from 'react';
import "./Achievements.css";
import shopify from "../../images/png/shopify.png";
import amazon from "../../images/png/fruistFree.png";
import mix from "../../images/png/mix.png";

function Achievements() {
    return (
        <section className='achievements'>
            <div className="container achievements-content">
                <article className='certificate'>
                    <img src={shopify} alt="shopify diploma" />
                    <p className='diploms-name shopify'>
                        Shopify Integrated
                    </p>
                </article>
                <article className='certificate'>
                    <img src={amazon} alt="amazon certificate" />
                    <p className='diploms-name amazon'>
                        Amazon Certified
                    </p>
                </article>
                <article className='certificate'>
                    <img src={mix} alt="mix diploma" />
                    <p className='diploms-name mix'>
                        Eco-Friendly
                    </p>
                </article>
            </div>
        </section>
    );
};

export default Achievements;