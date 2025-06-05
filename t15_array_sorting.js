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

let menu = ["Mars Bar", "Moro Bar", "King Size Crunchy", "Dairy Milk Block", "Lindt Block"];
let message = "Welcome to my shop, here are a list of things you can buy:"
for (i = 0; i < menu. length; i++){
    message = message + "\nFood" + i + " is" + menu[i]
}
alert (message)