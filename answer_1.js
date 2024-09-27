// Write a program to check if a sentence has the word "Hello" using the search method.
let greet="Hello, how are you?"

let searchValue = greet.search("Hello");
if (searchValue !== -1) {
    console.log("Hello has been found");
}
else{
    console.log("Hello has not been found");
}