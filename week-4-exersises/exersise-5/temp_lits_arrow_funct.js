// TODO: Create a multiline string using template literals
console.log(`This is 
A multiline string 
using Tamplate literals`);
// TODO: Create a function that uses template literals for HTML generation
function tempHtml(name, module, typeClass) {


    return `
    <div class="studentDetails">
    <p>Hello ${name}, you are part of ${typeClass}. Your current module is ${module}.</p>
    </div>`;
}
// TODO: Convert regular functions to arrow functions

// Dummy function
/* function sum(a, b){
    let ans = a + b
    return ans
}
*/

// function converted using arrow functions
const sum = (a, b) => {
    let ans = a + b;
    return ans;
};

// TODO: Use arrow functions with array methods
let arrayCheck = (arr) => {
    let arrayPrint = arr.toString();
    let size = arr.length;

    console.log(`
    This is your array \n${arrayPrint} and it has a length of ${size}
    `);
    
}
let randomStuff = ['dog','cat','bubble']
arrayCheck(randomStuff);