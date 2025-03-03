// // type infrence in typescript
// type infrence in typescript refers to the ability of the 
// typescript complier to automatically detemine and assign 
// types to variables, expression, and function return values 
// based on their usage and context in the code.
var firstname = "jaish"; // the compiler infers the type string for the varible name.
var age = 20; // the compiler infers the type number for the varible age.
var isvalid = true; // the compiler infers the type boolean for the varible isvalid.
function calculateArea(length, age) {
    return length * age;
}
console.log(calculateArea(34, age));
