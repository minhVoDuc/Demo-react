import React from 'react';
import logo from '../logo-light.png';
import Title from './Title';
import '../App.css';

const data = [
    {
        id: 0,
        title: 'Title 0',
        color: 'black'
    },
    {
        id: 1,
        title: 'Title 1',
        color: 'blue'
    },
]

function Content(props) {
    return (
        <div>
            <Title name="This is title 1" colorId="red"/>
            <img src={logo} className="App-logo" alt="logo" 
                onClick={() => alert('This is HPCC!')} style={{"pointer-events": "all"}} ></img>
            {data.map((item) =>
                <Title name={item.title} colorId={item.color}/>
            )}
        </div>
    );
}

export default Content;