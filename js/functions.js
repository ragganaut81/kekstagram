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
};

/*
'8:00' - начало рабочего дня
'17:30' - конец рабочего дня
'14:00' - начало встречи
90 - продолжительность встречи в минутах
*/
// имяФункции('08:00', '17:30', '14:00', 90); // true
// имяФункции('8:0', '10:0', '8:0', 120);     // true
// имяФункции('08:00', '14:30', '14:00', 90); // false
// имяФункции('14:00', '17:30', '08:0', 90);  // false
// имяФункции('8:00', '17:30', '08:00', 900); // false

const timeToMinutes = function (time) {
  const timeParts = time.split(':');
  const hours = parseInt(timeParts[0], 10);
  const minutes = parseInt(timeParts[1], 10);
  const allMinutes = hours * 60 + minutes;
  return allMinutes;
};

const isPossibleMeeting = function (startWorkdayString, endWorkdayString, startMeetingString, meetengLength) {
  const startWorkday = timeToMinutes(startWorkdayString);
  const endWorkday = timeToMinutes(endWorkdayString);
  const startMeeting = timeToMinutes(startMeetingString);
  const endMeeting = startMeeting + meetengLength;

  return startMeeting >= startWorkday && endMeeting <= endWorkday;
};

console.log(isPossibleMeeting('08:00', '17:30', '14:00', 90));
