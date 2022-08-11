import React from 'react';
import MyButton from '../../components/UI/button/MyButton';
import picture from "../../images/jpg/books.jpg";
import "./Customers.css";

function Customers() {
    return (
        <section className='customers' id='start'>
            <article className='custom-box'>
                <h1>
                    Fast and easy custom boxes your customers will love
                </h1>
                <p className='box-txt'>
                    Fastest turnaround. Best prices instantly. Dieline design help available.
                </p>
                <MyButton className='myButton customers-btn'>
                    start your design
                </MyButton>
                
            </article>
            <img className='pic' src={picture} alt="books" />
            
        </section>
    );
};

export default Customers;