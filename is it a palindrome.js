//Write a JavaScript function that checks whether a passed string is palindrome or not?
function palindrome(str) {
    const letter = str.split("").reverse().join("");
    
    if (letter === str) {
      return "This is a palindrome";
    }
    return "This isn't a palindrome"
  }
  console.log(palindrome("ana"));   