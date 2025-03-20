const romanToInt = (s) => {
    if (s === null) {
        throw new Error("Input string is null");
    }

    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let convertedNumber = 0;
    let count = 1; // Counter for repetitions

    for (let i = 0; i < s.length; i++) {
        const currentChar = s.charAt(i);
        // Check if the character is a valid Roman numeral
        if (!map.hasOwnProperty(currentChar)) {
            throw new Error(`Invalid Roman numeral character: ${currentChar}`);
        }
        const currentNumber = map[currentChar];
        // Get the value of the next character, if it exists
        const next = i + 1 < s.length ? map[s.charAt(i + 1)] : 0;

        // Check for invalid repetitions
        if (i > 0 && currentChar === s.charAt(i - 1)) {
            count++;
            if (count > 3 || (currentNumber === 5 || currentNumber === 50 || currentNumber === 500)) {
                throw new Error(`Invalid repetition of Roman numeral character: ${currentChar}`);
            }
        } else {
            count = 1;
        }

        // If the current value is less than the next value, subtract it from the total
        if (currentNumber < next) {
            convertedNumber -= currentNumber;
        } else {
            // Otherwise, add it to the total
            convertedNumber += currentNumber;
        }
    }

    return convertedNumber;
};

module.exports = romanToInt;