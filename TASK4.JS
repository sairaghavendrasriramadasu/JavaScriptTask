//TASK1
function a() {
  console.log("Hello World");
}
a();
//TASK2
function b(name) {
  console.log(`Welcome ${name}`);
}
b("Sai");
b("Raghavendra");
//TASK3
function Addition(a, b) {
  return a + b;
}
let sum = Addition(5, 10);
console.log(sum);
//TASK4
function EvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(EvenOrOdd(10));
console.log(EvenOrOdd(7));
//TASK5
function square(number) {
  return number * number;
}
console.log(square(5));
//TASK6
function findLargest(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}
console.log(findLargest(10, 25, 15));
//TASK7
function VotingStatus(name, age = 18) {
  return `${name} is ${age} years old.`;
}
console.log(VotingStatus("Alice", 25)); 
console.log(VotingStatus("Bob")); 
//TASK8
function FullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
const user = FullName("Sai", "Raghavendra");
console.log(user);
//TASK9
function multiplyThree(a, b, c) {
  return a * b * c;
}
const result = multiplyThree(2, 5, 10);
console.log(result);
//TASK10
function simpleComparison() {
  var name = "John";
  const birthYear = 1995;
  let score = 10;
  score = 20;

  if (true) {
    var greeting = "Hello";
    let secret = "I am hidden";
  }
  // console.log(secret); 
}
simpleComparison();
//TASK11
function outerFunction(firstName) {
  const greeting = "Hello";
  function innerFunction(lastName) {
    return `${greeting}, ${firstName} ${lastName}!`;
  }

  return innerFunction("Raghavendra"); 
}
console.log(outerFunction("Sai"));
//TASK12
const Name = "Gemini";

function sayHello() {
  console.log(`Hello, ${Name}!`);
}
sayHello(); 
console.log(`Hello from outside, ${Name}!`);
//TASK13
function testBlockScope() {
  if (true) {
    let secretMessage = "I am inside the block!";
    const topSecret = "Keep out!";
    var publicInfo = "This is public.";
    
    console.log(secretMessage);
    console.log(topSecret);
    console.log(publicInfo);

  }
  console.log(secretMessage); 
    console.log(topSecret);
}
testBlockScope();
//TASK14
console.log(runner);
var runner = "Usain Bolt";
console.log(player);
let player = "Messi";
console.log(player1);
const player1 = "Serena Williams";
//TASK15
const A = function() {
  console.log("Hello!");
};
A();
//TASK16
const multiply = (a, b) => {
  return a * b;
};
console.log(multiply(5, 10));
//TASK17
const calculateTax = (price) => price * 2;

console.log(calculateTax(100));
//TASK18
const getUser = function(name) {
  return `Hello, ${name}! Welcome back.`;
};
const message = getUser("Sai");

console.log(message);
//TASK19
const user1 = {
  name: "Alice",
  sayHi: function() {
    console.log("Normal:", this.name); 
  }
};
user1.sayHi();
const user2 = {
  name: "Bob",
  sayHi: () => {
    console.log("Arrow:", this.name); 
  }
};

user2.sayHi();
//TASK20
(function() {
  console.log("I run immediately without being called!");
})();
(function(name) {
  console.log(`Hello, ${name}! I started automatically.`);
})("Sai");
//TASK21
// 1. This is our Callback function
function sayHello() {
  console.log("Hello! The callback is running.");
}
// 2. This is our Higher-Order Function
function executeTask(task) {
  console.log("Starting the execution...");
  task(); // We call the function that was passed in
}
// 3. We pass 'sayHello' as an argument to 'executeTask'
executeTask(sayHello);
//TASK22
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}
function calculator(a, b, operation) {
    return operation(a, b);
}
console.log("Add:", calculator(5, 3, add));
console.log("Subtract:", calculator(5, 3, subtract));
console.log("Multiply:", calculator(5, 3, multiply));
//TASK23
function processUser(A) {
    console.log("Starting process...");
    A();
}
function customMessage() {
    console.log("Hello! This is a custom message.");
}
processUser(customMessage);
//TASK24
function delayExecution(A, b) {
    setTimeout(() => {
        A();
    }, B);
}
function showMessage() {
    console.log("This message is delayed!");
}
delayExecution(showMessage, 2000);
//TASK25
const numbers = [1, 2, 3, 4];
function double(num) {
    return num * 2;
}

