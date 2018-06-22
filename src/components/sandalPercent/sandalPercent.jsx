import React, { Component } from 'react';
import './sandalPercent.css';

const SPercent = (props) => {
    return (
        <div className="sandal-percent">
            <h3 className="s-percent">{ !props.total ? 0 : Math.round(props.sandal / props.total * 100)}%</h3>
        </div>
    )
}
export default SPercent;
