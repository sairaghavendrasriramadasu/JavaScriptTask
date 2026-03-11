//TASK 1: var Variable Practice
        var name = "sai";
        var age = 22;
        var city = "Hyderabad";
        console.log("Name: " + name);
        console.log("Age: " + age);
        console.log("City: " + city);
        var name = "raghavendra"; // Reassigning the variable
        console.log("Updated Name: " + name);
        var age = 25; // Reassigning the variable
        console.log("Updated Age: " + age);
        //TASK 2: let Variable Practice
        let name1 = "Sai Raghavendra";
        console.log("Name: " + name1);
        //let name1 = "RaghavendraSai"; // This will cause an error
        //console.log("Updated Name: " + name1);
        //TASK 3: const Variable Practice
        const Birthyear = 2001;
        console.log("Birth Year: " + Birthyear);
        // Birthyear = 2000; // This will cause an error
        // console.log("Updated Birth Year: " + Birthyear);
        // TASK4: var Re-declaration
        var a = "10";
        console.log("Value of a: " + a);
        var a = "20"; // Re-declaration is allowed with var
        console.log("Updated Value of a: " + a);
        // TASK5:let Re-declaration
        let b = "Hello";
        console.log("Value of b: " + b);
        // let b = "World"; // This will cause an error
        // console.log("Updated Value of b: " + b);
        //TASK 6: console.log() Practice
        //Print the following using console.log():
        console.log("Name: " + name);
        console.log("Age: " + age);
        console.log("City: " + city);
        console.log(100);
        console.log("JavaScript is fun");
        // TASK7: alert() Practice
        alert("Welcome to JavaScript!");
        //TASK8: confirm() Practice
        var userResponse = confirm("Do you like Coding?");
        console.log("User Response: " + userResponse);
        //TASK9: prompt() Practice
        var userName = prompt("Please enter your name:");
        console.log("User Name: " + userName);
        //TASK10: console.warn() Practice
        console.warn("This is a warning message!");
        //TASK11: console.error() Practice
        console.error("This is an error message!");
        // TASK12: console.clear() Practice
        console.clear();
        //TASK13: document.writeln() Practice
        document.writeln("SAI RAGHAVENDRA");
        //TASK14: User Name Collection
        var userName = prompt("Please enter your name:");
        alert("Hello, " + userName + "!");
        console.log("User Name: " + userName);
        //TASK15: Age Collection
        var userAge = prompt("Please enter your age:");
        console.log("User Age:", userAge);
        document.writeln("Your age is: " + userAge);
        //TASK16: Breakfast Confirmation
        const hadBreakfast = confirm("Have you had breakfast?");
        console.log("Had breakfast:", hadBreakfast);
        //TASK17: Simple Variable Creation
        var city = "Mumbai";
        let country = "India";
        const planet = "Earth";
        console.log("City: " + city);
        console.log("Country: " + country);
        console.log("Planet: " + planet);
        //TASK18: Variable Reuse Practice    
        let myNumber = 5;
        console.log("Initial value:", myNumber);
        myNumber = 10;
        console.log("Updated value:", myNumber);
        myNumber = 15;
        console.log("Final value:", myNumber);
        //TASK19: Multiple console Methods
        console.log("This is a standard log message for general information.");
        console.warn("This is a warning message.");
        console.error("This is an error message indicating a problem that needs attention.");
        //TASK20: User Details Collection
        const userName1 = prompt("What is your name?");
        let userAge1 = prompt("How old are you?");
        var isStudent = confirm("Are you a student?");
        console.log("Name:",    userName1);
        console.log("Age:", userAge1);
        console.log("Student Status:", isStudent);  
        alert("Welcome, " + userName1 + "! Thank you for providing your details.");
        //TASK21: Simple Welcome Program
        console.clear();
        alert("Hello!");
        const userName2 = prompt("What is your name?");
        alert("Welcome " + userName2);
        document.writeln("<h1>Welcome to the site, " + userName2 + "!</h1>");
        // TASK22: Variable Inside Block
    {
          var a = 100
          let b = 200
          const c = 300
     } 

        console.log(a) // Output: 100
        console.log(b) // Error: b is not defined
        console.log(c) // Error: c is not defined
        //TASK23: Simple Number Storage
        var myNumber0 = 42;
        let myNumber2 = 20;
        const myNumber3 = 100;
        console.log("myNumber0:", myNumber0);
        console.log("myNumber2:", myNumber2);
        console.log("myNumber3:", myNumber3);
        //TASK24: User Response Logger
        const likesJS = confirm("Do you like JavaScript?");
        console.log("User likes JavaScript:", likesJS);
        console.warn("Response (warning):", likesJS);
        console.error("Response (error):", likesJS);
        //TASK25: Name Display on Webpage
        const userName3 = prompt("Please enter your name:");
        document.writeln("Your name is: " + userName3);
        console.log("Your name is: " + userName3);
        //TASK26: Age Display with All Methods
        let userAge3 = prompt("Please enter your age:");
        alert("Your age is: " + userAge3);
        console.log("User Age:", userAge3);
        document.writeln("Age recorded: " + userAge3);
        //TASK27: var vs let Comparison
        var x = 10;
        let y = 20;
        console.log("x"); // Output: 10
        console.log("y"); // Output: 20
        //TASK28: Simple Confirmation
        const isAdult = confirm("Are you 18+?");
        if (isAdult) {
        console.log("Adult");
        } else {
        console.warn("Minor");
       } 
       //TASK29: Variable Re-initialization
       var fruit = "Apple";
       var fruit = "Banana";
       let vehicle1 = "Car";
       vehicle1 = "Bike";
       console.log("Final Fruit:", fruit);
       console.log("Final Vehicle:", vehicle1);
       //TASK30: Complete Basic Practice
       console.clear();
       alert("Practice Start");
       const userName4 = prompt("What is your name?");
       let userAge4 = prompt("How old are you?");
       var isHappy4 = confirm("Are you happy?");
       console.log("User Name (const):", userName4);
       console.log("User Age (let):", userAge4);
       console.log("Happiness Status (var):", isHappy4);
       alert("Practice End");
       document.writeln("<h1>Thank You</h1>");