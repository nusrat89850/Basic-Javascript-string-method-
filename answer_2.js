/*Write a JavaScript program that takes a user's name and then displays a greeting message 
using string concatenation. The program should ensure that any whitespace in the user's input is 
removed before concatenation.*/
var greet="Hello, ";
var name = prompt("Name:");
let nametrim=name.trim();
var result=greet.concat(nametrim);

console.log(result); 