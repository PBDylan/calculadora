let currentInput = "";
let previousInput = "";
let operator = "";

const resultDisplay = document.querySelector(".results");

const updateDisplay = (value) => {
    resultDisplay.textContent = value;
};

const evaluate = (prev, current, op) => {
    prev = parseFloat(prev);
    current = parseFloat(current);
    switch (op) {
        case "+":
            return prev + current;
        case "-":
            return prev - current;
        case "*":
            return prev * current;
        case "/":
            return prev / current;
        default:
            return current;
    }
};

const valores_calculadora = document.querySelectorAll("button");

valores_calculadora.forEach(button => {
    button.addEventListener("click", () => {
        const buttonText = button.textContent;

        if (buttonText >= "0" && buttonText <= "9") {
            currentInput += buttonText;
            updateDisplay(currentInput);
        } else if (buttonText === "+" || buttonText === "-" || buttonText === "*" || buttonText === "/") {
       
            if (previousInput === "") {
                previousInput = currentInput; 
                currentInput = "";             
                operator = buttonText;        
            } else {
                previousInput = evaluate(previousInput, currentInput, operator);
                currentInput = "";
                operator = buttonText;
                updateDisplay(previousInput);
            }
        } else if (buttonText === "=") {
            if (currentInput !== "") {
                previousInput = evaluate(previousInput, currentInput, operator);
                currentInput = "";
                operator = "";
                updateDisplay(previousInput);
            }
        } else if (buttonText === "C") {
            currentInput = "";
            previousInput = "";
            operator = "";
            updateDisplay("0"); 
        }   
    });
});