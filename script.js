'use strict';

let numView = document.querySelector('.numview');
let result = document.querySelector('.result');

document.querySelector('.numbers').addEventListener('click', function (e) {
    if (!e.target.classList.contains('operator')) {
        numView.textContent += e.target.textContent;
    }



    if (e.target.textContent == 'AC') {
        numView.textContent = '';
        result.textContent = '';
    }    
    

    let calcArr = numView.textContent.split('');
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

    }
    if(e.target.textContent == '=' && numView.textContent != ''){
        result.textContent = total.toString();
    }

})
    
