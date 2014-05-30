function isNumberOddOrEven()
{
    var input = document.getElementById('oddOrEvenInteger').value;
    if (input % 2 === 1) {
        document.getElementById("oodOrEvenResult").innerHTML = 'Number is odd!';
        console.log('Number is odd!');
    }
    else {
        document.getElementById("oodOrEvenResult").innerHTML = 'Number is even!';
        console.log('Number is even!');
    }
}

function isDivisibleBy5And7() {
    var input = document.getElementById('divisibleBy5And7').value;
    if (input % 35 === 0) {
        document.getElementById("divisibleBy5And7Result").innerHTML = 'Number is divisible by 5 and 7 at the same time!';
        console.log('Number is divisible by 5 and 7 at the same time!');
    }
    else {
        document.getElementById("divisibleBy5And7Result").innerHTML = 'Number is NOT divisible by 5 and 7 at the same time!';
        console.log('Number is NOT divisible by 5 and 7 at the same time!');
    }
}

function calculateRectangleArea() {
    var width = document.getElementById('rectangleWidth').value;
    var height = document.getElementById('rectangleHeight').value;
    var rectangleArea = width * height;
    if (rectangleArea < 0) {
        rectangleArea *= -1;
    }

    document.getElementById("rectangleArea").innerHTML = 'Rectangle area is: ' + rectangleArea;
    console.log('Rectangle area is: ' + rectangleArea);
}

function checkThirdDigit() {
    var input = document.getElementById('thirdDigitCheck').value;
    if (input < 0) {
        input *= -1;
    }
    var thirdDigit = ((Math.floor(input / 100) % 10) === 7);
    document.getElementById("thirdDigitCheckResult").innerHTML = thirdDigit;
    console.log(thirdDigit);
}

function checkThirdBit() {
    var input = document.getElementById('thirdBitCheck').value;
    var bitPosition = 3;
    if ((input & (1 << bitPosition)) >> bitPosition === 1) {
        document.getElementById("thirdBitResult").innerHTML = 'Third bit is 1!';
        console.log('Third bit is 1!');
    }
    else {
        document.getElementById("thirdBitResult").innerHTML = 'Third bit is 0!';
        console.log('Third bit is 0!');
    }
}

function isPointInCircle() {
    var xRange = document.getElementById('xRange').value;
    var yRange = document.getElementById('yRange').value;
    var radius = 5;
    if (Math.sqrt(xRange*xRange + yRange*yRange) <= radius ) {
        document.getElementById("isPointWithinCircle").innerHTML = 'Point is in the circle K(0, 5)!';
        console.log('Point is in the circle K(0, 5)!');
    }
    else {
        document.getElementById("isPointWithinCircle").innerHTML = 'Point is outside the circle K(0, 5)!';
        console.log('Point is outside the circle K(0, 5)!');
    }
}

function checkPrimeNumber() {
    var prime = document.getElementById('primeNumber').value;
    var count = 0;
    for (var i = 2; i <= Math.sqrt(prime); i++) {
        if (prime % i === 0) {
            count++;
        }
    }
    if (count === 0) {
        document.getElementById("isNumberPrime").innerHTML = 'Number is prime!';
        console.log('Number is prime!');
    }
    else {
        document.getElementById("isNumberPrime").innerHTML = 'Number is NOT prime!';
        console.log('Number is NOT prime!');
    }
}

function calculateTrapezoidArea() {
    var sideA = parseInt(document.getElementById('SideA').value);
    var sideB = parseInt(document.getElementById('SideB').value);
    var height = document.getElementById('Height').value;
    var trapeziodArea = ((sideA + sideB)) * height / 2;
    if (trapeziodArea < 0) {
        trapeziodArea *= -1;
    }

    document.getElementById("TrapeziodArea").innerHTML = 'Trapezoid area is: ' + trapeziodArea;
    console.log('Trapezoid area is: ' + trapeziodArea);
}

function calculatePointPosition() {
    var rangeX = parseInt(document.getElementById('RangeX').value);
    var rangeY = parseInt(document.getElementById('RangeY').value);

    var withinCircle = false;
    var withinRectangle = false;

    if (Math.sqrt(((rangeX - 1) * (rangeX - 1)) + ((rangeY - 1) * (rangeY - 1))) <= 3) {
        withinCircle = true;
    }

    if ((rangeX >= -1) && (rangeX <= 5) && (rangeY >= -1) && (rangeY <= 1)) {
        withinRectangle = true;
    }

    //There are 4 possible positions of the point
    if (withinRectangle == true && withinCircle == true) {
        document.getElementById("PointPosition").innerHTML = 'Point is within the rectangle and within the circle!';
        console.log('Point is within the rectangle and within the circle!');
    }
    else if (withinRectangle == true && withinCircle == false) {
        document.getElementById("PointPosition").innerHTML = 'Point is within the rectangle and out of the circle!';
        console.log('Point is within the rectangle and out of the circle!');
    }
    else if (withinRectangle == false && withinCircle == true) {
        document.getElementById("PointPosition").innerHTML = 'Point is within the circle and out of the rectangle!';
        console.log('Point is within the circle and out of the rectangle!');
    }
    else {
        document.getElementById("PointPosition").innerHTML = 'Point is out of the rectangle and out of the circle!';
        console.log('Point is out of the rectangle and out of the circle!');
    }
}
