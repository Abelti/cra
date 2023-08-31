import React, { useEffect, useState } from 'react';

export default function EffectCount () {
    const [count, setCount] = useState(0);
    let [color, setColor] = useState('red');
    useEffect(() => {
        document.body.style.background = color;;
    }, [color]);
    function change(){
        const myColors = ['black','yellow', 'green', 'pink', 'white']
        let rand = (Math.floor(Math.random() * myColors.length));
        console.log(rand)
        console.log(myColors[rand])
        setColor(myColors[rand]);
    }
    return (
        <>
            <button onClick={change}>Change Color</button>
        </>
    );
}