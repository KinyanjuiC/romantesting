const romanToInt = require('./RomanNumeral');

test('Single letters', () => {
    expect(romanToInt('I')).toBe(1);
    expect(romanToInt('V')).toBe(5);
    expect(romanToInt('X')).toBe(10);
    expect(romanToInt('L')).toBe(50);
    expect(romanToInt('C')).toBe(100);
    expect(romanToInt('D')).toBe(500);
    expect(romanToInt('M')).toBe(1000);
});

test('Multiple letters', () => {
    expect(romanToInt('XI')).toBe(11);
});

test('Subtractive notation', () => {
    expect(romanToInt('IV')).toBe(4);
    expect(romanToInt('XIV')).toBe(14);
});

test('Repetition', () => {
    expect(romanToInt('II')).toBe(2);
});

test('Invalid letter', () => {
    expect(() => romanToInt('Z')).toThrow('Invalid Roman numeral character: Z');
});

test('Invalid and valid letter', () => {
    expect(() => romanToInt('XIZ')).toThrow('Invalid Roman numeral character: Z');
});

test('Invalid repetition', () => {
    expect(() => romanToInt('VV')).toThrow('Invalid repetition of Roman numeral character: V');
});

test('Null input', () => {
    expect(() => romanToInt(null)).toThrow('Input string is null');
});