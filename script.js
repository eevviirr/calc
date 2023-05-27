'use strict';

let numView = document.querySelector('.numview');
let result = document.querySelector('.result');

document.querySelector('.numbers').addEventListener('click', function (e) {
    if (e.target.textContent != 'e' && e.target.textContent != 'u' && e.target.textContent != 'sin' && e.target.textContent != 'dog' && e.target.textContent != 'AC' && e.target.textContent != '=') {
        numView.textContent += e.target.textContent;
    }



    if (e.target.textContent == 'AC') {
        numView.textContent = '';
        result.textContent = '';
    }    
    

    let calc = numView.textContent.split('');
    let total = calc[0];
    for (let i = 0; i < calc.length; i++) {
        let operator = calc[i];
        let operand = calc[i + 1]
        if (operator === "+") {
          total += operand;
        } else if (operator === "-") {
          total -= operand;
        } else if (operator === "*") {
          total *= operand;
        } else if (operator === "/") {
          total /= operand;
        }

    }
    if(e.target.textContent == '=' && numView.textContent != ''){
        result.textContent = total.toString();
    }
})
    
