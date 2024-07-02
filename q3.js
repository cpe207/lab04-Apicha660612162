function primeNumber(a) {
    /* Your code here */
    if (a == 2) {
        return "YES";
    }
    for (var i = 2; i < a; i++) {
        var b = "YES";
        if (a % i == 0) {
            b = "NO";
        }
        return b;
    }
}
var d1 = 10;
var d2 = 29;
var d3 = 2;
console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));
module.exports = primeNumber;
