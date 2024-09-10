//Implement a function named factorial that has one parameter: an integer,n. It must return the value of n! (i.e., n factorial).

function factorial(n) {
    let output = 1
    for (i=n; i>=1; i--) {
        output *= i
    }  
    return output;
}

console.log(factorial(3));