/*************************
Name of task: Validation
Author: Jackson
Date: 29/05/25
*************************/
console.log("Running t13_validation.js");

//Variables

/**************************
Main code
*************************/
function start() {
    askUSERname();
    askUSERage();
    askUSERmoney ();
}
/**************************
Functions
*************************/
function askUSERname () {
askUSERname= prompt("What is your name?");
alert("Hi " + askUSERname + "!")
} 
function askUSERage () {
askUSERage= prompt("How old are you?");
alert("You are " + askUSERage + " years old")
} 
function askUSERmoney () {
askUSERmoney= prompt("How much pocket money do you have?");
if (askUSERmoney < 4){
alert("You can't afford a bar of chocolate")
}
if (askUSERmoney > 4){
    alert("You can afford a chocolate bar")
}
} 