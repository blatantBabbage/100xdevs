const numberArray = [4,8,2,9,5];
let biggestNumber = 0;

for(let i=0; i<numberArray.length; i++) {
    if(numberArray[i] > biggestNumber) {
        biggestNumber = numberArray[i];
    }
}

console.log("The biggest number is " + biggestNumber);