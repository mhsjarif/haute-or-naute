import React, { Component } from 'react';
import './sandal.css';
import SPercent from '../sandalPercent/sandalPercent';

const Sandal = (props) => {
    return (
        <div>
        <div onClick={props.handleSandal} className="shoe-container">
            <img className="shoe-img" src="https://i.imgur.com/yCFK8gf.png?1" alt="sandal"/>
        </div>
        <SPercent 
            sandal={props.sandal}
            total={props.total}
            />
        </div>
    )
}
export default Sandal;
