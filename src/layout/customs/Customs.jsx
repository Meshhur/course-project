import React from 'react';
import "./Customs.css";
import eq_pic_1 from "../../images/png/card.png";/*импортирую картинки в формате .png, потому что при .jpg у них белый фон */
import eq_pic_2 from "../../images/png/Rectangle2.png";
import eq_pic_3 from "../../images/png/equipment.png";
import MyButton from '../../components/UI/button/MyButton';


function Customs() {
    return (
        <section className="customs container" id='customs'>
            <h2 className="customs-head">
                Fast and easy custom boxes your customers will love
            </h2>
            <div className="equipments">
                <article className="equipment">
                    <img src={eq_pic_1} alt="equipment" className="eq-picture" />
                    <h3 className='customs-headline'>You Order</h3>
                    <p className="customs-about">
                        Design and order boxes in a few clicks.
                    </p>
                </article>

                <article className="equipment">
                    <img src={eq_pic_2} alt="equipment" className="eq-picture" />
                    <h3 className='customs-headline'>We Proof</h3>
                    <p className="customs-about">
                        Approve your designs before production.
                    </p>
                </article>

                <article className="equipment">
                    <img src={eq_pic_3} alt="equipment" className="eq-picture" />
                    <h3 className='customs-headline'>We Print & Ship</h3>
                    <p className="customs-about">
                        Your order gets printed and shipped with tracking.
                    </p>
                </article>

            </div>

            <MyButton className="myButton start-btn">Start your design</MyButton>

        </section>
    );
};

export default Customs;