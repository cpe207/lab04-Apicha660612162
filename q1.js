function typeChecker(a, b) {
    if (typeof a && typeof b === "string")
        return "I LOVE YOU ";
    if (typeof a !== typeof b)
        return " NOT MATCHED";
    if (typeof a && typeof b === "number")
        return a + b;
}
//Test cases
var a1 = "Jack";
var b1 = "Rose";
var a2 = 555;
var b2 = 100;
var a3 = "Jack";
var b3 = 100;
console.log(typeChecker(a1, b1));
console.log(typeChecker(a2, b2));
console.log(typeChecker(a3, b3));
module.exports = typeChecker;
