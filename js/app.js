const display = document.querySelector('#display');
const keys = document.querySelector('#keys');
const calc = document.querySelector('main')

keys.addEventListener('click', e => {
    if(e.target.matches('button')){
        const key = e.target; 
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.innerText;
        if(!action){
            if (displayedNum === '0' || displayedNum === '-0' || calc.dataset.previousKeyType === 'operator'){
                display.innerText = keyContent;
            } else{
                display.innerText = displayedNum + keyContent;
            }
        } else if(
            action === 'add' ||
            action === 'subtract' ||
            action === 'divide' ||
            action === 'multiply'
        ){
            key.classList.add('operator-click');
            calc.dataset.previousKey = key;
            calc.dataset.previousKeyType = 'operator';
            calc.dataset.firstValue = displayedNum; 
            calc.dataset.operator = action;
        } else if( action === 'point'){
            display.innerText = displayedNum + '.';
            
        } else if(action === 'clear'){
            display.innerText = 0; 
        } else if (action === 'calculate'){
            const firstValue = calc.dataset.firstValue;
            const operator = calc.dataset.operator;
            const secondValue = displayedNum; 
            const operatorKey = calc.dataset.previousKey;

            if (operator === 'add'){
                display.innerText = Number(firstValue) + Number(secondValue);
                key.classList.remove('operator-click');
            }else if (operator === 'subtract'){
                display.innerText = Number(firstValue) - Number(secondValue)
            }else if (operator === 'multiply'){
                display.innerText = Number(firstValue) * Number(secondValue)
            }else if (operator === 'divide'){
                display.innerText = Number(firstValue) / Number(secondValue)
            }
            key.classList.remove('operator-click');
            document.getElementById('divide').classList.remove('operator-click');
            document.getElementById('add').classList.remove('operator-click');
            document.getElementById('multiply').classList.remove('operator-click');
            document.getElementById('subtract').classList.remove('operator-click');
        } else if (action === 'plus-minus'){
           display.innerText = "-" + displayedNum;
        }else if (action === 'percentage'){
            console.log('percentage')
        }
    }

})