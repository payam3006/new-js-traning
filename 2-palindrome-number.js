function isPalindrome(num) {
  const startTime = performance.now();

  if (num < 0) return false;

  let string = num.toString();
  let reverseStr = "";
  for (let i = 0; i < string.length; i++) {
    reverseStr += string[string.length - 1 - i];
  }
  const endTime = performance.now();
  console.log(`Execution Time: ${(endTime - startTime).toFixed(2)} ms`);
  return reverseStr === string;
}

function numDigits(num) {
  let cashNum = num;
  let i = 1;
  while (cashNum >= 10) {
    i += 1;
    cashNum = Math.floor(cashNum / 10);
  }
  return i;
}
function isPalindrome2(num) {
  const startTime = performance.now();

  const numDigit = numDigits(num);
  let cashNum = num;
  let reverse = 0;
  let i = 0;
  while (cashNum >= 10) {
    reverse += (cashNum % 10) * 10 ** (numDigit - i - 1);
    cashNum = (cashNum - (cashNum % 10)) / 10;
    i += 1;
  }
  reverse += cashNum;
  const endTime = performance.now();
  console.log(`Execution Time: ${(endTime - startTime).toFixed(2)} ms`);
  return reverse === num;
}

console.log(isPalindrome(123454321));
console.log(isPalindrome2(123454321));
