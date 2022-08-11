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
                    <img className='shopify-picture' src={shopify} alt="shopify diploma" />
                    <p className='diploms-name shopify'>
                        Shopify Integrated
                    </p>
                </article>
                <article className='certificate'>
                    <img className='amazon-picture' src={amazon} alt="amazon certificate" />
                    <p className='diploms-name amazon'>
                        Amazon Certified
                    </p>
                </article>
                <article className='certificate'>
                    <img className='mix-picture' src={mix} alt="mix diploma" />
                    <p className='diploms-name mix'>
                        Eco-Frie<br/>ndly
                    </p>
                </article>
            </div>
        </section>
    );
};

export default Achievements;