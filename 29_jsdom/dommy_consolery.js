//Team Yummy Fluffy Goats :: Kevin Wang, Gordon Mo
//SoftDev pd7
//K29 -- Javascript DOM
//2023-04-20
// --------------------------------------------------


// as a duo...
// pair programming style,
// implement a fact and fib fxn

function fact(n){
    if(n < 2){
        return 1
    }
    else{
        return n * fact(n-1)
    }
}

/*
console.log(fact(1))
console.log(fact(2))
console.log(fact(3))
console.log(fact(4))
console.log(fact(5))
*/
function fib(n){
    if(n < 2){
        return n
    }
    else{
        return fib(n-1) + fib(n-2)
    }
}

/*
console.log(fib(0))
console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
*/

// GCD
var gcd = function(a, b) {
    if (a == 0) {
      return b
    }
    if (b == 0) {
      return a
    }
  
    if (a == b) {
      return a
    }
    if (a > b) {
      return gcd(a-b, b)
    } else {
      return gcd(a, b-a)
    }
}

/*
console.log(gcd(10, 20));
console.log(gcd(50, 25));
console.log(gcd(56, 14));
console.log(gcd(1, 0));
*/

var fibButton = document.getElementById("fib");
var facButton = document.getElementById("fac");
var gcdButton = document.getElementById("gcd");

var answerContainer = document.getElementById("answers");
var fibClick = () => {
    var answer = document.createElement("p")
    answer.innerHTML = "fib(5) is equal to " + fib(5)
    answerContainer.appendChild(answer)
}

var facClick = () => {
    var answer = document.createElement("p")
    answer.innerHTML = "fact(5) is equal to " + fact(5)
    answerContainer.appendChild(answer)
}

var gcdClick = () => {
    var answer = document.createElement("p")
    answer.innerHTML = "gcd(10, 25) is equal to " + gcd(10, 25)
    answerContainer.appendChild(answer)
}   

fibButton.addEventListener("click", fibClick);
facButton.addEventListener("click", facClick);
gcdButton.addEventListener("click", gcdClick);