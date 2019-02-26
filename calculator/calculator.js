function add (num1, num2) {
  return num1 + num2
}

function subtract (num1, num2) {
  return num1 - num2
}

function sum (numArray) {
  if (numArray.length) {
    return numArray.reduce((totalValue, currentValue) => totalValue + currentValue)
  }
  return 0
}

function multiply (numArray) {
	if (numArray.length) {
		return numArray.reduce((totalValue, currentValue) => totalValue * currentValue)
	}
	return 0
}

function power (num1, num2) {
	return num1 ** num2
}

function factorial(num) {
	let total = 1
	for (num; num > 0; num--) {
		total *= num
	}
	return total
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
