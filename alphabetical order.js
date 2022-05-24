//Write a JavaScript function that returns a passed string with letters in alphabetical order. 
function alphabeticalorder(str) {
    return str.split("").sort().join("");
}
console.log(alphabeticalorder("does this work"));