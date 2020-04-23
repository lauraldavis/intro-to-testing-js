// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// sayHello function
function sayHello(input) {
        if (input === undefined || typeof input !== "string") {
            return "Hello, World!";
        } else {
            return "Hello, " + input + "!";
        }
}
