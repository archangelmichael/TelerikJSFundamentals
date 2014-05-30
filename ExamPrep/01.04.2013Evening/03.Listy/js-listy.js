function solve(inputArr) {
	var returnString = "",
		definedFunctions = {};
	for (var i = 0; i < inputArr.length; i++) {
		var firstRE = new RegExp(",", "g");
		inputArr[i] = inputArr[i].replace(firstRE, " , ");
		firstRE = new RegExp("\\[", "g");
		inputArr[i] = inputArr[i].replace(firstRE, "[ ");
		firstRE = new RegExp("\\]", "g");
		inputArr[i] = inputArr[i].replace(firstRE, " ]");
		for (var key in definedFunctions) {
			var re = new RegExp(" " + key + " ", "g");
			inputArr[i] = inputArr[i].replace(re, " " + definedFunctions[key] + " ");
			inputArr[i] = inputArr[i].replace(re, " " + definedFunctions[key] + " ");
		}

		var splittedFunction = inputArr[i].split('['),
		 funcProps = getFunctionProps(splittedFunction[0]);

		if (inputArr[i].indexOf("def ") !== -1) {
			definedFunctions[funcProps.funcName] = getFunctionValue(funcProps.funcOperation, splittedFunction[1]);
		}
		if (i === inputArr.length - 1) {
			returnString = getFunctionValue(funcProps.funcOperation, splittedFunction[1]);
		}
	}

	return returnString;
}

function getFunctionProps(functionString) {
	var splittedFunctionString = functionString.split(' '),
		returnObject = { funcName: "", funcOperation: "none" };
	for (var i = splittedFunctionString.length - 1; i >= 0 ; i--) {
		if (splittedFunctionString[i] === "sum" ||
			splittedFunctionString[i] === "avg" ||
			splittedFunctionString[i] === "min" ||
			splittedFunctionString[i] === "max") {
			returnObject.funcOperation = splittedFunctionString[i];
		}
		if (isNaN(splittedFunctionString[i]) &&
			splittedFunctionString[i] !== "def" &&
			splittedFunctionString[i] !== returnObject.funcOperation &&
			splittedFunctionString[i].length > 0) {
			returnObject.funcName = splittedFunctionString[i];
		}
	}

	return returnObject;
}

function getFunctionValue(functionOperation, functionString) {
	var newString = functionString.split(']');
	if (functionOperation === "none") {
		return newString[0].trim();
	} else {
		var splittedFunctionString = newString[0].split(','),
			result = (functionOperation === 'min') ? Number.MAX_VALUE : 0,
			count = 0,
			number;
		for (var i = 0; i < splittedFunctionString.length; i++) {
			var numberString = splittedFunctionString[i].trim();
			if (!isNaN(numberString) && numberString.length > 0) {
				number = parseInt(numberString);
				count++;
				if (functionOperation === 'sum' || functionOperation === 'avg') {
					result = result + number;
				} else if (functionOperation === 'max') {
					if (number > Number.MIN_VALUE && number > result) {
						result = number;
					}
				} else if (functionOperation === 'min') {
					if (number < result) {
						result = number;
					}
				}
			}
		}
		if (functionOperation === 'avg') {
			return parseInt(result / count);
		}
		return result;
	}

}

var test1 =  ['def func sum[5, 3, 7, 2, 6, 3]',
					'def func2 [5, 3, 7, 2, 6, 3]',
					'def func3 min[func2]',
					'def func4 max[5, 3, 7, 2, 6, 3]',
					'def func5 avg[5, 3, 7, 2, 6, 3]',
					'def func6 sum[func2, func3, func4 ]',
					'sum[func6, func4]']
//42
var test2 = ['def func sum[1, 2, 3, -6]',
					'def newList [func, 10, 1]',
					'def newFunc sum[func, 100, newList]',
					'[newFunc]']
//111
	