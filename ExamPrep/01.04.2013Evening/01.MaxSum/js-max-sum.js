var test1 = ['8', '1', '6', '-9', '4', '4', '-2', '10', '-1'];
function solve(args) {
    //var numbers = [];
    //for (var i = 1; i < args.length; i+=1) {
    //    numbers.push(parseInt(args[i]));
    //}
    var numbers = args.slice(1).map(Number);
    var bestSum = numbers[0];
    for (var i = 0; i < numbers.length; i+=1) {
        var currentSum = 0;
        for (var j = i; j < numbers.length; j+=1) {
            currentSum += numbers[j];
            if (currentSum > bestSum) {
                bestSum = currentSum;
            }
        }
    }
    return bestSum;
}
console.log(solve(test1));