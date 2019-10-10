module.exports = function multiply(first, second) {
  let exp = first.length + second.length + 1;
  let matrix = [];
  for (let i = 0; i < second.length; i++) {
    let x = [];
    for (let j = 0; j < exp; j++) {
      x.push(0);
    }
    matrix.push(x);
  }
  
  let s = '';
  let digit = 0;
  let number = 0;

  for (let i = 0; i < matrix.length; i++) {
    let step = i + 1;
    digit = 0;
  for (let x = 1;x <= first.length;x++) {
    number = first[first.length - x] * second[second.length -(i + 1)] + digit;
    digit = 0;
    if (number <= 9) {
      matrix[i].splice(matrix[i].length - step, 1, number);
    } else {
      digit = +(number + '').slice(-number.length, -1);
      number = number % 10;
      matrix[i].splice(matrix[i].length - step, 1, number);
    }          
    step += 1;
  }
  if (digit != 0) {matrix[i].splice(matrix[i].length - step, 1, digit);}  
  }
  let matrixSum = [];
  let sum = 0;
  let ras = 0;
  
  for (let i = 0; i < exp; i++) {
    let number;
    sum = 0;
    for (let j = 0; j < matrix.length; j++) {
      sum += matrix[j][exp - (i + 1)];
    }
    sum += ras;
    ras = (sum - sum % 10) / 10;
    number = sum % 10;
    matrixSum.push(number);
  }
  let string = matrixSum.reverse().join('');
  for (let i = 0; i < string.length; i++) {
    if (string[0] == '0') {string = string.slice(1);}
  }
  return string;
}
