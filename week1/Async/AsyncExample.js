function findSum(n) {
    let sum = 0;
    for(let i = 0; i<=n; i++) {
        sum += i;
    }
    return sum;
}

function findSumTill100() {
    console.log(findSum(100));
}

/* setTimeout is global js funnction that is written in async fashion, which basically means when code execution reaches setTimeout method,
It does not wait for it to finsh rather it moves to the next line of code and when setTimeout time is completed it get executed. This shows
that even though JS is single threaded, it can delegate task(function calls) and work on multiple operations at once in async fashion
*/
setTimeout(findSumTill100, 1000)
console.log("Hello world");