// Score

var score = 0;

// Question 1

var question1 = prompt("1/5 - Who was Queen' singer?");
var response1 = "freddie mercury"


if (question1.toLowerCase() === response1 || question1.toLowerCase() === "freddie") {
  document.write("<p><strong>1. Who was Queen' singer?</strong></p>");
  document.write("<p>Yes! Queen' singer was indeed " + response1.toUpperCase() +".</p>");
  score += 1;
} else {
  document.write("<p><strong>1. Who was Queen' singer?</strong></p>");
  document.write("<p>Sorry, but <strong>" + question1 + "</strong> was not Queen' singer. " + response1.toUpperCase() +" was.</p>");
}

// Question 2

var question2 = prompt("2/5 - Who was Queen' bass player?");
var response2 = "john deacon"

if (question2.toLowerCase() === response2 || question2.toLowerCase() === "john") {
  document.write("<p><strong>2. Who was Queen's bass player?</strong></p>");
  document.write("<p>Yes! Queen's bass player was indeed " + response2.toUpperCase() +".</p>");
  score += 1;
} else {
  document.write("<p><strong>2. Who was Queen's bass player?</strong></p>");
  document.write("<p>Sorry, but <strong>" + question2 + "</strong> was not Queen's bass player. " + response2.toUpperCase() +" was.</p>");
}

// Question 3

var question3 = prompt("3/5 - Who was Queen's guitarist?");
var response3 = "brian may"

if (question3.toLowerCase() === response3 || question3.toLowerCase() === "brian") {
  document.write("<p><strong>3. Who was Queen's guitarist?</strong></p>");
  document.write("<p>Yes! Queen's guitarist was indeed " + response3.toUpperCase() +".</p>");
  score += 1;
} else {
  document.write("<p><strong>3. Who was Queen's guitarist?</strong></p>");
  document.write("<p>Sorry, but <strong>" + question3 + "</strong> was not Queen's guitarist. " + response3.toUpperCase() +" was.</p>");
}

// Question 4

var question4 = prompt("4/5 - Who was Queen's drummer?");
var response4 = "roger taylor"

if (question4.toLowerCase() === response4 || question4.toLowerCase() === "roger") {
  document.write("<p><strong>4. Who was Queen's drummer?</strong></p>");
  document.write("<p>Yes! Queen's drummer was indeed " + response4.toUpperCase() +".</p>");
  score += 1;
} else {
  document.write("<p><strong>4. Who was Queen's drummer?</strong></p>");
  document.write("<p>Sorry, but <strong>" + question4 + "</strong> was not Queen's drummer. " + response4.toUpperCase() +" was.</p>");
}

// Question 5

var question5 = prompt("5/5 - Who was Queen's fifth member?");
var response5 = "spike edney"

if (question5.toLowerCase() === response5 || question5.toLowerCase() === "spike") {
  document.write("<p><strong>5. Who was Queen's fifth member?</strong></p>");
  document.write("<p>Yes! Queen's fifth member was indeed " + response5.toUpperCase() +".</p>");
  score += 1;
} else {
  document.write("<p><strong>5. Who was Queen's fifth member?</strong></p>");
  document.write("<p>Sorry, but <strong>" + question5 + "</strong> was not Queen's fifth member. " + response5.toUpperCase() +" was.</p>");
}

// Score verification
document.write("<p>You got a total of " + score + " questions right!</p>");

// Crown

if (score === 5) {
  document.write("<p>Since you got " + score + " questions right, you get the <strong>gold medal</strong>!</p>");
} else if (score >= 3 && score <=4) {
  document.write("<p>Since you got " + score + " questions right, you get the <strong>silver medal</strong>!</p>");
} else if (score >= 1 && score <=2) {
  document.write("<p>Since you got " + score + " questions right, you get the <strong>bronze medal</strong>!</p>");
} else {
  document.write("<p>You didn't get any questions right. Better luck next time!</p>");
}
