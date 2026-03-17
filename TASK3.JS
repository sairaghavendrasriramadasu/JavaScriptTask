//TASK1
let input = prompt("Enter a number:");
let result = Number(input) + 10;
console.log("The result is: " + result);
alert("The result is: " + result);
//TASK2
let A = prompt("Enter the first number:");
let B = prompt("Enter the second number:");
let num1 = Number(A);
let num2 = Number(B);
let sum = num1 + num2;
console.log("The sum is: " + sum);
alert("The sum is: " + sum);
//TASK3
let userInput = prompt("Type something (or leave it empty):");
let result1 = Boolean(userInput);
console.log("The Boolean value is: " + result1);
alert("The Boolean value is: " + result1);
//TASK4
let str = "123";
let result2 = Number(str) * 5
console.log(result2);
alert(result2);
//TASK5
let trueAsNumber = Number(true);
let falseAsNumber = Number(false);
console.log("true as a number:", trueAsNumber);   
console.log("false as a number:", falseAsNumber);
//TASK6
let userInput1 = prompt("Enter some text:");
let boolValue = Boolean(userInput1);
console.log("Input: '" + userInput1 + "' | Boolean: " + boolValue);
alert("The boolean value of your input is: " + boolValue);
//TASK7
let str1 = "100";
let str2 = "50";
let difference = Number(str1) - Number(str2);
console.log("The difference is: " + difference);
//TASK8
let nullAsNum = Number(null);
let undefinedAsNum = Number(undefined);
let emptyStringAsNum = Number("");
console.log("null", nullAsNum);            
console.log("undefined", undefinedAsNum);  
console.log("(empty string)", emptyStringAsNum); 
//TASK9
let result3 = "10" + 20;
console.log(result3);
console.log(typeof result3);
//TASK10
let num = Number("25");
let isGreater = num > 20;
console.log(isGreater);
//TASK11
let input1 = prompt("Please enter your age:");
let age = Number(input1);
if (age >= 18) {
    console.log("You are eligible to vote!");
    alert("You are eligible to vote!");
} else {
    console.log("You are not eligible to vote.");
    alert("You are not eligible to vote.");
}
//TASK12
// 1. Take input and convert to a number
let input2 = prompt("Enter a number:");
let num3 = Number(input2);

// 2. Check the value
if (num > 0) {
    console.log("The number is positive.");
} else {
    console.log("The number is not positive.");
}
alert("The number is " + (num > 0 ? "positive." : "not positive."));
//TASK13
let input4 = prompt("Enter a number:");
let num4 = Number(input4);
if (num4 % 2 === 0) {
    console.log(num4 + " is an Even number.");
} else {
    console.log("" + num4 + " is an Odd number.");
}
alert(num4 + " is " + (num4 % 2 === 0 ? "Even." : "Odd."));
//TASK14
let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));
let c = Number(prompt("Enter third number:"));

