package org.example;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import org.junit.jupiter.api.Test;

public class TestRomantoInteger {

    @Test
    public void testSingleLetters() {
        RomanNumeral rn = new RomanNumeral();
        System.out.println("Testing single letters...");
        assertEquals(1, rn.romanToInt("I"));
        assertEquals(5, rn.romanToInt("V"));
        assertEquals(10, rn.romanToInt("X"));
        assertEquals(50, rn.romanToInt("L"));
        assertEquals(100, rn.romanToInt("C"));
        assertEquals(500, rn.romanToInt("D"));
        assertEquals(1000, rn.romanToInt("M"));
    }

    @Test
    public void testMultipleLetters() {
        RomanNumeral rn = new RomanNumeral();
        System.out.println("Testing multiple letters...");
        assertEquals(11, rn.romanToInt("XI"));
    }

    @Test
    public void testSubtractiveNotation() {
        RomanNumeral rn = new RomanNumeral();
        System.out.println("Testing subtractive notation...");
        assertEquals(4, rn.romanToInt("IV"));
        assertEquals(14, rn.romanToInt("XIV"));
    }

    @Test
    public void testRepetition() {
        RomanNumeral rn = new RomanNumeral();
        System.out.println("Testing repetition...");
        assertEquals(2, rn.romanToInt("II"));
    }

    @Test
    public void testFirstNumber() {
        RomanNumeral rn = new RomanNumeral();
        System.out.println("Testing first number...");
        assertEquals(1, rn.romanToInt("I"));
    }

    @Test
    public void testInvalidLetter() {
        RomanNumeral rn = new RomanNumeral();
        System.out.println("Testing invalid letter...");
        assertThrows(IllegalArgumentException.class, () -> {
            rn.romanToInt("Z");
        });
    }

    @Test
    public void testInvalidAndValidLetter() {
        RomanNumeral rn = new RomanNumeral();
        System.out.println("Testing invalid and valid letter...");
        assertThrows(IllegalArgumentException.class, () -> {
            rn.romanToInt("XIZ");
        });
    }

    @Test
    public void testNotValid() {
        RomanNumeral rn = new RomanNumeral();
        System.out.println("Testing not valid...");
        assertThrows(IllegalArgumentException.class, () -> {
            rn.romanToInt("VV");
        });
    }

    @Test
    public void testNull() {
        RomanNumeral rn = new RomanNumeral();
        System.out.println("Testing null...");
        assertThrows(NullPointerException.class, () -> {
            rn.romanToInt(null);
        });
    }
}