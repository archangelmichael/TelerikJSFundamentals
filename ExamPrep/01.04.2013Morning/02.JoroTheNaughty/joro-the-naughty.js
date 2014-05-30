function Solve(args) {
    function getJumps(args) {
        args.forEach(function (element, index, array) {
            array[index] = array[index].split(' ');
            array[index] = convertToNumbers(array[index]);
        });
        return args;
    }

    function matrix(rows, cols) {
        value = 1;
        var arr = [];
        for (var i = 0; i < rows; i++) {
            arr.push([]);
            arr[i].push(new Array(cols));
            for (var j = 0; j < cols; j++) {
                arr[i][j] = value;
                value++;
            }
        }

        return arr;
    }

    function convertToNumbers(params) {
        var numberArr = [];
        for (var index in params) {
            numberArr[index] = parseInt(params[index]);
        }
        return numberArr;
    }

    var used = args[0].split(' ');
    used = convertToNumbers(used);
    var startPosition = args[1].split(' ');
    startPosition = convertToNumbers(startPosition);

    // Get Field
    var field = matrix(used[0], used[1]);

    // Get Moves
    var jump = args.splice(2);
    var jumps = getJumps(jump);
    var result = '';

    var row = startPosition[0];
    var col = startPosition[1];

    var score = 0;
    var currentJump = 0;
    var jumpCount = 0;

    while (true) {
        if (row < 0 || col < 0 || row > field.length-1 || col > field[0].length-1) {
            result = 'escaped ' + score;
            break;
        }
        if (field[row][col] === 0) {
            result = 'caught ' + jumpCount;
            break;
        }
        score += field[row][col];
        field[row][col] = 0;
        if (currentJump > jumps.length-1) {
            currentJump = 0;
        }

        row += jumps[currentJump][0];
        col += jumps[currentJump][1];
        currentJump++;
        jumpCount++;
    }

    return result;
}



var zero = ['6 7 3', '0 0', '2 2', '-2 2', '3 -1'];
var test1 = ['500 500 1','0 0','1 1'];
var test2 = ['500 500 3','0 0','1 1','1 2','-1 -3'];
console.log(Solve(test2));