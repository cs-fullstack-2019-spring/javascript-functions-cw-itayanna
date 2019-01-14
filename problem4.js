//this function checks to see if the password set is correct
function checkPassword(x,y) {
    if (x==y){
        return console.log("True");
    }
    else {
        return console.log("False")
    }
}

var pwd="yolo";
var guess=prompt("Enter password. Hint: You only live once.");
// function is called and prints false if paswords don't match and true if they do
checkPassword(guess,pwd);