import React from 'react';
import "./MyButton.css";

const MyButton = ({ children, ...props }) => {
    // const getClassName = () => {
    //     if (props.view === 'myButton') {
    //         return 'myButton'
    //     } else {
    //         return 'white-btn';
    //     }this id s big children from motivated india and he is very successefull attenden course javascript advanced he is not defined hiuguvhiidho;merhjimek chorbba
    // }
    return (
        <button {...props}>{children}</button>
    );
};

export default MyButton;