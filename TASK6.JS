//TASK1
const input = "  naveen kumar  ";
var output =  input.trim()
var output =  input.toUpperCase()
var output =  input.replaceAll(" ", "_")
console.log(output);
//TASK2
let email = prompt("enter your email id")
if (email.includes("@") && email.endsWith(".com")) {
    console.log("Valid Email");
} else {
    console.log("Invalid Email");
}
//TASK3
var A = "javascript is very powerful language";
let wordsArray = A.split(" ");
let wordCount = wordsArray.length;
console.log(wordCount);
//TASK4
let text = "python python developer";
let words = text.split(" ");
words[1] = "javascript";
let textoutput = words.join(" ");
console.log(textoutput);
//TASK5
function checkPassword(password) {
    let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (pattern.test(password)) {
        return "Strong";
    } else {
        return "Weak";
    }
}
console.log(prompt("enter the password"))
console.log(checkPassword(prompt("enter the password")));
//TASK6
let str = "SaiRaghavendra";
let result = str.split("").reverse().join("");

console.log(result);
//TASK7
function getDayOfBirth(year, month, day) {

    if (month < 1 || month > 12) {
        return "Invalid month. Please enter 1-12.";
    }
    if (day < 1 || day > 31) {
        return "Invalid date. Please enter 1-31.";
    }
    let birthDate = new Date(year, month - 1, day);

    if (birthDate.getMonth() !== month - 1) {
        return "Invalid date for the given month.";
    }

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayName = days[birthDate.getDay()];

    return `You were born on ${dayName}`;
}
console.log(getDayOfBirth(2001, 7, 24));
//TASK7
function findDayOfBirth() {
    let year = parseInt(prompt("Enter year (YYYY):"));
    let month = parseInt(prompt("Enter month (1-12):"));
    let date = parseInt(prompt("Enter date (1-31):"));
    if (month < 1 || month > 12) {
        alert("Invalid month! Please enter a value between 1 and 12.");
        return;
    }
    if (date < 1 || date > 31) {
        alert("Invalid date! Please enter a value between 1 and 31.");
        return;
    }
    let dob = new Date(year, month - 1, date);
    if (
        dob.getFullYear() !== year ||
        dob.getMonth() !== month - 1 ||
        dob.getDate() !== date
    ) {
        alert("Invalid date! Please enter a valid calendar date.");
        return;
    }

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayName = days[dob.getDay()];

    alert("You were born on " + dayName);
}
findDayOfBirth();
//TASK8
//TASK9
function calculateDateDifference() {
    let date1 = prompt("Enter first date (YYYY-MM-DD):");
    let date2 = prompt("Enter second date (YYYY-MM-DD):");

    let d1 = new Date(date1);
    let d2 = new Date(date2);


    if (isNaN(d1) || isNaN(d2)) {
        alert("Invalid date format! Please use YYYY-MM-DD.");
        return;
    }

    
    let diffTime = Math.abs(d2 - d1);

    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    alert("Difference in days: " + diffDays);
}
calculateDateDifference();
//TASK10
function charFrequencyCounter(str) {
    return [...str].reduce((freq, char) => {
        freq[char] = (freq[char] || 0) + 1;
        return freq;
    }, {});
}
let inputText = "javascript";
let resultOutput = charFrequencyCounter(inputText);
console.log(resultOutput);
