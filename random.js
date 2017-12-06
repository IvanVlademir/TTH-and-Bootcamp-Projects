// See if you can build a program that collects a number from a user, then prints out a random number from 1 to the number the user selects. Now is the opportunity to practice using some of the commands you learned in this course.
    // Don't forget some commands you've learned so far!
        // prompt() dialogue to collect user input
        // parseInt() function to convert the input to an integer
        // Math.random() method to create a random number

var input1 = prompt("Please type any number");
var num1 = parseInt(input1);
var input = prompt("Please type another number");
var num2 = parseInt(input);
var randomNumber = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
var message = "<p>" + randomNumber + "  is a number between " + num1 + " and " + num2 + ".</p>";
document.write(message);

