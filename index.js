function checkEvenOrOdd(value) {
    return value % 2 === 0;
}

// Solution without Recursion - This is more efficient.
function fibonacciSeries(value) {
    if (parseInt(value) < 0 || value === "") {
        return ["Please enter a positive integer."]
    } else if (parseInt(value) === 0) {
        return [0];
    } else if (parseInt(value) === 1) {
        return [1];
    } else {
        let fibonacciNumbers = [0, 1];
        for (let i = 2; i < value; i++) {
            fibonacciNumbers.push(fibonacciNumbers[fibonacciNumbers.length - 1] + fibonacciNumbers[fibonacciNumbers.length - 2]);
        }
        return fibonacciNumbers;
    }
}

function filterOddEven(array) {
    let evenNumbers = [], oddNumbers = [];
    array.forEach((value) => {
        checkEvenOrOdd(value) ? evenNumbers.push(value) : oddNumbers.push(value);
    });
    return {evenNumbers, oddNumbers};
}

// Handling User Events
const oddEvenCheck = document.querySelector('#odd-even-check');
const fibonacci = document.querySelector('#fibonacci');
const oddEvenFilter = document.querySelector('#filter-odd-even');
const oddEvenCheckSubmitBtn = document.querySelector('.odd-even-check');
const fibonacciSubmitBtn = document.querySelector('.fibonacci');
const oddEvenFilterSubmitBtn = document.querySelector('.filter-odd-even');
const fibbTable = document.querySelector('.fibb-table');
const result1 = document.querySelector('.result1');
const result2 = document.querySelector('.result2');
const result3 = document.querySelector('.result3');


oddEvenCheckSubmitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const userInput = oddEvenCheck.value;
    if (userInput === "") {
        result1.innerHTML = "Please enter a number..";
    } else {
        const result = checkEvenOrOdd(parseInt(userInput));
        result1.innerHTML = result ? "The given number is <b>Even<b>." : "The given number is <b>Odd<b>.";
    }
});

fibonacciSubmitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    // Removing previous nodes
    while (fibbTable.firstChild) {
        fibbTable.removeChild(fibbTable.firstChild);
    }

    const result = fibonacciSeries(fibonacci.value);
    result.forEach((value) => {
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        fibbTable.appendChild(tr);
        tr.appendChild(td);
        td.innerHTML += value;
    });
});

oddEvenFilterSubmitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const userInput = oddEvenFilter.value.split(' ');
    const { evenNumbers, oddNumbers } = filterOddEven(userInput);
    result2.innerHTML = evenNumbers;
    result3.innerHTML = oddNumbers;
});




