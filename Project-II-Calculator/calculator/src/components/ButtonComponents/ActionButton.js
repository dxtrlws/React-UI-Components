import React from 'react';
import './Button.css';

function ActionButton(props) {
    return (
        <button className = 'operator'>{props.operator}</button>
    )
}

export default ActionButton