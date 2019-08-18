/* you want to start by creating letiables for your elements that are in the DOM
this is smart practice because its going to save you time from continuing to write
"document.getElementById" etc. (remember give clear naming conventions) */

//inputs
let leftInput = document.getElementById("first-Value");
let rightInput = document.getElementById("second-Value");
let result = document.getElementById("result");

//buttons
let add;
let subtract;
let multiply;
let divide;
let sum;
let difference;
let product;
let quotient;
let addition = document.getElementById("addition").onclick;


const inputs = {
  firstVal: function () {
    return parseFloat(leftInput.value);
  },
  secondVal: function () {
    return parseFloat(rightInput.value)
  }
}

const calulator = {
  add: function () {
    addition = inputs.firstVal() + inputs.secondVal();
    console.log(addition);
    result.innerHTML = addition;
  },
  subtract: document.getElementById("subtraction").onclick = function () {
    difference = inputs.firstVal() - inputs.secondVal();
    console.log(difference);
    result.innerHTML = difference;
  },
  multiply: document.getElementById("multiplication").onclick = function () {
    product = inputs.firstVal() * inputs.secondVal();
    console.log(product);
    result.innerHTML = product;
  },
  divide: document.getElementById("division").onclick = function () {
    quotient = inputs.firstVal() / inputs.secondVal();
    console.log(quotient);
    result.innerHTML = quotient;
  },
}
