const firstName = "Nitesh";
let age = 28;
var isMarried = false;

console.log(firstName + " is " + age + " year's old");

if(isMarried) {
    console.log(firstName + " is married");
}
else {
    console.log(firstName + " is not married");
}

// calculate sum of age
let ageSum = 0;
for(let i=0; i<=age; i++) {
    ageSum += i; 
}

console.log("Sum of age is " + ageSum);