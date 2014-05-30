function solve(args) {
    var sizes = args[0].split(' '),
        rows = parseInt(sizes[0]),
        cols = parseInt(sizes[1]),
        startPosition = args[1].split(' ');
        row = parseInt(startPosition[0]),
        col = parseInt(startPosition[1]);
        lab = args.slice(2),
        visited = {},
        sum = 0,
        count = 0,
        directions = {
            u: {
                row: -1,
                col: 0
            },
            d: {
                row: 1,
                col: 0
            },
            r: {
                row: 0,
                col: 1
            },
            l: {
                row: 0,
                col: -1
            },
        }

    function getValueAt(row, col, cols) {
        return row * cols + col + 1;
    }

    function inRange(value, border) {
        return 0 <= value && value < border;
    }

    while (true) {
        //check if outside
        if (!inRange(row, rows) || !inRange(col,cols)) {
            return 'out ' + sum;
        }
        
        var cellValue = getValueAt(row, col, cols);

        //check if visited
        if (visited[cellValue]) {
            return 'lost ' + count;
        }

        
        sum += cellValue;
        count += 1;
        visited[cellValue] = true;

        var dir = lab[row][col];
        row += directions[dir].row;
        col += directions[dir].col;
        
    }
    
}

test1 = [
 "3 4",
 "1 3",
 "lrrd",
 "dlll",
 "rddd"];

test2 = [
 "5 8",
 "0 0",
 "rrrrrrrd",
 "rludulrd",
 "durlddud",
 "urrrldud",
 "ulllllll"]

test3 = [
 "5 8",
 "0 0",
 "rrrrrrrd",
 "rludulrd",
 "lurlddud",
 "urrrldud",
 "ulllllll"]

console.log(solve(test1));
console.log(solve(test2));
console.log(solve(test3));