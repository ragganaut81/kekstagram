const checkStringLength = (string, maxLength) => string.length <= maxLength;
checkStringLength('проверяемая строка', 20);


const isPalindrom = function(string) {
  let clearString = string.replaceAll(' ', '').toLowerCase();
  let reverseString = '';
  for (let i = clearString.length - 1; i >= 0; i--) {
    reverseString += clearString[i];
  }
  return clearString === reverseString;
};

const getDigits = function(string) {
  string = string.toString();
  let digitsString = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string[i], 10))) {
      digitsString += string[i];
    }
  }
  return digitsString;
}
console.log(getDigits(-567));
console.log(getDigits('23Лёша на полке 34 клопа нашёл  а я 5'));
