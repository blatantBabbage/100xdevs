// callback function that accepts function as arg
function calculator (a, b, arithmaticCallback) {
    const ans = arithmaticCallback(a, b);
    return ans;
}
// function that can be passed as arg
function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

// Make call to callback function
console.log(calculator(4,2,sum));

