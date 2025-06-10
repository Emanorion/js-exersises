// TODO: Create a function called sum. The function will take in a parameter and calculate all the numbers from 0 -> the parameter. You must check if the parameter is an integer first before any calculation is made. If the parameter is not a number, return a message stating, “The value passed is not a number”. You are NOT allowed to use methods(!Number.isInteger(n)) or regular expressions(.match(/cat/g)). Make sure to test your code effectively. 
function sum(sumTotal){
    if(typeof sumTotal !== "number" || sumTotal % 1 !== 0){
        console.error("Please input a number");
    }
let sum = 0
for (let i = sumTotal; i > 0; i--){
    total = sum += i;
    }
    return total;
}
console.log(sum(10));
//----------------------------------------------------------------------------------------------------------------------------------------------------------------
// TODO: Create a function called ‘factorial’ that takes in a number as a parameter. The function will print the factorial of the entered number, e.g. factorial(4) ->4*3*2*1 //output 24
function factorial(num) {
    if (!Number.isInteger(num)){
        console.error(`${num} is not a number`);
        
    }
    let fact = 1
    for (let i = num; i > 1; i--) {
        result = fact *= i;
    }
    return result
     
}
    console.log(factorial(5));
    
    

//----------------------------------------------------------------------------------------------------------------------------------------------------------------
// TODO: Create a function called funkyMath . If this function is called with 2 arguments the function will subtract the first from the second. If the function is called with 3 arguments it will add all 3 numbers together. If the function is called with 4 arguments it will add together argument 1 and 2 , 3 and 4 separately. Then divide them accordingly, eg funkyMath(8,2,3,5) -> 8+2 divided by 3+5 -> 10/8 //output 1,25
    
function funkyMath(a,b,c,d) {
    if (!Number.isInteger(a || b || c || d)){
        console.error("That is not a number");
    }
    if (a && b && c && d ){
        let firstpart = a + b;
        let secondpart = c + d;
        let final = firstpart/secondpart;
        return final
    }else if (a && b && c){
        return a + b + c
    }else if(a && b) {
        return a - b
    }else{
        console.error("Insufficient arguments provided");
        
    }
}

console.log(funkyMath(2,4));

//----------------------------------------------------------------------------------------------------------------------------------------------------------------
// TODO: Create a loop that will remove all the odd numbers from the array and add them to a new array. Use the current array [1, 2 , 33, 45, 6,44]. Bonus: Make sure to arrange them from smallest to biggest.()
let numberList = [1, 2, 33, 45, 6, 44];
let oddList =[];
for (let i = 0; i < numberList.length; i++){
    let isEven = numberList[i] % 2;
    if (isEven !== 0){
        oddList.push(numberList[i])
    }
    
}
console.log(oddList);

//----------------------------------------------------------------------------------------------------------------------------------------------------------------
// TODO: Create an object called ‘me’ with properties of first name, last name, age, favourite colour, dream car
const me = {
    firstName : "Emmanuel",
    lastName : "Tambu",
    age: 21,
    favoutiteColor : "Black",
    dreamCar : "Porsche 911 GT2 RS"
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------
// TODO: Create and add a new property and value of ‘favourite food’ to the object. // TODO: . Now delete the age property from the object
me["favorite food"] = "Pap";
delete me.age;

console.log(me);
