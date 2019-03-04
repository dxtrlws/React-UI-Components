import React from 'react';
import './Button.css';

function NumberButton (props) {
    let newClass = ''
    if (props.digits === 'clear' || props.digits === 0) {
        newClass = 'clear';
    } else {
        newClass = 'numbers'
    }

    return (
        <button className = {newClass}>{props.digits}</button>
    )
}

export default NumberButton