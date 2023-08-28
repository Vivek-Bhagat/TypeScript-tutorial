"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(5);
//addTwo("5")//* you can't pass the string if the value tupe is integre
function getUser(name, email, isPaid) {
}
getUser("vivek", "vivek@gmail.com", false); // according to the function we can only pass the same type in the parameters
//? if we use arrow function then the function should return the same parameter
var getHello = function (s) {
    return "";
};
// one benfit of the using the typescrit is the it will auromatically assign the value in the arrow function  by "map function"
//be careful on the return type of the function
//? const heroes = [1,2,3]
var heroes = ["ironman", "thor", "groot"];
heroes.map(function (hero) {
    return "hero name is ".concat(heroes);
});
//best way to write the function code  use the "never" that forcefully terminastes the program if it gets the error message
function consoleError(errMsg) {
    throw new Error(errMsg);
}
