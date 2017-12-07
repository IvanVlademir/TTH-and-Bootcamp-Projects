/*Ask at least five questions
Keep track of the number of questions the user answered correctly
Provide a final message after the quiz letting the user know the number of questions he or she got right.
Rank the player.If the player answered all five correctly, give that player the gold crown: 3 - 4 is a silver crown; 1 - 2 correct answers is a bronze crown and 0 correct is no crown at all.*/

//Start Quiz
var correct = 0;

//questions
var q1 = prompt("Is a cell a living unit?");
if (q1.toUpperCase() === "YES") {
correct += 1;
}
var q2 = prompt("Is Mozart still alive?");
if (q2.toUpperCase() === 'NO') {
    correct += 1;
}
var q3 = prompt("PNS stands for Pivotal Nervous System?");
if (q3.toUpperCase() === 'NO') {
    correct += 1;
}
var q4 = prompt("Is pizza a national food dish?");
if (q4.toUpperCase() === 'NO') {
    correct += 1;
}
var q5 = prompt("Avogrados number is 3.14");
if (q5.toUpperCase() === 'NO') {
    correct += 1;
}

//show quic results
document.write("<h2>You got " + correct + " out of 5.</h2>");

//show rank
if (correct === 5) {
    document.write("<p>You got <strong>GOLD</strong></p>");
} else if (correct >= 3) {
    document.write("<p>You got <strong>SILVER</strong></p>");
} else if (correct >= 2) {
    document.write("<p>You got <strong>BRONZE</strong></p>");
} else {
    document.write("<p>You fail, retake.</p>")
}