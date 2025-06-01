function twoNumbers() {
    let firstNumber = prompt("First number:");
    let secondNumber = prompt("Second number:");

    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);

    if (isNaN(firstNumber, secondNumber)) {
        alert("Помилка!");
        return;
    }

    let operation = prompt("Operation");

    let result = Calculate(firstNumber, secondNumber, operation)

    console.log(result);
}

function Calculate(first, second, operation) {
    let result = 0;
    switch (operation) {
        case '+':
        result = first + second;
        break;
        case '-':
        result = first - second;
        break;
        case '*':
        result = first * second;
        break;
        case '/':
            if (second == 0) {
                alert("Помилка!");
                result = "Помилка";
            }
        else {
            result = first / second;
        }
        break;
        default:
            alert("Помилка!");
            result = "Помилка";
        break;
    }

    return result;
}