/*************************
Name of task: Arrays sorting
Author: Jackson
Date: 05/06/25
*************************/
console.log("Running T15_arrays_sorting.js");

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
while (askUSERmoneyinvalid == true) {
        askUSERmoney = prompt("How much pocket money do you have from 1 to 5?");
        if (askUSERmoney == "" || askUSERmoney == " " || askUSERmoney == null || isNaN(askUSERmoney)) {
         alert("Error! How much pocket money do you have from 1 to 5")
        } else {
            askUSERmoneyinvalid = false;
        }
}
}
let menu = ["Mars Bar", "Moro Bar", "King Size Crunchy", "Dairy Milk Block", "Lindt Block"];
let message = "Welcome to my shop"