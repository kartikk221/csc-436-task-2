import { add, multiply } from './math';

const eventHandler = () => {
    const addButton = document.getElementById('add');
    const multiplyButton = document.getElementById('multiply');
    const resultType = document.getElementById('result-type');

    const number1 = document.getElementById('number-1');
    const number2 = document.getElementById('number-2');
    const result = document.getElementById('result');

    const checkNumberInputs = () => {
        let message;
        if (number1.value == '' || isNaN(+number1.value)) message = 'Please enter a valid first number';
        if (!message && (number2.value == '' || isNaN(+number2.value))) message = 'Please enter a valid second number';
        if (message) {
            result.innerHTML = '';
            resultType.innerText = message;
            return false;
        } else {
            return true;
        }
    };

    const updateDomWithAddedNumbers = () => {
        if (checkNumberInputs()) {
            resultType.innerText = 'Addition Result:';
            result.innerHTML = add(number1.value, number2.value);
        }
    };

    const updateDomWithMultipliedNumbers = () => {
        if (checkNumberInputs()) {
            resultType.innerText = 'Multiplication Result:';
            result.innerHTML = multiply(number1.value, number2.value);
        }
    };

    addButton.addEventListener('click', updateDomWithAddedNumbers);
    multiplyButton.addEventListener('click', updateDomWithMultipliedNumbers);
};

export { eventHandler };
