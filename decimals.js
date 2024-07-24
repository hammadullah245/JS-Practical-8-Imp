//     in javascript Use toFixed() to format the number 123.45678 to two decimal places.
// let num = 123.45678;
// let formattedNum = num.toFixed(2);
// console.log(formattedNum);



//       Use toFixed() to format the number 123.45678 to four decimal places.
// let num = 123.45678;
// let formattedNum = num.toFixed(4);
// console.log(formattedNum);



// Write a program that takes a number input and formats it to a specified number of decimal places using toFixed().
// Example input
// let numberInput = 123.45678;
// let decimalPlaces = 2;
// let formattedNumber = numberInput.toFixed(decimalPlaces);
// console.log(formattedNumber);



//           Print the current date and time to the console.
// let currentDateTime = new Date();
// console.log(currentDateTime);




//        Extract the year from the current date and print it to the console.
// let now = new Date();
// let year = now.getFullYear();
// console.log(year);




//          Extract the month from the current date and print it to the console.
// let now = new Date();
// let month = now.getMonth();
// console.log(month);




// Write a program that takes a date input and extracts the day, month, and year as separate values.
// let dateString = '2024-07-24';

// let date = new Date(dateString);

// let day = date.getDate();
// let month = date.getMonth() + 1;
// let year = date.getFullYear();
// console.log(`Day: ${day}`);
// console.log(`Month: ${month}`);
// console.log(`Year: ${year}`);






// Create a Date object for a specific date and time (e.g. January 1, 2022 12:00:00).
// const specificDate = new Date('2022-01-01T12:30:02');
// console.log(specificDate);





// Write a program that takes a string input (e.g. "2022-01-01 12:00:00") and creates a Date object from it.

// let dateTimeString = "2022-01-01 12:00:00";
// let isoDateString = dateTimeString.replace(' ', 'T');
// let date = new Date(isoDateString);
// console.log("Created Date object:", date);




//                           Add one day to the current date and print the new date.
// let currentDate = new Date();

// let nextDate = new Date(currentDate);
// nextDate.setDate(currentDate.getDate() + 1);

// console.log("Current Date:", currentDate);
// console.log("Next Date:", nextDate);







let currentTime = new Date();

let newTime = new Date(currentTime);
newTime.setHours(currentTime.getHours() - 1);

// Print the new time
console.log("Current Time:", currentTime.toLocaleString());
console.log("New Time:", newTime.toLocaleString());
