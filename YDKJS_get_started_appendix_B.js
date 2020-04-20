// https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/apB.md

const dayStart = "07:30";
const dayEnd = "17:45";

function parseString(s) {
  let [hour, min] = s.split(":");
  return [parseInt(hour), parseInt(min)];
}

function hoursAddedByDuration(hour, durationMinutes) {
  return hour + Math.floor(durationMinutes / 60);
}

function scheduleMeeting(startTime, durationMinutes) {
  const [dayStartHour, dayStartMin] = parseString(dayStart);
  const [dayEndHour, dayEndMin] = parseString(dayEnd);
  const [startHour, startMin] = parseString(startTime);

  // time starts before day does
  if (
    startHour < dayStartHour ||
    (startHour === dayStartHour && startMin < dayStartMin)
  ) {
    return false;
  }
  const endHour = hoursAddedByDuration(startHour, durationMinutes);
  const endMin = startMin + (startMin % 60);

  // time ends after day does
  if (endHour > dayEndHour || (endHour === dayEndHour && endMin > dayEndMin))
    return false;
  return true;
}

// console.log(scheduleMeeting("7:00", 15)); // false
// console.log(scheduleMeeting("07:15", 30)); // false
// console.log(scheduleMeeting("7:30", 30)); // true
// console.log(scheduleMeeting("11:30", 60)); // true
// console.log(scheduleMeeting("17:00", 45)); // true
// console.log(scheduleMeeting("17:30", 30)); // false
// console.log(scheduleMeeting("18:00", 15)); // false

// Practicing Closure
/*
The range(..) function takes a number as its first argument, representing the first number in a desired range of 
numbers. The second argument is also a number representing the end of the desired range (inclusive). If the second 
argument is omitted, then another function should be returned that expects that argument.
*/

function range(start, end) {
  if (end !== undefined) {
    let arr = [];
    for (let i = start; i <= end; i++) arr.push(i);
    return arr;
  }
  return (end) => {
    let arr = [];
    for (let i = start; i <= end; i++) arr.push(i);
    return arr;
  };
}

console.log(range(3, 3)); // [3]
console.log(range(3, 8)); // [3,4,5,6,7,8]
console.log(range(3, 0)); // []

var start3 = range(3);
var start4 = range(4);
console.log(start3(3)); // [3]
console.log(start3(8)); // [3,4,5,6,7,8]
console.log(start3(0)); // []
console.log(start4(6)); // [4,5,6]
