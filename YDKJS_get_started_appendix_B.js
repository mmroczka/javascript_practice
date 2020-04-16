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

console.log(scheduleMeeting("7:00", 15)); // false
console.log(scheduleMeeting("07:15", 30)); // false
console.log(scheduleMeeting("7:30", 30)); // true
console.log(scheduleMeeting("11:30", 60)); // true
console.log(scheduleMeeting("17:00", 45)); // true
console.log(scheduleMeeting("17:30", 30)); // false
console.log(scheduleMeeting("18:00", 15)); // false
