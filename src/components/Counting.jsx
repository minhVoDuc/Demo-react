import React, { useEffect, useState } from 'react';


function Counting(props) {
    const [value, setValue] = useState(() => 0);
    useEffect(() => {
        console.log("Effect Run");
    }, []);
    return (
        <div>
            <h2>Counting value</h2>
            <button onClick={() => setValue(value+1)}>+</button>
            <button onClick={() => value > 0 ? setValue(value-1) : setValue(0)}>-</button>
            <div>Value = {value}</div>
        </div>
    );
}

export default Counting;