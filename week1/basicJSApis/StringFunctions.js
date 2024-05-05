// String handbook

// Length
function getLength(str) {
    console.log("Original string : ", str);
    console.log("String lenght : ", str.length);
}
getLength("Hello world");

// indexOf()

function getIndex(str, targetString) {
    console.log("Original String : ", str);
    console.log("String index : " , str.indexOf(targetString));
}
getIndex("Hello world", "world");

// lastIndexOf()
function getLastIndexOf(str, lastTargetString) {
    console.log("Original String : ", str);
    console.log("Index of last target string : ", str.lastIndexOf(lastTargetString));
}
getLastIndexOf("Hello world world", "world");

// slice()
function getSlice(str, startIndex, endIndex) {
    console.log("Original String : ", str);
    console.log("Sliced str : ", str.slice(startIndex, endIndex));
}
getSlice("Hello world", 2, 5);

// substring()
function getSubString(str, startIndex, substringlenght) {
    console.log("Original String : ", str);
    console.log("Sub-string : ", str.substring(startIndex, substringlenght));
}
getSubString("Hello world", 2, 5);

// replace()
function doRepalce(str, searchstring, replacestring) {
    console.log("Original String : ", str);
    console.log("String after replacement : ", str.replace(searchstring, replacestring));
}
doRepalce("Hello world", "world", "javascript");

// split()
function getSplit(str, stringdelimiter) {
    console.log("Original String : ", str);
    console.log("String Array after split : ", str.split(stringdelimiter));
}
getSplit("Hello world", " "); // blank space being used as de-limiter

// trim() 
function getTrim(str) {
    console.log("Original String : ", str);
    console.log("After trim : ", str.trim());
}
getTrim("    Hello world     ");

// toUpperCase()
function getUpperCase(str) {
    console.log("Original String : ", str);
    console.log("Upper case : ", str.toUpperCase());
}
getUpperCase("Hello world");

// toLowerCase()
function getLowerCase(str) {
    console.log("Original String : ", str);
    console.log("Lower case : ", str.toLowerCase());
}
getLowerCase("Hello world");