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
describe('Test for ucFirst', () => {
    test('A simple case where all the characters are Upper', () => {
        expect('RASHEED'.ucFirst()).toBe('RASHEED');
    });
    test('A case where the first character is upper', () => {
        expect('Tunde'.ucFirst()).toBe('Tunde');
    });
    test('A case where some of the characters are upper but first is lower', () => {
        expect('mowSer'.ucFirst()).toBe('MowSer');
    });
    test('A case where first character is none alpha', () => {
        expect('5hew'.ucFirst()).toMatch(/^5hew$/)
    });
    test('A case where there are none alpha characters in the string', () => {
        expect('5N734'.ucFirst()).toBe('5N734')
    });
});
describe('Test for isQuestion', () => {
    test('A simple case of a regular Question', () => {
        expect('Are you a boy?'.isQuestion()).toBe(true);
    });
    test('A case where there is no ?', () => {
        expect('I am ready'.isQuestion()).toBeFalsy();
    });
    test('A case where there is a none alpha character', () => {
        expect("I'm the owner, am I not?".isQuestion()).toBe(true);
    });
    test('A case where the ? is within the statement', () => {
        expect('i am the ? regular'.isQuestion()).toBe(false)
    });
});