function printElement(value, elementId) {
    console.log(value);
    document.getElementById(elementId).innerHTML = value;
}

function printArr(array, writeTo) {
    console.log(array.join(', '));
    document.getElementById(writeTo).innerHTML = array.join(', ');
}

// Task 1
function getArray() {
    var arr = Array(20);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = i * 5;
    }
    
    printArr(arr, "arrayMultipliedBy5");
}

// Arrays can be split in several ways. For example: split(new RegExp('[-+()*/:? ]', 'g'));​​​​​​​​​​​​​​​​​ I made it split by ' ', ',' and ':' with .split(/(?:,| |:)+/).
//Task 2
function compareArraysLexicographically( array1, array2) {
    var input1 = document.getElementById('charArray1').value;
    var arr1 = input1.split(/(?:,| |:)+/)
    var input2 = document.getElementById('charArray2').value;
    var arr2 = input2.split(/(?:,| |:)+/)

    var maxLength = arr1.length;
    if (maxLength > arr2.length) {
        maxLength = arr2.length;
    }

    var result = '';

    for (var i = 0; i < maxLength; i++) {
        result += arr1[i] + " ";
        if (arr1[i] < arr2[i]) {
            result += " > ";
        }
        else if (arr1[i] > arr2[i]) {
            result += " < ";
        }
        else {
            result += " = ";
        }
        result += arr2[i] +'; ';
    }
    printElement(result, 'biggerArrayResult');
}

//Task 3
function getSequence() {
    var input = document.getElementById('enteredArray').value;
    var arr = input.split(/(?:,| |:)+/)

    var maxLength = 0;
    var element = arr[0];
    var currentL = 1;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i - 1] === arr[i]) {
            currentL++;
        }
        else {
            if (currentL > maxLength) {
                maxLength = currentL;
                currentL = 1;
                element = arr[i - 1];
            }
        }
    }
    if (currentL > maxLength) {
        maxLength = currentL;
        element = arr[arr.length - 1];
    }

    var result = [];
    for (var i = 0; i < maxLength; i++) {
        result.push(element);
    };
    
    printArr(result, 'sequenceOfEqualElements');
}

//Task 4
function findMaxIncreasingSequence() {
    var input = document.getElementById('entered').value;
    var arr = input.split(/(?:,| |:)+/)

    var maxLength = 0;
    var elements = [];
    var currentElements = [arr[0]];
    var currentL = 1;

    for (var i = 1; i < arr.length; i++) {
        if (parseInt(arr[i - 1]) <= parseInt(arr[i])) {
            currentElements.push(arr[i]);
        }
        else {
            if (currentElements.length > elements.length) {
                elements = currentElements;
                currentElements = [arr[i]];
            }
        }
    }
    if (currentElements.length > elements.length) {
        elements = currentElements;
    }

    printArr(elements, 'increasingSequence');
}

//Task 5
function sortArray() {
    var input = document.getElementById('enteredElements').value;
    var arrayToBeSorted = input.split(/(?:,| |:)+/)

    var sortedArr = selectionSort(arrayToBeSorted);
    printArr(sortedArr, 'sordedArray');
}

function selectionSort(unsortedArray) {
    var sortedArray = [];
    var min_index, index;

    while (unsortedArray.length) {
        index = 0;
        min_index = 0;
        // find the minimum value in an array
        while (index < unsortedArray.length) {
            if (parseInt(unsortedArray[min_index], 10) > parseInt(unsortedArray[index], 10)) {
                min_index = index;
            }
            index++;
        }
        sortedArray.push(unsortedArray.splice(min_index, 1));
    }
    return sortedArray;
}

//Task 6
function findMostFrequentNumber() {
    var input = document.getElementById('numbersArray').value;
    var arr = input.split(/(?:,| |:)+/)

    var index = 0;
    var times = 1;
    var currentTimes = 1;

    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                currentTimes++;
            }
        }
        if (currentTimes > times) {
            times = currentTimes;
            index = i;
        }
        currentTimes = 0;
    }
    // Output
    printElement('Most frequent number is: '+ arr[index] + ' (' + times + ' times)', 'mostFrequentNumber');
}

//Task 7
function searchElement() {
    var input = document.getElementById('unsortedArray').value;
    var arrayToBeSorted = input.split(/(?:,| |:)+/)
    var sortedArr = selectionSort(arrayToBeSorted);
    var numbersArr = convertToNumberArr(sortedArr);

    var key = parseInt(document.getElementById('searchedElement').value);
    
    var result = binarySearch(numbersArr, key, 0, numbersArr.length - 1);
    printElement(result, 'indexOfElement');
}

function convertToNumberArr(array) {
    var converted = [];
    for (var i = 0; i < array.length; i++) {
        converted[i] = parseInt(array[i]);
    }
    return converted;
}

function binarySearch(values, target, start, end) {
    if (start > end) {
        return -1; 
    } //does not exist
    var middle =  Math.floor ((start + end) / 2) ;
    var value = values[middle];
    if (value > target) { 
        return binarySearch (values, target, start, middle-1); 
    }
    if (value < target) { 
        return binarySearch (values, target, middle+1, end); 
    }
    return middle; //found!
}