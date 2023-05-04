import React from 'react';
import '../App.css';

function Title(props) {
    const {name, colorId} = props;
    return (
        <div style={{color: colorId}}>{name}</div>
    );
}

export default Title;