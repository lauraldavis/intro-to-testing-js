// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// sayHello function
function sayHello(input) {
    return (typeof input === "string" && isNaN(parseFloat(input)) && input !== "") ? "Hello, " + input + "!" : "Hello, World!";
}

// isFive function
function isFive(input) {
    return (typeof input === "number" || typeof input === "string") && input == 5;
}

// isEven function
function isEven(input) {
    return (typeof input === "number" || typeof input === "string") && parseFloat(input) % 2 === 0;
}

// isVowel function
function isVowel(input) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    return (typeof input === "string" && (vowels.indexOf(input.toLowerCase()) > -1));
}

// add function
function add(input1, input2) {
    return (
        (typeof input1 === "number" || typeof input1 === "string") &&
        (typeof input2 === "number" || typeof input2 === "string")
    ) ?
        parseFloat(input1) + parseFloat(input2) :
        "NaN";
}
