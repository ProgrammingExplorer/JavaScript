//Write a JavaScript function that reverse a number.
function reverseNumber(n) {
    n = n + "";
    let Nums = n.split("");
    return Nums.reverse().join("");
}
console.log(Number(reverseNumber(232324234345454)));

