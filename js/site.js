const display = document.querySelector('#display');
let firstOperand = '';
let operator = null;
let secondOperand = '';
let isEquals = false;

document.querySelectorAll(".number").forEach(numberButton => {
  numberButton.addEventListener("click", event => {
    const currentNumber = event.target.textContent;

    if(firstOperand && !operator && isEquals) {
      firstOperand = '';
      isEquals = false;
    }

    if (!operator) {
      firstOperand += currentNumber;
      display.value = firstOperand;
    }

    if (firstOperand && operator) {
      secondOperand += currentNumber;
      display.value = secondOperand;
    }
  })
})

document.querySelectorAll('.math-symbol').forEach(symbolButton => {
  symbolButton.addEventListener('click', (event) => {
    const currentOperation = event.target.id;

    if (!secondOperand) {
      operator = currentOperation;
    }

    if (firstOperand && operator && secondOperand) {
      const result = calculate();
      firstOperand = result;
      operator = currentOperation;
      secondOperand = '';
      display.value = result;
    }

  })
});


const isEmptyOperand = (operand) => {
  return operand === '';
};

const doesDecimalExist = (operand) => {
  return operand.includes('.');
};

document.querySelector('.decimal').addEventListener('click', () => {
  if(!operator) {
    display.value = isEmptyOperand(firstOperand) ? firstOperand = '0.' : firstOperand;
    display.value = doesDecimalExist(firstOperand) ? firstOperand : firstOperand += '.';
  }

  if (firstOperand && operator) {
    display.value = isEmptyOperand(secondOperand) ? secondOperand = '0.' : secondOperand;
    display.value = doesDecimalExist(secondOperand) ? secondOperand : secondOperand += '.';
  }
})

const reset = (result) => {
  firstOperand = result;
  operator = null;
  secondOperand = '';
  display.value = result;
  isEquals = true;
}
document.querySelector(".equals").addEventListener("click", () => {
  if (firstOperand && operator && secondOperand) {
    const result = calculate();
    reset(result);
  }

  if (firstOperand && operator) {
    secondOperand = firstOperand;
    const result = calculate();
    reset(result);
  }
})

const calculate = () => {
  switch (operator) {
    case "division":
      return `${Number(firstOperand) / Number(secondOperand)}`;
    case "multiplication":
      return `${Number(firstOperand) * Number(secondOperand)}`;
    case "subtraction":
      return `${Number(firstOperand) - Number(secondOperand)}`;
    case "addition":
      return `${Number(firstOperand) + Number(secondOperand)}`;
  }
}

document.querySelector('#clear').addEventListener('click', () => {
  firstOperand = '';
  operator = null;
  secondOperand = '';
  display.value = '0';
})

