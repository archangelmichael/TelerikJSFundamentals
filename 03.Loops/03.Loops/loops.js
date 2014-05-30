function printElement(value, elementId) {
    console.log(value);
    document.getElementById(elementId).innerHTML = value;
}

function printArr(array, writeTo) {
    console.log(array.join(', '));
    document.getElementById(writeTo).innerHTML = array.join(', ');
}

//Task 1
function printNumbers() {
    var n = document.getElementById('numberN').value;
    var numbers = [n];
    for (var i = 1; i <= n; i+=1) {
        numbers[i - 1] = i;
    }
    printArr(numbers, 'numbersFrom1ToN');
}

//Task 2
function printNumbersNotDivisibleBy5And7() {
    var n = document.getElementById('enteredN').value;
    var arr = [n];
    var counter = 0;
    for (var i = 1; i <= n; i += 1) {
        if (i % 35 != 0) {
            arr[counter] = i;
            counter++;
        }
    }
    printArr(arr, 'numbersPrinted');
}

//Task 3
function findMinAndMax() {
    var input = document.getElementById('numbers').value;
    var numbers = input.split(/[ ,;]/);
    // use regex to add all possible delimiter types
    numbers = numbers.filter(Number);
    var max = findMax(numbers);
    var min = findMin(numbers);
    printElement('Max: ' + max + ' Min: ' + min, 'minAndMaxNumber');
}

function findMax(array) {
    var maxNumber = array[0];
    for (key in array) {
        if (array[key] > maxNumber) {
            maxNumber = array[key];
        }
    }
    return maxNumber;
}

function findMin(array) {
    var minNumber = array[0];
    for (key in array) {
        if (array[key] < minNumber) {
            minNumber = array[key];
        }
    }
    return minNumber;
}

//Task 4
function findProperties() {
    var choice = document.querySelector('input[name= "choose"]:checked').value;
    var typeOfChoice = document;
    if (choice === 'window') {
        typeOfChoice = window;
    }
    if (choice === 'navigator' ) {
        typeOfChoice = navigator;
    }

    var properties = [];
    for (prop in typeOfChoice) {
        properties.push(prop);
    }

    var max = findMax(properties);
    var min = findMin(properties);
    printElement('Max: ' + max + ' Min: ' + min, 'properties');
}