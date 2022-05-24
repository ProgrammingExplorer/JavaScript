//Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
function getvowels(str) {
    let vowelscount = 0;
    const vowels = ['a','i','u','e','o']
    for (let char of str) {
        if (vowels.includes(char)) {
            vowelscount++
        }
    }
    return vowelscount;
}
    console.log(getvowels("how is youor day?"));