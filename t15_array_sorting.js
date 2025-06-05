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
    alert (message);
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
if (askUSERmoney == 1){
    alert("You can afford a Mars Bar")
}
if (askUSERmoney == 2){
    alert("You can afford a Moro Bar")
}
if (askUSERmoney == 3){
    alert("You can afford a King Size Crunchy")
}
if (askUSERmoney == 4){
    alert("You can afford a Dairy Milk Block")
}
if (askUSERmoney == 5){
    alert("You can afford a Lindt Block")
}
}

let menu = ["Mars Bar", "Moro Bar", "King Size Crunchy", "Dairy Milk Block", "Lindt Block"];
let menuPRICE = ["1", "2", "3", "4", "5"];

let message = "Welcome to my shop, here are a list of things you can buy:"
for (i = 0; i < menu. length; i++){
    message = message + "\nFood " + (i + 1) + " is " + menu[i] + " it is $" + menuPRICE[i];
}
