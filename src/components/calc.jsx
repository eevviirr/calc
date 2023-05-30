import React, { useState }  from "react";


const Calc = function(props){
    const [nums, setNums] = useState("")
    const [res, setRes] = useState("")
    function calculate(e) {
        setNums(nums + e.target.innerText);
        // console.log(nums, setNums);
    }



    function result() {
        let calcArr = nums.split('');
        let total = calcArr[0];
        for (let i = 0; i < calcArr.length; i++) {
            let operator = calcArr[i];
            let operand = calcArr[i + 1]
            if (operator === "+") {
              total += operand;
            } else if (operator === "-") {
              total -= operand;
            } else if (operator === "*") {
              total *= operand;
            } else if (operator === "/") {
              total /= operand;
            }
            setRes(res + total);
        }


    }
    function clear(params) {
        setRes("");
        setNums("");
    }



    return(
        <div className="circle">
        <div className="calculate">
            <p className="numview">{nums}</p>
            <p className="result">{res}</p>

            <div className="numbers">
                <div className="btn operator e">e</div>
                <div className="btn operator u">u</div>
                <div className="btn operator sin">sin</div>
                <div className="btn operator dog">dog</div>
                <div className="btn operator ac" onClick={clear}>AC</div>
                <div className="btn operator back"></div>
                <div className="btn division" onClick={calculate}>/</div>
                <div className="btn multiplication" onClick={calculate}>*</div>

                <div className="btn seven" onClick={calculate}>7</div>
                <div className="btn eigth" onClick={calculate}>8</div>
                <div className="btn nine" onClick={calculate}>9</div>
                <div className="btn minus" onClick={calculate}>-</div>
                
                <div className="btn four" onClick={calculate}>4</div>
                <div className="btn five" onClick={calculate}>5</div>
                <div className="btn six" onClick={calculate}>6</div>

                <div className="btn one" onClick={calculate}>1</div>
                <div className="btn two" onClick={calculate}>2</div>
                <div className="btn trhee" onClick={calculate}>3</div>
                <div className="btn zero" onClick={calculate}>0</div>

                <div className="btn plus" onClick={calculate}>+</div>
                <div className="btn dot" onClick={calculate}>.</div>
                <div className="btn result operator" onClick={result}>=</div>
            </div>
        </div>
    </div>
    );
};
export default Calc;  