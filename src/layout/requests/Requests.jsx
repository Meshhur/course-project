import React from 'react';
import MyButton from '../../components/UI/button/MyButton';
import "./Requests.css";
import box_pic from "../../images/png/Rectangle.png";
import iPad_pic from "../../images/png/iPad.png";

function Requests() {
  return (
    <div className='requests container'>
        <article className='request req_quote'>
            <img className='req_pictures' src={box_pic} alt="" />
            <h2 className='req-head'>
                Couldn't find a size you need?
            </h2>
            <p className="req-tex-item">
                We’ll work directly with you to create a fully branded packaging system.
            </p>
            <MyButton className="white-btn quote">
                Request a quote
            </MyButton>
        </article>
        <article className='request req_template'>
            <img className='req_pictures' src={iPad_pic} alt="iPad" />
            <h2 className='req-head'>
                Need a free dieline template?
            </h2>
            <p className="req-tex-item second-item">
                Let us know what size you need and we'll email an Adobe Illustrator dieline to you within 3-4 business days.
            </p>
            <MyButton className="white-btn dieline">
                Request dieline
            </MyButton>
        </article>
    </div>
  )
}

export default Requests;