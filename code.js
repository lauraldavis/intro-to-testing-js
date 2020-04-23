// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// sayHello function
function sayHello(input) {
    return ( typeof input === "string" && isNaN(parseFloat(input)) && input !== "" ) ? "Hello, " + input + "!" : "Hello, World!";
}

function isFive(input) {
    return (input == 5 && (typeof input === "number" || typeof input === "string"));
}