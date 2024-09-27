/*Write a JavaScript program that checks if a given email address belongs to Yahoo. The program 
should be case-insensitive and print a message indicating whether the email is a Yahoo address or not.*/
var mail="nusratZaHan@yahoo.coM";
var mail_address=mail.toLowerCase();
console.log(mail_address);
let include = mail_address.includes("@yahoo.com");
console.log(include);
if (include==true){
    console.log("The email is a Yahoo address");
}
else{
    console.log("The email is not a Yahoo address");
}
