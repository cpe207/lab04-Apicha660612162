function primeNumber(a: number) { 
  /* Your code here */
  if(a==2)
{
  return "YES"
}
for(let i=2;i<a;i++){
  let b = "YES";
  if(a%i==0){
    b="NO"
  }
  return b
}



}

const d1 = 10;
const d2 = 29;
const d3 = 2;

console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));

module.exports = primeNumber;
