// TODO: Create a global variable called globalCount
let globalCount = "This variable is global"
// TODO: Create a function that demonstrates local scope
function ThisIsLocal() {
    let localCount = "This variable is local"
    console.log(localCount);
}
// TODO: Create a function that tries to modify both variables
function modifyVariables() {
    globalCount = "Global variable modified";
    localCount = "Local variable modified"; 
    console.log(globalCount);
    console.log(localCount); 
}
modifyVariables();
// TODO: Create a Student constructor function
// TODO: Create several student instances
function studentConstructor(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
}
let emanT = new studentConstructor("Emmanuel", 21, "JavaScript")
console.log(emanT);
// TODO: Create an object literal with nested properties
const personInformation = {
    FirstName: "Naruto",
    LastName: "Uzamaki",
    Age: 26,
    Contact: {
        email: "TheLast_Hokage@hiddenleaf.com",
        tel: +37 - 87 - 955 - 632,
    },
    LastName: "Uzamaki",
    occupation: {
        skills: "Ninja",
        SideJob: "Hokage",
        MainOccupation: "Full time father"
    },
    Address: {
        Village:"Hidden Leaf",
        street: "Hokage Drive",
        BuildingNumber: 237
    }
}