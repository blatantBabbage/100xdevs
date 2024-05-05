// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()


// push()
function pushExample(arr, element) {
    console.log("Original Array:", arr);
  
    arr.push(element);
    console.log("After push:", arr);
  }
pushExample([1, 2, 3], 4);
  
// pop()
function popExample(arr) {
    console.log("Original Array:", arr);
  
    arr.pop();
    console.log("After pop:", arr);
  }
popExample([1, 2, 3]);
  
// shift()
function shiftExample(arr) {
    console.log("Original Array:", arr);
  
    arr.shift();
    console.log("After shift:", arr);
  }
shiftExample([1, 2, 3]);
  
// unshift()
function unshiftExample(arr, element) {
    console.log("Original Array:", arr);
  
    arr.unshift(element);
    console.log("After unshift:", arr);
  }
unshiftExample([1, 2, 3], 0);
  
// concat()
function concatExample(arr1, arr2) {
    console.log("Original Arrays:", arr1, arr2);
  
    let arr3 = arr1.concat(arr2);
    console.log("After concat:", arr3);
  }
concatExample([1, 2, 3], [4, 5, 6]);
  
/*
  Here's the basic syntax of forEach() function :

  array.forEach(function(currentValue, index, array) {
        // Your code here
    }, thisArg);

  currentValue: The current element being processed in the array.
  index (optional): The index of the current element being processed in the array.
  array (optional): The array that forEach() is being applied to.
  thisArg (optional): Value to use as this when executing the callback function.
*/
  function forEachExample(arr) {
    console.log("Original Array:", arr);
  
    arr.forEach(function(item, index) {
      console.log(item, index);
    });
  }
forEachExample([1, 2, 3]);

/*
  Here's the basic syntax of map() function :

  array.map(function(currentValue, index, array) {
        // Your code here
    }, thisArg);

  currentValue: The current element being processed in the array.
  index (optional): The index of the current element being processed in the array.
  array (optional): The array that map() is being applied to.
  thisArg (optional): Value to use as this when executing the callback function.
*/
function mapExample(arr) {
    console.log("Original Array:", arr);
  
    let newArr = arr.map(function(item) {
      return item * 2;
    });
    console.log("After map:", newArr);
  }
mapExample([1, 2, 3]);
  
/*
  Here's the basic syntax of filter() function :

  array.filter(function(currentValue, index, array) {
        // Your code here
    }, thisArg);

  currentValue: The current element being processed in the array.
  index (optional): The index of the current element being processed in the array.
  array (optional): The array that filter() is being applied to.
  thisArg (optional): Value to use as this when executing the callback function.
*/
function filterExample(arr) {
    console.log("Original Array:", arr);
  
    let newArr = arr.filter(function(item) {
      return item > 3;
    });
    console.log("After filter:", newArr);
  }
filterExample([1, 2, 3, 4, 5]);
  
/*
  Here's the basic syntax of find() function :

  array.find(function(currentValue, index, array) {
        // Your code here
    }, thisArg);

  currentValue: The current element being processed in the array.
  index (optional): The index of the current element being processed in the array.
  array (optional): The array that find() is being applied to.
  thisArg (optional): Value to use as this when executing the callback function.
*/
function findExample(arr) {
    console.log("Original Array:", arr);
  
    let found = arr.find(function(item) {
      return item > 3;
    });
    console.log("After find:", found);
  }
findExample([1, 2, 3, 4, 5]);
  
/*
Here's the basic syntax of the sort() method:

    array.sort(compareFunction);

* compareFunction (optional): A function that defines the sort order. If omitted, the array elements are sorted based on their string representations.

- The sort() method in JavaScript is used to sort the elements of an array in place and returns the sorted array. 
- By default, the sort() method sorts the elements of the array in ascending order based on their string representations. 
- This means that if the array contains numbers, they will be sorted as strings, which may not produce the desired result for numerical sorting.

In the below provided example, a and b are the two elements being compared by the compareFunction passed to the sort() method.
- a: Represents the current element being compared.
- b: Represents the next element being compared with a.

Here's how the comparison works:

- If the compareFunction returns a negative value (e.g., a - b results in a negative number), it means that a should come before b in the sorted array.
- If the compareFunction returns a positive value (e.g., b - a results in a positive number), it means that b should come before a in the sorted array.
- If the compareFunction returns zero, it means that a and b are considered equal in terms of sorting, and their relative order in the original array will be maintained in the sorted array.
*/
function sortExample(arr) {
    console.log("Original Array:", arr);
  
    arr.sort(function(a, b) {
      return a - b;
    });
    console.log("After sort:", arr);
  }
sortExample([5, 2, 3, 4, 1]);