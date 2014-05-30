// TASK 1
function compareNumbers() {
    var firstNumber = document.getElementById('firstNumber').value;
    var secondNumber = document.getElementById('secondNumber').value;
    if (firstNumber > secondNumber) {
        var exchangeVariable = firstNumber;
        firstNumber = secondNumber;
        secondNumber = exchangeVariable;
        console.log('First number is bigger than the second!');
        console.log('Values Exchanged!');
    }
    else {
        console.log('Second number is bigger than the first!');
    }
    console.log('first number :' + firstNumber);
    console.log('second number :' + secondNumber);
    document.getElementById("numberComparison").innerHTML = ' first number: ' + firstNumber + ' second number: ' + secondNumber;
}

// TASK 2
function showResultSign() {
    var firstNumber = document.getElementById('first').value;
    var secondNumber = document.getElementById('second').value;
    var thirdNumber = document.getElementById('third').value;

    // can be divided into 4 if statements
    if ((firstNumber < 0 && secondNumber < 0 && thirdNumber < 0) ||
            (firstNumber < 0 && secondNumber > 0 && thirdNumber > 0) ||
            (firstNumber > 0 && secondNumber > 0 && thirdNumber < 0) ||
            (firstNumber > 0 && secondNumber < 0 && thirdNumber > 0)) {
        console.log('-');
        document.getElementById("resultSign").innerHTML = '-';
    }
    else {
        console.log('+');
        document.getElementById("resultSign").innerHTML = '+';
    }
}

// TASK 3
function findBiggestNumber() {
    var firstNumber = parseInt(document.getElementById('Number1').value);
    var secondNumber = parseInt(document.getElementById('Number2').value);
    var thirdNumber = parseInt(document.getElementById('Number3').value);

    if (firstNumber >= secondNumber) {
        if (firstNumber >= thirdNumber) {
            console.log(firstNumber);
            document.getElementById("biggestNumber").innerHTML = firstNumber;
        }
        else {
            console.log(thirdNumber);
            document.getElementById("biggestNumber").innerHTML = thirdNumber;
        }
    }
    else {
        if (secondNumber > thirdNumber) {
            console.log(secondNumber);
            document.getElementById("biggestNumber").innerHTML = secondNumber;
        }
        else {
            console.log(thirdNumber);
            document.getElementById("biggestNumber").innerHTML = thirdNumber;
        }
    }
}

// TASK 4
function arrangeNumbers() {
    var firstNumber = parseInt(document.getElementById('Num1').value);
    var secondNumber = parseInt(document.getElementById('Num2').value);
    var thirdNumber = parseInt(document.getElementById('Num3').value);
    var arr = [];
    if (firstNumber >= secondNumber) {
        if (secondNumber >= thirdNumber) {
            arr = [firstNumber,secondNumber,thirdNumber];
        }
        else {
            if (firstNumber >= thirdNumber) {
                arr = [firstNumber, thirdNumber, secondNumber];
            }
            else {
                arr = [thirdNumber, firstNumber, secondNumber];
            }
        }
    }
    else {
        if (firstNumber > thirdNumber) {
            arr = [secondNumber, firstNumber, thirdNumber];
        }
        else {
            if (secondNumber >= thirdNumber) {
                arr = [secondNumber, thirdNumber, firstNumber];
            }
            else {
                arr = [thirdNumber, secondNumber, firstNumber];
            }
        }
    }
    console.log(arr.join(', '));
    document.getElementById("arrangedNumbers").innerHTML = arr.join(', ');
}

// TASK 5
function nameDigit() {
    var digit = document.getElementById('Digit').value;
    switch (digit) {
        case '0':
            console.log('Zero!');
            document.getElementById("DigitName").innerHTML = 'Zero!';
            break;
        case '1':
            console.log('One!');
            document.getElementById("DigitName").innerHTML = 'One!';
            break;
        case '2':
            console.log('Two!');
            document.getElementById("DigitName").innerHTML = 'Two!';
            break;
        case '3':
            console.log('Three!');
            document.getElementById("DigitName").innerHTML = 'Three!';
            break;
        case '4':
            console.log('Four!');
            document.getElementById("DigitName").innerHTML = 'Four!';
            break;
        case '5':
            console.log('Five!');
            document.getElementById("DigitName").innerHTML = 'Five!';
            break;
        case '6':
            console.log('Six!');
            document.getElementById("DigitName").innerHTML = 'Six!';
            break;
        case '7':
            console.log('Seven!');
            document.getElementById("DigitName").innerHTML = 'Seven!';
            break;
        case '8':
            console.log('Eight!');
            document.getElementById("DigitName").innerHTML = 'Eight!';
            break;
        case '9':
            console.log('Nine!');
            document.getElementById("DigitName").innerHTML = 'Nine!';
            break;
        default:
            console.log('Not a valid digit!');
            document.getElementById("DigitName").innerHTML = 'Not a valid digit!';
            break;
    }
}