const output = customMap(numbers, double);
console.log(output);
//TASK26
function add(a, b, c) {
    return a + b + c;
}
function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}
const result1 = add(5)(10)(15);
console.log(result1);
//TASK27
function multiply(a) {
    return function(b) {
        return function(c) {
            return a * b * c;
        };
    };
}
const result2 = multiply(2)(5)(10);
console.log(result2);
//TASK28
function greeting(greeting1) {
    return function(name) {
        return function(message) {
            return `${greeting1}, ${name}! ${message}`;
        };
    };
}
const customGreet = greeting("Hello")("Sai")("Welcome to the world of JavaScript!");
console.log(customGreet);
//TASK29
function* messageGenerator() {
    yield "Hello!";
    yield "Welcome to JavaScript generators.";
    yield "Goodbye!";
}
const generator = messageGenerator();
console.log(generator.next().value); 
console.log(generator.next().value); 
console.log(generator.next().value);
//TASK30
function* messageGenerator1() {
  yield "First Message: Hello!";
  yield "Second Message: How are you?";
  yield "Third Message: Goodbye!";
}
const messenger = messageGenerator1();

for (const msg of messenger) {
  console.log(msg); 
}
//TASK31
function* numberGenerator() {
    let i = 1;
    while (true) {
        yield i;
        i++;
    }
}
const infiniteNumbers = numberGenerator();
console.log(infiniteNumbers.next().value);
console.log(infiniteNumbers.next().value);
console.log(infiniteNumbers.next().value);
//TASK32
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const mergedArray = [...array1, ...array2];

console.log(mergedArray);
//TASK33
const original = {
    name: "John",
    age: 25,
    city: "New York"
};
const cloned = {
    ...original,
    age: 30
};
console.log(cloned);
//TASK34
const array11 = [1, 2];
const array22 = [3, 4];
const array33 = [5, 6];
const mergedArray1 = [...array11, ...array22, ...array33, 7, 8];

console.log(mergedArray);
//TASK35
function sumall(...numbers) {
  let total = 0;

  for (let num of numbers) {
    total += num;
  }

  return total;
}
console.log(sumall(1, 2));            
console.log(sumall(10, 20, 30, 40));   
console.log(sumall(5, 5, 5, 5, 5, 5)); 
//TASK36
function displayProfile(name, age, ...hobbies) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  if (hobbies.length > 0) {
    console.log("Extra Info (Hobbies):", hobbies.join(", "));
  } else {
    console.log("No extra hobbies provided.");
  }
}
displayProfile("Alice", 25);
displayProfile("Bob", 30, "Cycling", "Painting", "Coding", "Cooking");
//TASK37
function findMax(...numbers) {
    return Math.max(...numbers);
}
console.log(findMax(5, 12, 8, 20, 3));
console.log(findMax(1, 2, 3));
//TASK38
function getDayName(dayNumber) {
  let day;

  switch (dayNumber) {
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    case 7:
      day = "Sunday";
      break;
    default:
      day = "Invalid day! Please enter a number between 1 and 7.";
  }

  return day;
}

console.log(getDayName(1));
console.log(getDayName(5)); 
console.log(getDayName(9));
//TASK39
function Calculator(num1, num2, operator) {
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 !== 0 ? num1 / num2 : "Error: Division by zero";
      break;
    default:
      result = "Invalid Operator! Please use +, -, *, or /";
  }

  return result;
}
console.log(Calculator(10, 5, "+"));
console.log(Calculator(20, 4, "/")); 
console.log(Calculator(7, 3, "%"));
//TASK40
function getGrade(score) {
  switch (true) {
    case (score >= 90):
      return "A";
    case (score >= 75):
      return "B";
    case (score >= 50):
      return "C";
    default:
      return "Fail";
  }
}
console.log(getGrade(77));
console.log(getGrade(45));

function getGrade1(score) {
  if (score >= 90) {
    return "Grade: A";
  } else if (score >= 75) {
    return "Grade: B";
  } else if (score >= 50) {
    return "Grade: C";
  } else {
    return "Grade: Fail";
  }
}

console.log(getGrade1(95));
console.log(getGrade1(80)); 
console.log(getGrade1(45)); 



