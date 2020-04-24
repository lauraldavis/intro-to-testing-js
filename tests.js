// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

/* Example of building unit tests for the isNumeric function
describe('isNumeric', function() {
    it('should be a defined function', function() {
        expect(typeof isNumeric).toBe('function');
    });
    it('should return a boolean value when called', function() {
        expect(typeof isNumeric()).toBe("boolean");
    });
    it('should return true when a numeric value parameter is passed', function() {
        expect(helloWorld(2)).toBe(false);
    });
    it('should return false when a boolean true parameter is passed', function() {
        expect(helloWorld(true)).toBe(false);
    });
    it("should return true when a number (including a numeric string) parameter is passed", function() {
        expect(helloWorld("5")).toBe(true);
    });
});
 */

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('sayHello("Jane") should return "Hello, Jane!".', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('sayHello("Alex") should return "Hello, Alex!".', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('sayHello("Pat") should return "Hello, Pat!".', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('sayHello() should return "Hello, World!" when passed no input.', function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('sayHello(true) should return "Hello, World!" when passed a boolean input.', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('sayHello(null) should return "Hello, World!" when passed null as input.', function() {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it('sayHello(24) should return "Hello, World!" when passed 24 as input.', function() {
        expect(sayHello(24)).toBe("Hello, World!");
    });
    it('sayHello("24") should return "Hello, World!" when passed "24" as input.', function() {
        expect(sayHello("24")).toBe("Hello, World!");
    });
    it('sayHello("3.5") should return "Hello, World!" when passed "3.5" as input.', function() {
        expect(sayHello("3.5")).toBe("Hello, World!");
    });
    it('sayHello("") should return "Hello, World!" when passed an empty string ("") as input.', function() {
        expect(sayHello("")).toBe("Hello, World!");
    });
    it('sayHello(["a","b","c"]) should return "Hello, World!" when passed an array as input.', function() {
        expect(sayHello(["a","b","c"])).toBe("Hello, World!");
    });
    it('sayHello({}) should return "Hello, World!" when passed an object as input.', function() {
        expect(sayHello({})).toBe("Hello, World!");
    });
});

describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean value when called', function() {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return true when passed 5 as input', function() {
       expect(isFive(5)).toBe(true);
    });
    it('should return true when passed "5" as input', function() {
        expect(isFive("5")).toBe(true);
    });
    it('should return false when passed a boolean as input', function() {
        expect(isFive(true)).toBe(false);
    });
    it('should return false when passed 55 as input', function() {
        expect(isFive(55)).toBe(false);
    });
    it('should return false when passed null as input', function() {
        expect(isFive(null)).toBe(false);
    });
    it('should return false when passed an array as input', function() {
        expect(isFive([5])).toBe(false);
    });
    it('should return false when passed an object as input', function() {
        expect(isFive({count: 5})).toBe(false);
    });
    it('should return false when called without any input', function() {
        expect(isFive()).toBe(false);
    });
    it('should return false when passed "" as input', function() {
        expect(isFive("")).toBe(false);
    });
});

describe('isEven', function() {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean value when called', function() {
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return true when passed 2 as input', function() {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when passed -4 as input', function() {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when passed 3 as input', function() {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when passed "banana" as input', function() {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when passed "8" as input', function() {
        expect(isEven(8)).toBe(true);
    });
    it('should return false when passed Infinity as input', function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when passed a boolean as input', function() {
        expect(isEven(true)).toBe(false);
    });
    it('should return false when passed no input', function() {
        expect(isEven()).toBe(false);
    });
    it('should return false when passed null as input', function() {
        expect(isEven(null)).toBe(false);
    });
    it('should return false when passed "" input', function() {
        expect(isEven("")).toBe(false);
    });
    it('should return false when passed an array as input', function() {
        expect(isEven([6])).toBe(false);
    });
    it('should return false when passed an object as input', function() {
        expect(isEven({6:6})).toBe(false);
    });
    it('should return true when passed 0 as input', function() {
        expect(isEven(0)).toBe(true);
    });
    it('should return false when passed 4.8 as input', function() {
        expect(isEven(4.8)).toBe(false);
    });
});

describe('isVowel', function() {
    it('should be a defined function', function() {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean value when called', function() {
        expect(typeof isVowel()).toBe("boolean");
    });
    it('should return true when passed "a" as input', function() {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true when passed "A" as input', function() {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false when passed "y" as input', function() {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when passed 4 as input', function() {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when passed a boolean as input', function() {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false when passed a boolean as input', function() {
        expect(isVowel(false)).toBe(false);
    });
    it('should return false when passed "banana" as input', function() {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false when passed no input', function() {
        expect(isVowel()).toBe(false);
    });
    it('should return false when passed "" as input', function() {
        expect(isVowel("")).toBe(false);
    });
    it('should return false when passed null as input', function() {
        expect(isVowel(null)).toBe(false);
    });
    it('should return false when passed an array as input', function() {
        expect(isVowel(["a","e","i","o","u"])).toBe(false);
    });
    it('should return false when passed an object as input', function() {
        expect(isVowel({vowel: "a"})).toBe(false);
    });
    it('should return true when passed "E" as input', function() {
        expect(isVowel("E")).toBe(true);
    });
    it('should return false when passed "b" as input', function() {
        expect(isVowel("b")).toBe(false);
    });
});

describe('add', function() {
    it('should be a defined function', function() {
        expect(typeof add).toBe('function');
    });
    it('should return 5 when passed (2, 3) as input', function() {
        expect(add(2, 3)).toBe(5);
    });
    it('should return -12 when passed (-3, -9) as input', function() {
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return 11 when passed ("5", 6) as input', function() {
        expect(add("5", 6)).toBe(11);
    });
    it('should return 6 when passed ("-4", 10) as input', function() {
        expect(add("-4", 10)).toBe(6);
    });
    it('should return NaN when passed ("banana", "split") as input', function() {
        expect(isNaN(add("banana", "split"))).toBe(true);
    });
    it('should return NaN when passed (2, "apples") as input', function() {
        expect(isNaN(add(2, "apples"))).toBe(true);
    });
    it('should return NaN when passed no input', function() {
        expect(isNaN(add())).toBe(true);
    });
    it('should return 5 when passed (1.5, 3.5) as input', function() {
        expect(add(1.5, 3.5)).toBe(5);
    });
    it('should return NaN when passed a boolean as an input', function() {
        expect(isNaN(add(true, 2))).toBe(true);
    });
    it('should return NaN when passed a null as an input', function() {
        expect(isNaN(add(null, 2))).toBe(true);
    });
    it('should return NaN when passed "" as an input', function() {
        expect(isNaN(add("", 2))).toBe(true);
    });
    it('should return NaN when passed an array as an input', function() {
        expect(isNaN(add(2, [2,1]))).toBe(true);
    });
    it('should return NaN when passed an object as an input', function() {
        expect(isNaN(add(2, {id:2}))).toBe(true);
    });
});