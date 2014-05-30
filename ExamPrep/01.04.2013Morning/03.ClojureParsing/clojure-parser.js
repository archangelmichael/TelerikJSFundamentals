function Solve(args) {
    function replaceWhitespaces(arr) {
        for (var i in arr) {
            while (arr[i].indexOf('  ') !== -1) {
                arr[i] = arr[i].replace('  ', ' ');
            }
        }
        return arr;
    }

    function evaluateFunction(someFunc) {
        var values = someFunc.values;
        var result = parseInt(values[0]);
        switch (someFunc.operation) {
            case '+':
                for (var i = 1; i < values.length; i++) {
                    result += parseInt(values[i]);
                }
                break;
            case '-':
                for (var i = 1; i < values.length; i++) {
                    result -= parseInt(values[i]);
                }
                break;
            case '/':
                for (var i = 1; i < values.length; i++) {
                    result /= parseInt(values[i]);
                }
                break;
            case '*':
                for (var i = 1; i < values.length; i++) {
                    result *= parseInt(values[i]);
                }
                break;
        }
        return result;
    }
    
    function createFunction(name, operation, values) {
        return {
            name: name,
            operation: operation,
            values: values
        }
    }

    function getFuncName(func) {
        var name = '';
        for (var i = 0; i < func.length; i++) {
            if (func[i] !== ' ') {
                name += func[i];
            }
            else {
                break;
            }
        }
        return name;
    }

    function getFuncOperation(func) {
        var openIndex = func.indexOf('(');
        func = func.substr(openIndex + 1).trim();
        return func[0];
    }

    function hasNAN(check) {
        for (var i = 1; i < check.values.length; i++) {
            if ( check.operation === '/' && (check.values[i] === '0' || check.values[i] === 0)) {
                return true;
            }
        }
        return false;
    }
    

    var commands = [];
    for (var i = 0; i < args.length; i++) {
        commands[i] = args[i].trim();
    }
    commands = replaceWhitespaces(commands);
    
    var funcName = '';
    var funcOperation = '=';
    var funcValues = [];
    var functions = [];

    for (var i = 0; i < commands.length; i++) {
        var defIndex = commands[i].indexOf('def');
        var func = '';
        // Check if we define a new function
        if( defIndex !== -1 ) {
            func = commands[i].substr(defIndex + 3);
        }
        else {
            func = commands[i];
        }
        func = func.trim();

        // Get function name
        var openIndex = func.indexOf('(');
        if (openIndex !== 0) {
            funcName = getFuncName(func);
        }

        // Get function operator
        func = func.substr(funcName.length).trim();
        var openIndex = func.indexOf('(');
        if (openIndex !== -1) {
            funcOperation = getFuncOperation(func);
            func = func.substr(func.indexOf(funcOperation) +  1);
        }
        func = func.trim();
        

        // Get function values
        var closeIndex = func.indexOf(')');
        func = func.substring(0, closeIndex).trim();
        funcValues = func.split(' ');

        //Create Function Object
        functions[i] = createFunction(funcName, funcOperation, funcValues);
        var funcName = '';
        var funcOperation = '=';
        var funcValues = [];
    }


    var evaluatedFunctions = [];
    //for (var i = 0; i < functions.length; i++) {
    //    var value = evaluateFunction(functions[i]);
    //}
    for (var i = 0; i < functions.length; i++) {
        for (var j  = 0; j < functions[i].values.length; j++)
            for (var k = 0; k < functions.length; k++) {
                if (functions[i].operation === '/' && hasNAN(functions[i])) {
                    i++;
                    return 'Division by zero! At Line:' + i;
                }
                if (functions[i].values[j] === functions[k].name)
                    functions[i].values[j] = evaluateFunction(functions[k]);
                 	//evaluatedFunctions[i] = evaluateFunction(functions[k]); 
                 }
    }
    
    return Math.floor(evaluateFunction(functions[functions.length - 1]));
    
}

var test1 = [
'  (   def    func 10    )',
'  (def    newFunc (+    func 2))',
'(    def sumFunc (  + func func newFunc 0 0 0))',
'(* sumFunc 2)'];

var test2 = ['(def func (+ 5 2))',
'(def func2 (/  func 5 2 1 0))',
'(def func3 (/ func 2))',
'(+ func3 func)'
]
 
var test3 = ['(def     go6o    (+ -5 -2) )',
'(def pe6o (   /  -15 go6o))',
'(def asD (/ 2 0))',
'(def func2 asD  )',
'(           +        4          2      func2)']

var test4 = ['(/ 5 10)'];
console.log(Solve(test3));