// TASK 6
function findRoots() {
    var a = parseInt(document.getElementById('CoefficientA').value);;
    var b = parseInt(document.getElementById('CoefficientB').value);;
    var c = parseInt(document.getElementById('CoefficientC').value);;

    var sqrtpart = b * b - 4 * a * c;
    var x, x1, x2, img;
    if (sqrtpart > 0)
    {
        x1 = (-b + Math.sqrt(sqrtpart)) / (2 * a);
        x2 = (-b - Math.sqrt(sqrtpart)) / (2 * a);
        console.log('Two Real Solutions: ' + x1 + ' or ' + x2);
        document.getElementById("roots").innerHTML = 'Two Real Solutions: ' + x1 + ' or ' + x2;
    }
    else if (sqrtpart < 0)
    {
        sqrtpart = -sqrtpart;
        x = -b / (2 * a);
        img = Math.sqrt(sqrtpart) / (2 * a);
        console.log('The Equation Has No Real Solutions!');
        console.log('Two Imaginary Solutions: ' + x + '+' + img + 'i or ' + x + '-' + img + 'i');
        document.getElementById("roots").innerHTML = 'The Equation Has No Real Solutions!';
        document.getElementById("roots").innerHTML += 'Two Imaginary Solutions: ' + x + '+' + img + 'i or ' + x + '-' + img + 'i';
    }
    else
    {
        x = (-b + Math.sqrt(sqrtpart)) / (2 * a);
        console.log("One Real Solution: " + x);
        document.getElementById("roots").innerHTML = 'One Real Solution: ' + x;
    }
}

// TASK 7
function findGreatestVariable() {
    var firstVariable = parseInt(document.getElementById('Variable1').value);
    var secondVariable = parseInt(document.getElementById('Variable2').value);
    var thirdVariable = parseInt(document.getElementById('Variable3').value);
    var fourthVariable = parseInt(document.getElementById('Variable4').value);
    var fifthVariable = parseInt(document.getElementById('Variable5').value);
    var biggestVariable = firstVariable;
    if (biggestVariable < secondVariable)
    {
        biggestVariable = secondVariable;
    }
    if (biggestVariable < thirdVariable)
    {
        biggestVariable = thirdVariable;
    }
    if (biggestVariable < fourthVariable)
    {
        biggestVariable = fourthVariable;
    }
    if (biggestVariable < fifthVariable)
    {
        biggestVariable = fifthNumber;
    }
    console.log("The greatest variable is: " + biggestVariable);
    document.getElementById("GreatestVariable").innerHTML = 'The greatest variable is: ' + biggestVariable;
}

// TASK 8
function convertNumber() {
    var specials = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven",
        "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen",
        "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    var tens = [ "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety" ];

    var numberToConvert = parseInt(document.getElementById('numberToConvert').value);
    if (numberToConvert < 0 || numberToConvert > 999) {
        console.log('This number cant be pronounced!');
        document.getElementById("convertedNumber").innerHTML = 'This number cant be pronounced!';
        return;
    }

    var result;

    if (numberToConvert >= 0 && numberToConvert < 20)
    {
        result = (specials[numberToConvert]);
    }
    else if (numberToConvert > 19 && numberToConvert < 100)
    {
        var firstDigit = numberToConvert % 10;
        var secondDigit = Math.floor(numberToConvert / 10);

        if (firstDigit === 0)
        {
            result = tens[secondDigit - 2];
        }
        else
        {
            result = (tens[secondDigit - 2] + " " + specials[firstDigit]);
        }
    }
    else if (numberToConvert > 99 && numberToConvert < 1000)
    {
        var firstDigit = numberToConvert % 10;
        var lastDigit = Math.floor(numberToConvert / 100);
        var middleDigit = Math.floor(numberToConvert % 100 / 10);
        if (middleDigit === 0 && firstDigit === 0)
        {
            result = (specials[lastDigit] + " Hundred");
        }
        else if (middleDigit === 0 && firstDigit !== 0) {
            result = (specials[lastDigit] + " Hundred" + " and " + specials[firstDigit])
        }
        else if (middleDigit === 1)
        {
            result = (specials[lastDigit] + " Hundred" + " and " + specials[firstDigit + middleDigit * 10]);
        }
        else if (middleDigit > 1 && firstDigit === 0)
        {
            result = (specials[lastDigit] + " Hundred " + tens[middleDigit - 2]);
        }
        else
        {
            result = (specials[lastDigit] + " Hundred " + tens[middleDigit - 2] + " " + specials[firstDigit]);
        }
    }

    console.log(result);
    document.getElementById("convertedNumber").innerHTML = result;
}