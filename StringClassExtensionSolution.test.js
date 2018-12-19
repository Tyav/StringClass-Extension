require('./StringClassExtensionSolution');

describe('Test for hasVowels', () => {
    test('A simple case where no vowel exist', () => {
        expect('whtdsn'.hasVowels()).toBeFalsy();
    });
    test('A simple case where Vowel is both upper and lower', () => {
        expect('Amidso'.hasVowels()).toBeTruthy();
    });
});
describe('Test for toUpper', () => {
    test('A simple case where all the characters are lower', () => {
        expect('james'.toUpper()).toBe('JAMES');
    });
    test('A case where the first character is upper', () => {
        expect('Amidso'.toUpper()).toBe('AMIDSO');
    });
    test('A case where some of the characters are lower', () => {
        expect('MowSer'.toUpper()).toBe('MOWSER');
    });
    test('A case where there are none alpha characters in the string', () => {
        expect('53j-t4ie3s'.toUpper()).toMatch(/^53J-T4IE3S$/)
    })
});
describe('Test for toLower', () => {
    test('A simple case where all the characters are Upper', () => {
        expect('RASHEED'.toLower()).toBe('rasheed');
    });
    test('A case where the first character is upper', () => {
        expect('Funke'.toLower()).toBe('funke');
    });
    test('A case where some of the characters are upper', () => {
        expect('MowSer'.toLower()).toBe('mowser');
    });
    test('A case where there are none alpha characters in the string', () => {
        expect('45 REhe-re7'.toLower()).toMatch(/^45\srehe-re7$/)
    })
});
