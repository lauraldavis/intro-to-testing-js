// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// sayHello function
function sayHello(input) {
        if ( typeof input === "string" && isNaN(parseFloat(input)) && input !== "" ) {
            return "Hello, " + input + "!";
        } else {
            return "Hello, World!";
        }
}

function isFive(input) {
    return input == 5;
}