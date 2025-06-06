// TODO: Create a function called ‘multiply’ that will take in 3 parameter and multiply all 3 numbers together. Note: The argument passed must NOT be the same number. 
function multiply(a,b,c){
    product = a*b*c
    return console.log(`The procuct is ${Number(product)}`);
    
}
multiply(6,3,5)

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// TODO: Create a function expression called ‘convertToSeconds’ that takes in anumber of minutes as an argument and returns the amount in seconds. ***Do notuse a console.log() inside of the function***
function convertToSeconds(min){
    return `Time is ${min*60} seconds`
}
console.log(convertToSeconds(30));

//---------------------------------------------------------------------------------------------------------------------------------------------------------------

// TODO: Create a function called fahrenheitToCelsius that takes the temperature as an parameter and returns the equivalent temperature in Celsius. ***Do not use a console.log() inside of the function***
function fahrenheitToCelsius(temp){
    return `temprature in fahrenheit is ${(temp * 9/5) + 32}`
}
console.log(fahrenheitToCelsius(30));

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// TODO: Create a function that takes a string as a parameter and returns the reverse of the string. ***Do not use a console.log() inside of the function ***
function stringReverse(string){
    return string.split('').reverse().join('');
}
console.log(stringReverse("Plumber I was"));

//----------------------------------------------------------------------------------------------------------------------------------------------------------------
// TODO: Create a function that takes in a string and returns the number of Vowels in the sentence. E.g. countVowels(‘Javascript’) //output =3 ***Do not use a console.log() inside of the function***
function vowelCount(String){
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (const char of String){
        if(vowels.includes(char)){
            count ++;
        }
    }
    return `This string has ${count} vowels`;
}
console.log(vowelCount("How many vowels do I have"));

//---------------------------------------------------------------------------------------------------------------------------------------------------------------
// TODO: Create a “isPrime” function that takes a number as a parameter and returns true if the number is prime, and false otherwise. Make sure to test your code with 4 numbers

function isPrime(number) {
  if (!Number.isInteger(number)) {
    console.error(`Error: Input '${number}' is not an integer. Please provide an integer.`);
    return false;
  }

  if (number <= 1) {
    // Numbers less than or equal to 1 are not prime
    return false;
  } else if (number === 2) {
    // 2 is the only even prime number
    return true;
  } else if (number % 2 === 0) {
    // All other even numbers are not prime
    return false;
  } else {
    // Check for divisors from 3 up to the square root of the number
    // We only need to check odd numbers because even numbers were already excluded
    // Math.sqrt() is equivalent to Python's math.sqrt()
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
}

console.log(`Is 7 prime ? ${isPrime(7)}`);         
console.log(`Is 13 prime ? ${isPrime(13)}`);      
console.log(`Is 4 prime ? ${isPrime(4)}`);         


