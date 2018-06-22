import React, { Component } from 'react';
import './heelPercent.css';

const HPercent = (props) => {
    return (
        <div className="heel-percent">
            <h3 className="h-percent">{ !props.total ? 0 : Math.round(props.heel / props.total * 100) }%</h3>
        </div>
    )
}
export default HPercent;
