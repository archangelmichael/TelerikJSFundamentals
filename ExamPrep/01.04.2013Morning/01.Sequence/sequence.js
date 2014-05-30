function Solve(args) {
    var stringArr = args;
    stringArr.shift();
    var numbers = convertToNumbers(stringArr);

    var answer = 1;
    var currentNumber = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
        if (currentNumber > numbers[i]) {
            answer++;
        }
        currentNumber = numbers[i];
    }
    return answer;

    function convertToNumbers(params) {
        var numberArr = [];
        for (var index in params) {
            numberArr[index] = parseInt(params[index]);
        }
        return numberArr;
    }
}




var test1 = ['7','1','2','-3','4','4','0','1'];
console.log(Solve(test1));

var test2 = ['6','1','3','-5','8','7','-6'];
console.log(Solve(test2));

var test3 = ['9', '1', '8', '8', '7', '6', '5', '7', '7', '6'];
console.log(Solve(test3));