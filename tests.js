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

/* Example unit tests for the isNumeric function
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
        expect(sayHello()).toBe("Hello, Jane!");
    });
});