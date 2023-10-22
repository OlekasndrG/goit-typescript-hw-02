/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Day {
  Monday = "WeekDay",
  Tuesday = "WeekDay",
  Wednesday = "WeekDay",
  Thursday = "Weekday",
  Friday = "WeekEnd",
  Saturday = "WeekEnd",
  Sunday = "WeekEnd",
}

function isWeekend(day: Day): boolean {
  console.log(day);
  return day === "WeekEnd";
}
console.log(isWeekend(Day.Monday));