let largest;
if (a >= b && a >= c) {
    largest = a;
} else if (b >= a && b >= c) {
    largest = b;
} else {
    largest = c;
}
console.log("The largest number is: " + largest);
alert("The largest number is: " + largest);
//TASK15
let temp = Number(prompt("What is the temperature outside?"));
if (temp > 35) {
    console.log("Hot day ☀️");
    alert("Hot day");
} else if (temp < 20) {
    console.log("Cold day ❄️");
    alert("Cold day");
} else {
    console.log("Normal weather ☁️");
    alert("Normal weather");
}
//TASK16
let scoreInput = prompt("Enter the student's marks:");
let score = Number(scoreInput);
if (score >= 35) {
    console.log("Status: Passed");
    alert("Congratulations! You passed.");
} else {
    console.log("Status: Failed");
    alert("Better luck next time.");
}
//TASK17
const correctUsername = "admin";
const correctPassword = "123password";
let enteredUsername = prompt("Enter Username:");
let enteredPassword = prompt("Enter Password:");
if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
    console.log("Login Successful! Welcome, " + correctUsername + ".");
    alert("Login Successful!");
} else {
    console.log("Login Failed. Invalid username or password.");
    alert("Login Failed.");
}
//TASK18
let year = Number(prompt("Enter a year:"));
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log(year + " is a Leap Year!");
        } else {
            console.log(year + " is NOT a Leap Year.");
        }
    } else {
        console.log(year + " is a Leap Year!");
    }
} else {
    console.log(year + " is NOT a Leap Year.");
}
//TASK19
let hour = Number(prompt("Enter the current hour (0-23):"));
if (hour >= 5 && hour <= 11) {
    console.log("Morning");
} else if (hour >= 12 && hour <= 16) {
    console.log("Afternoon");
} else if (hour >= 17 && hour <= 20) {
    console.log("Evening");
} else if ((hour >= 21 && hour <= 23) || (hour >= 0 && hour <= 4)) {
    console.log("Night");
} else {
    console.log("Invalid hour! Please enter a number between 0 and 23.");
}
//TASK20
let salary = Number(prompt("Enter your annual salary:"));
let taxAmount = 0;
let taxRate = 0;
if (salary >= 50000) {
    taxRate = 0.20;
} else if (salary >= 30000) {
    taxRate = 0.10;
} else {
    taxRate = 0;
}
taxAmount = salary * taxRate;
console.log("Salary: " + salary);
console.log("Tax Rate: " + (taxRate * 100) + "%");
console.log("Total Tax: " + taxAmount);
console.log("Net Income: " + (salary - taxAmount));
//TASK21
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//TASK22
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
//TASK23
for (let j = 2; j <= 50; j += 2) {
    console.log(j);
}
//TASK24
for (let j = 1; j <= 50; j += 2) {
    console.log(j);
}
//TASK25
let num5 = Number(prompt("Enter a number to see its multiplication table:"));
if (isNaN(num5)) {
    console.log("Please enter a valid number.");
} else {
    console.log(`--- Multiplication Table for ${num5} ---`);
    for (let i = 1; i <= 10; i++) {
        let result = num5 * i;
        console.log(`${num5} x ${i} = ${result}`);
    }
}
//TASK26
let sum3 = 0;
for (let i = 1; i <= 100; i++) {
    sum3 += i; 
}
console.log("The sum of numbers from 1 to 100 is: " + sum3);
//TASK27
let num6 = Number(prompt("Enter a number to find its factorial:"));
let result4 = 1;
if (num6 < 0) {
    console.log("Error: Factorial does not exist for negative numbers.");
} else if (num6 === 0) {
    console.log("The factorial of 0 is 1.");
} else {
    for (let i = 1; i <= num6; i++) {
        result4 *= i;
    }
    console.log(`The factorial of ${num6} is ${result4}`);
}
//TASK28
let count = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        count++; 
    }
}
console.log("Total numbers divisible by 5: " + count);
//TASK29
for (let i = 1; i <= 10; i++) {
    let square = i * i;
    console.log(`The square of ${i} is ${square}`);
}
//TASK30
let num7 = prompt("Enter a number to reverse:");
let reversedStr = "";
for (let i = num7.length - 1; i >= 0; i--) {
    reversedStr += num7[i];
}
console.log("Reversed Number: " + reversedStr);
//TASK31
let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
    console.log(fruit);
}

//TASK32
let total = fruits.length;

console.log("Total elements: " + total); 
//TASK33
let numbers3 = [12, 45, 7, 92, 31, 54];
let largest1 = numbers3[0];
for (let i = 1; i < numbers3.length; i++) {
    if (numbers3[i] > largest1) {
        largest1 = numbers3[i];
    }
}

console.log("The largest number is: " + largest1);
//TASK34
let numbers4 = [10, 20, 30, 40, 50];
let sum4 = 0;
for (let i = 0; i < numbers4.length; i++) {
    sum4 += numbers4[i];
}

console.log("The total sum is: " + sum4); 
//TASK35
let numbers = [13, 22, 34, 47, 56, 61, 80];

console.log("Even numbers in the array:")
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}
//TASK36
let user = {
    name: "Sai",
    age: 20,
    city: "NRT"
};
for (let key in user) {
    let value = user[key];
    console.log(key + ": " + value);
}
//TASK37
let user1 = {
    name: "John",
    age: 25,
    city: "Chennai",
    isAdmin: true
};
let keys = Object.keys(user);
let count1 = keys.length;
console.log("Total properties: " + count1);
//TASK38
if ("salary" in user1) {
    console.log("The salary property exists!");
} else {
    console.log("The salary property is missing.");
}
//TASK39
let user4 = {
    name: "sai",
    age: 25,
    city: " nrt"
};
let values = Object.values(user4); 
for (let val of values) {
    console.log(val);
}
//TASK40
const employee = {
    name: "Aarav Sharma",
    role: "Senior Developer",
    salary: 85000,
    department: "Engineering"
};
console.log("--- Employee Profile ---");
console.log(`Name: ${employee.name}`);
console.log(`Role: ${employee.role}`);
console.log(`Salary: $${employee.salary}`);
console.log(`Department: ${employee.department}`);

