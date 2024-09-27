/*Write a JavaScript program that uses template literals to create a dynamic message. 
The program should take the user's favorite programming language, their name, and the year they started 
learning it as inputs. Then, display a message that includes this information, formatted across multiple lines.*/
var name = prompt("Your name:");
let programming_language = prompt("Favorite programming language:");
let learning_year = prompt("Started learning year:");
console.log(name+ ", you have been coding in " +programming_language+ " since " +learning_year);