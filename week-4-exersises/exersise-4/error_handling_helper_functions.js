// TODO: Create a function that validates user input
function validateinput() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  const input = document.getElementById('fname');
  const display = document.getElementById('nameDisplay');
  display.textContent = `hello, ${input.value}`
}
// TODO: Create a function that demonstrates multiple error types

function ErrorTerror(a,b,operations) {
  if(!Number.isInteger(a || b)){console.error("Please use a intager");
  }
  if(a === "" || b === "" || operations === ""){
    console.error("PLease input value or operation");
  }
  if (operations !== '+' || '-' || '*' || '/'){console.error("invalid Operation");
  }
  if (operations == '+'){
    let sum = a + b
    return console.log(`Sum is ${sum}`);
    
  }else if(operations == '-'){
    let difference = a  -b
    return console.log(`Sum is ${difference}`);
  }else if(operations == '/'){
    if(b === 0){console.error(`Operation failed, division by zero not allowed`);
    }
    let divide = a + b
    return console.log(`The qoutient is ${divide}`);
  }else if(operations == '*'){
    let multiply = a * b
    return console.log(`The product is ${multiply}`);
  }
};
ErrorTerror(1,1,'n');
// TODO: Create a collection of helper functions for string manipulation
function toUpperCase(str) {
  if (typeof str !== 'string') {
    throw new Error("Input must be a string");
  }
  return str.toUpperCase();
}
// TODO: Create helper functions for array operations
function findMax(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }
  if (arr.length === 0) {
    throw new Error("Array cannot be empty");
  }
  return Math.max(arr);
}