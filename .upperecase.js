//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
function capitalize(str) {
    var words = str.split("");
    var upperecase = words[0].toUpperCase;
    var combine = upperecase + words;
}
console.log(capitalize("test"));