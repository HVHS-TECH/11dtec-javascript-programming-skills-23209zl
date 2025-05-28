/*************************
Name of task: While loop
Author: Jackson
Date: 28/05/25
*************************/
console.log("Running T12_while_loop.js");

//Variables
askUSERnameinvalid = true

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
    while(askUSERnameinvalid == true){
askUSERname= prompt("What is your name?");
if(askUSERname == "" || askUSERname == " " || askUSERname == null){
} else {
askUSERageinvalid = false
}askUSERname= prompt("What is your name?");
} 
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