import React from 'react';
import MyButton from '../../components/UI/button/MyButton';
import "./Buttons.css";

function Buttons() {
    return (
        <article className='buttons container'>
            <h2 className="getToIt">Let`s get to it</h2>
            <div className="btn">
                <MyButton className="myButton first_btn">Start your design</MyButton>
                <MyButton className="white-btn second_btn">Browse all products</MyButton>
            </div>
        </article>
    )
}

export default Buttons