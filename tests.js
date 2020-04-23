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
    it('sayHello(true) should return "Hello, World!" when passed boolean inputs.', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('sayHello(false) should return "Hello, World!" when passed boolean inputs.', function() {
        expect(sayHello(false)).toBe("Hello, World!");
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