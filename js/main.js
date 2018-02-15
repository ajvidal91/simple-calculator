/* you want to start by creating variables for your elements that are in the DOM
this is smart practice because its going to save you time from continuing to write
"document.getElementById" etc. (remember give clear naming conventions) */

//inputs
var leftInput = document.getElementById("first-Value");
var rightInput = document.getElementById("second-Value");

//buttons
var additionButton = document.getElementById("addition");
var subtractionButton = document.getElementById("subtraction");
var multiplicationButton = document.getElementById("multiplication");
var divisionButton = document.getElementById("division");

//result
var result = document.getElementById("result");

//event handler
additionButton.onclick = add;
subtractionButton.onclick = subtract;
multiplicationButton.onclick = multiply;
divisionButton.onclick = divide;

/*next we want to create our functions that correspond to each event handler
(the things after the onclick events)*/

function add() {
  var firstNumToAdd = parseFloat(leftInput.value);
  var secondNumToAdd = parseFloat(rightInput.value);
  var sum = firstNumToAdd + secondNumToAdd;
  console.log(sum);
  result.innerHTML = sum;
  clearInputs();
}

function subtract() {
  var firstNumToAdd = parseFloat(leftInput.value);
  var secondNumToAdd = parseFloat(rightInput.value);
  var sum = firstNumToAdd - secondNumToAdd;
  console.log(sum);
  result.innerHTML = sum;
  clearInputs();

}

function multiply() {
  var firstNumToAdd = parseFloat(leftInput.value);
  var secondNumToAdd = parseFloat(rightInput.value);
  var sum = firstNumToAdd * secondNumToAdd;
  console.log(sum);
  result.innerHTML = sum;
  clearInputs();

}

function divide() {
  var firstNumToAdd = parseFloat(leftInput.value);
  var secondNumToAdd = parseFloat(rightInput.value);
  var sum = firstNumToAdd / secondNumToAdd;
  console.log(sum);
  result.innerHTML = sum;
  clearInputs();
}

/* creating an extra function to call upon events being
click im going to call this function in each math function above*/

function clearInputs(){
  leftInput.value = "";
  rightInput.value = "";
}
