/*************************
Name of task: Validation
Author: Jackson
Date: 03/06/25
*************************/
console.log("Running T13-validation.js");

//Variables
askUSERnameinvalid = true
askUSERageinvalid = true
askUSERmoneyinvalid = true
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
askUSERmoney= prompt("How much pocket money do you have from 1 to 5")
while (askUSERmoneyinvalid == true) {
        askUSERmoney = prompt("How much pocket money do you have from 1 to 5?");
        if (askUSERmoney == "" || askUSERmoney == " " || askUSERmoney == null || isNaN(askUSERmoney)) {
         alert("Error! How much pocket money do you have from 1 to 5")
        } else {
            askUSERmoneyinvalid = false;
        }
}
if (askUSERmoney = 1){
    alert("You can afford a Mars Bar")
}
if (askUSERmoney = 2){
    alert("You can afford a Moro Bar")
}
}
