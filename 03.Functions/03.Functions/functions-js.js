//Task 1
function getLastDigitName() {
    var input = document.getElementById('lastDigitOfNumber').value;
    if (input < 0) {
        input *= -1;
    }
    printElement(getName(input), 'lastDigit');
}

function getName(number) {
    switch (number % 10) {
        case 0: return "zero";
        case 1: return "one";
        case 2: return "two";
        case 3: return "three";
        case 4: return "four";
        case 5: return "five";
        case 6: return "six";
        case 7: return "seven";
        case 8: return "eight";
        case 9: return "nine";
        default: return "Invalid input!";
    }
}

//Task 2
function reverseNumber() {
    var input = document.getElementById('originalNumber').value;
    if (input < 0) {
        input *= -1;
    }
    printElement(reverseDigits(input), 'reversedNumber');
}

function reverseDigits(number) {
    var result = '';
    while (number > 0) {
        result += number % 10;
        number = Math.floor( number / 10 );
    }
    return result;
}

//Task 3
function getWordOccurrences() {
    var choice = document.querySelector('input[name= "choice"]:checked').value;
    var sensitive = (choice === 'On' ? true : false);
    
    var word = document.getElementById('word').value;

    var input = document.getElementById('inputText').value;
    var words = splitTextIntoWords(input);

    var result = getOccurrences(words, word, sensitive);

    printElement(result, 'wordOccurrences');
}

function splitTextIntoWords(text) {
    var newString = text.replace(/\W+/g, ' ');
    return newString.split(' ');
}

function getOccurrences(wordsArr, key, caseSens) {
    var occurrences = 0;
    if (caseSens) {
        for (var i = 0; i < wordsArr.length; i++) {
            if (wordsArr[i] === key) {
                occurrences++;
            }
        }
    }
    else {
        var lower = key.toLowerCase();

        for (var i = 0; i < wordsArr.length; i++) {
            if (wordsArr[i].toLowerCase() === lower) {
                occurrences++;
            }
        }
    }
    return occurrences;
}

//Task 4
function countDivElements() {
    var divs = document.getElementsByTagName('div');
    printElement(divs.length, 'divElementscount');
}

function removeDivElement() {
    var tag = document.getElementById('divContainer');
    if (tag.getElementsByTagName('div').length > 0) {
        tag.removeChild(tag.firstChild);
    }
}

function addDivElement() {
    var tag = document.getElementById('divContainer');
    var newDiv = document.createElement('div');
    newDiv.innerHTML = '<h1> Here is your new div element! </h1>';
    tag.appendChild(newDiv);
}

//Task 5
function getNumberOccurrences() {
    var input = document.getElementById('arrayOfNumbers').value;
    var stringArr = input.split(/(?:,| |:)+/);
    var numbersArr = convertToNumberArr(stringArr);

    var number = parseInt(document.getElementById('enteredNumber').value);

    printElement(countNumberOccurrences(numbersArr, number), 'numberOccurrences');
}

function testGetNumOccur() {
    var testArr = [4, 34, 43, 2, 9, 4, 9, -56, 4, 17, 34, 4, 2, 11, 9];
    if (countNumberOccurrences(testArr,4) === 4 && 
            countNumberOccurrences(testArr,9) === 3 &&
            countNumberOccurrences(testArr,34) === 2 &&
            countNumberOccurrences(testArr,2) === 2 &&
            countNumberOccurrences(testArr,-56) === 1 ) {
        printElement(' Correct! ', 'testResult');
    }
    else {
        printElement(' Incorrect! ', 'testResult');
    }
}

function countNumberOccurrences(arr, num) {
    var answer = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            answer++;
        }
    }
    return answer;
}

//Task 6
function checkPositionNeighbours() {
    var input = document.getElementById('givenArray').value;
    var stringArr = input.split(/(?:,| |:)+/);
    var numbersArr = convertToNumberArr(stringArr);

    var position = parseInt(document.getElementById('atPosition').value);
    if (position < 0 || position > numbersArr.length - 1) {
        printElement('Invalid element position!', 'biggerElement');
        return;
    }
    else if (position === 0 || position === numbersArr.length - 1) {
        printElement('Element has only one neighbour!', 'biggerElement');
        return;
    }
    
    var isBigger = checkNeighbours(numbersArr, position);
    if (isBigger) {
        printElement('Element is bigger than its neighbours!', 'biggerElement');
    }
    else {
        printElement('Element is NOT bigger than its neighbours!', 'biggerElement');
    }
}

function checkNeighbours(arr, index) {
    if (index < 1 || index > arr.length - 2) {
        return false;
    }

    if (arr[index] > arr[index+1] && arr[index] > arr [index-1]) {
        return true;
    }
    else {
        return false;
    }
}

//Task 7
function findFirstBiggerElement() {
    var input = document.getElementById('inputArray').value;
    var stringArr = input.split(/(?:,| |:)+/);
    var numbersArr = convertToNumberArr(stringArr);

    for (var i = 1; i < numbersArr.length - 1; i++) {
        if (checkNeighbours(numbersArr, i)) {
            printElement(numbersArr[i], 'firstBiggerNumber');
            return;
        }
    }

    printElement('-1', 'firstBiggerNumber');
}

// Additional functions
function printElement(value, elementId) {
    console.log(value);
    document.getElementById(elementId).innerHTML = value;
}

function printArr(array, writeTo) {
    console.log(array.join(', '));
    document.getElementById(writeTo).innerHTML = array.join(', ');
}

function convertToNumberArr(array) {
    var converted = [];
    for (var i = 0; i < array.length; i++) {
        converted[i] = parseInt(array[i]);
    }
    return converted;
}