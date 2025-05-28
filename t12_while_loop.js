/*************************
Name of task: While loop
Author: Jackson
Date: 28/05/25
*************************/
console.log("Running T12_while_loop.js");

//Variables
askUSERnameinvalid = true
askUSERageinvalid = true
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
function askUSERname() {
    while (askUSERnameinvalid == true) {
        askUSERname = prompt("What is your name?");
        if (askUSERname == "" || askUSERname == " " || askUSERname == null || !isNaN(askUSERname)) {
alert("Error! What is your name?")
        } else {
            askUSERnameinvalid = false
        }
    }
    alert("Hi " + askUSERname + "!")
}
function askUSERage () {
 while (askUSERageinvalid == true) {
        askUSERage = prompt("How old are you?");
        if (askUSERage == "" || askUSERage == " " || askUSERage == null || isNaN(askUSERage)) {
         alert("Error! How old are you?")
        } else {
            askUSERageinvalid = false
        }
}
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