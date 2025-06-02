// TODO: Create a variable called score and give it a value between 0 and 100
let score = 85;
// TODO: Create a variable called passingGrade and set it to 60
let passingGrade = 60;
// TODO: Write an if statement to check if score is greater than or equal to passingGrade
if (score >= passingGrade) {
    console.log(`you have passed`);
}
// TODO: Add an else statement for when the score is below passingGrade
else  {
    console.log(`you have failed`);
}
// TODO: Print "Passed" or "Failed" based on the score
console.log(score >= passingGrade ? 'Passed' : 'Failed');
// TODO: Add another condition to check if the score is perfect (100)
if (score === 100) {
    console.log(`Perfect score!`);
}