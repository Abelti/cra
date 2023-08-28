import React from 'react'
import './info.css'
function Info(props) {
    return(
        <>
            <label>Name</label>
            <br />
            <br/>
            <input type="text" value={props.name}/>
            <br />
            <br/>
            <label>Father's Name</label>
            <br />
            <br/>
            <input type='text' value={props.fname}/>
            <br />
            <br/>
            <label>Favorite Language</label>
            <br/>
            <br/>
            <select>
                <optgroup>
                    <option value="c">C</option>
                    <option value="cpp">C++</option>
                    <option value="csharp">C#</option>
                    <option value="java">Java</option>
                    <option value="js">JavaScript</option>
                    <option value="py">Python</option>
                    <option value={props.langValue}>{props.lang}</option>
                </optgroup>
            </select>
            <br/><br/>
            <img src={props.source} alt='Test'/>
        </>
    );
}

export default Info;