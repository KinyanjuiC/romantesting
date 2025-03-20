const romanToInt = require('./RomanNumeral');

// Test conversion of single Roman numeral characters
test('Single letters', () => {
    expect(romanToInt('I')).toBe(1);
    expect(romanToInt('V')).toBe(5);
    expect(romanToInt('X')).toBe(10);
    expect(romanToInt('L')).toBe(50);
    expect(romanToInt('C')).toBe(100);
    expect(romanToInt('D')).toBe(500);
    expect(romanToInt('M')).toBe(1000);
});

// Test conversion of multiple Roman numeral characters
test('Multiple letters', () => {
    expect(romanToInt('XI')).toBe(11);
});

// Test conversion of Roman numerals with subtractive notation
test('Subtractive notation', () => {
    expect(romanToInt('IV')).toBe(4);
    expect(romanToInt('XIV')).toBe(14);
});

// Test conversion of repeated Roman numeral characters
test('Repetition', () => {
    expect(romanToInt('II')).toBe(2);
});

// Test conversion of an invalid Roman numeral character
test('Invalid letter', () => {
    expect(() => romanToInt('Z')).toThrow('Invalid Roman numeral character: Z');
});

// Test conversion of a string with both valid and invalid Roman numeral characters
test('Invalid and valid letter', () => {
    expect(() => romanToInt('XIZ')).toThrow('Invalid Roman numeral character: Z');
});

// Test conversion of a string with invalid Roman numeral repetition
test('Invalid repetition', () => {
    expect(() => romanToInt('VV')).toThrow('Invalid repetition of Roman numeral character: V');
});

// Test conversion of a null string
test('Null input', () => {
    expect(() => romanToInt(null)).toThrow('Input string is null');
});