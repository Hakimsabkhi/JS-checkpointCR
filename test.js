function isPalindrome(word) {

  if (word.length <= 1) {
    return true;
  }

  const firstChar = word[0];
  const lastChar = word[word.length - 1];

  if (firstChar === lastChar) {

    return isPalindrome(word.slice(1, -1));
  }

  return false;
}

console.log(isPalindrome("gag"));    
console.log(isPalindrome("kayak"));   
console.log(isPalindrome("php"));      
console.log(isPalindrome("radar"));   
console.log(isPalindrome("hello"));    
console.log(isPalindrome("world"));   
