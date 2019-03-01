import React from 'react';
import './Header.css';

import HeaderTitle from './HeaderTitle'

function HeaderContent(props){
    return(
        <div className="twitter-content">
            <HeaderTitle name={props.name} handle={props.handle}/>
            <p>Let's Learn React by building simple interfaces with components. Don't try to overthink it. just keep it simple and fun and have fun. Once you feel comfortable using components you are well on your way to mastering React!</p>
        </div>
    )
}

export default HeaderContent