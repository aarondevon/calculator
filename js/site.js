const display = document.querySelector('#display');
let firstOperand = '';
let operator = null;
let secondOperand = '';


document.querySelectorAll(".number").forEach(numberButton => {
  numberButton.addEventListener("click", event => {
    const currentNumber = event.target.textContent;

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

const symbolsContainer = document.querySelector('#symbols-container');
symbolsContainer.addEventListener('click', (event) => {
  const currentOperation = event.target.id;

  if (!operator) {
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



document.querySelector(".equals").addEventListener("click", () => {
  if (firstOperand && operator && secondOperand) {
    const result = calculate();
    firstOperand = result;
    operator = null;
    secondOperand = '';
    display.value = result;
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

