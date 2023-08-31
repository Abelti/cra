import React, { useState } from 'react';

//state define => hook => useState hook
//initial value => 0 [CAN NOT NULL]
//change

export default function Counter(e) {
    const [count, setCount] = useState(0);
    let [color, setColor] = useState('red');
    function change(){
        const myColors = ['black','yellow', 'green', 'pink', 'white']
        let rand = (Math.floor(Math.random() * myColors.length));
        console.log(rand)
        console.log(myColors[rand])
        setColor(myColors[rand]);
    }
    return(
        <>
            <h1 style={{color: color}}>You clicked {count} times</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={change}> COLOR </button>
        </>
    );
};