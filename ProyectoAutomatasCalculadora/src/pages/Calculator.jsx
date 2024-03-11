import React from 'react';
import "../assets/style/Calculator.css";

function Calculator() {
    return ( 
        <>
            <div class="container">
                <div id="cal-body">
                    <div className="input">
                        <input type="text"/>
                    </div>
                    <div style={{paddingTop: '3rem'}}>
                        <div className="buttons">
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>+</button>
                        </div>
                        <div className="buttons">
                            <button>4</button>
                            <button>5</button>
                            <button>6</button>
                            <button>-</button>
                        </div>
                        <div className="buttons">
                            <button>7</button>
                            <button>8</button>
                            <button>9</button>
                            <button>*</button>
                        </div>
                        <div className="buttons">
                            <button>.</button>
                            <button>0</button>
                            <button>(</button>
                            <button>)</button>
                        </div>
                        <div className="buttons">
                            <button>CL</button>
                            <button style={{ width: "18rem"}}>=</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Calculator;