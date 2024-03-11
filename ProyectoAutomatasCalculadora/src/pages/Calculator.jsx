import React, { useState } from 'react';
import "../assets/style/Calculator.css";

function Calculator() {
    const [input, setInput] = useState("");

    const handleClick = (e) => {
        setInput(input + e.target.name);
    }

    const calculate = () => {
        try {
            setInput(eval(input).toString());
        } catch {
            setInput("Error");
        }
    }

    const clear = () => {
        setInput("");
    }

    return ( 
        <>
            <div class="container">
                <div id="cal-body">
                    <div className="input">
                        <input type="text" value={input} />
                    </div>
                    <div style={{paddingTop: '3rem'}}>
                        <div className="buttons">
                            <button name="1" onClick={handleClick}>1</button>
                            <button name="2" onClick={handleClick}>2</button>
                            <button name="3" onClick={handleClick}>3</button>
                            <button name="+" onClick={handleClick}>+</button>
                        </div>
                        <div className="buttons">
                            <button name="4" onClick={handleClick}>4</button>
                            <button name="5" onClick={handleClick}>5</button>
                            <button name="6" onClick={handleClick}>6</button>
                            <button name="-" onClick={handleClick}>-</button>
                        </div>
                        <div className="buttons">
                            <button name="7" onClick={handleClick}>7</button>
                            <button name="8" onClick={handleClick}>8</button>
                            <button name="9" onClick={handleClick}>9</button>
                            <button name="*" onClick={handleClick}>*</button>
                        </div>
                        <div className="buttons">
                            <button name="." onClick={handleClick}>.</button>
                            <button name="0" onClick={handleClick}>0</button>
                            <button name="(" onClick={handleClick}>(</button>
                            <button name=")" onClick={handleClick}>)</button>
                        </div>
                        <div className="buttons">
                            <button onClick={clear}>CL</button>
                            <button style={{ width: "18rem"}} onClick={calculate}>=</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Calculator;