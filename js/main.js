/* you want to start by creating letiables for your elements that are in the DOM
this is smart practice because its going to save you time from continuing to write
"document.getElementById" etc. (remember give clear naming conventions) */

//inputs
let leftInput = document.getElementById("first-Value");
let rightInput = document.getElementById("second-Value");
//

//buttons
let additionButton = document.getElementById("addition");
let subtractionButton = document.getElementById("subtraction");
let multiplicationButton = document.getElementById("multiplication");
let divisionButton = document.getElementById("division");

//result
let result = document.getElementById("result");
// let addButton =
// let secondVal = parseFloat(rightInput.value);
// let firstVal = parseFloat(leftInput.value);

const calulator = {
    // firstVal: parseFloat(leftInput.value),
    // secondVal: parseFloat(rightInput.value),
    add: document.getElementById("addition").onclick = function () {
        let firstVal = parseFloat(leftInput.value);
        let secondVal = parseFloat(rightInput.value);
        let sum = firstVal + secondVal;
          console.log(sum);
          result.innerHTML = sum;
    },
    subtract: document.getElementById("subtraction").onclick = function () {
        let firstNumToSubtract = parseFloat(leftInput.value);
        let secondNumToSubtract = parseFloat(rightInput.value);
        let difference = firstNumToSubtract - secondNumToSubtract;
          console.log(difference);
          result.innerHTML = difference;
    },
    multiply: document.getElementById("multiplication").onclick = function () {
        let firstNumToMultiply = parseFloat(leftInput.value);
        let secondNumToMultiply = parseFloat(rightInput.value);
        let product = firstNumToMultiply * secondNumToMultiply;
          console.log(product);
          result.innerHTML = product;
    },
    divide: document.getElementById("multiplication").onclick = function () {
        let firstNumToDivide = parseFloat(leftInput.value);
        let secondNumToDivide = parseFloat(rightInput.value);
        let product = firstNumToDivide * secondNumToDivide;
          console.log(quotient);
          result.innerHTML = quotient;
    },
}
