// Create a counter in Javascript (counts down from 30 to 0)
let count = 30;

function countlogic() {
    console.log(count);
    count--;
    if (count < 0) {
        // Stop the interval when count reaches 0
        clearInterval(interval); 
    }
}

// setInterval is callback function which takes-in countlogic function as arg for the callback operation
let interval = setInterval(countlogic, 1000);

