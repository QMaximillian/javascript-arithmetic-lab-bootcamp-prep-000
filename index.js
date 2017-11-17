function add (a, b){
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply (a, b) {
  return a * b
}

function divide (a, b) {
  return a / b
}

function inc(n) {
    return n++
}

function dec(n) {
    return n--
}

function makeInt(n) {
  return parseInt(n, 10)
}

function preserveDecimal(n) {
  return parseFloat(n)
}

add(2, 3)
subtract(2, 3)
multiply(2, 3)
divide(2, 3)
inc (2)
dec(2)
makeInt(2)
preserveDecimal(2.22)
