import React, { Component } from 'react';
import './heel.css';
import HPercent from '../heelPercent/heelPercent';

const Heel = (props) => {
    return (
        <div>
            <div onClick={props.handleHeel} className="shoe-container">
                <img className="shoe-img" src="https://i.imgur.com/eYvsBeC.png" alt="heel" />
            </div>
            <HPercent 
                heel={props.heel}
                total={props.total}
            />
        </div>
    )
}
export default Heel;
