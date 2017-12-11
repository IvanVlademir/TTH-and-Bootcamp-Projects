// Story telling app

var a = prompt("What is your name?");
var b = prompt("What is your favorite food?");
var c = prompt("What is your favorite color?");
var d = prompt("What is your favorite hobby?");
var e = prompt("What is your favorite movie?");
var f = prompt("What is your favorite music genre?");
var g = prompt("What is your favorite TV show?");
alert("All done. Ready for the story?");

// My name is _. I love to _. I went to _ to get a _ when I was listening to _. Sometimes I like to _ and end the day with _.

var story = "<h2>My name is " + a;
story += ". I love to " + b;
story += ". I went to " + c;
story += " to get a " + d;
story += " when I was listening to " + e;
story += ". Sometimes I like to " + f;
story += " and end the day with " + g + ".</h2>";

document.write(story);

