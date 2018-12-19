require('./StringClassExtensionSolution');

describe('Test for Vowels', () => {
    test('A simple case where no vowel exist', () => {
        expect('whtdsn'.hasVowels()).toBeFalsy();
    });
    test('A simple case where Vowel is both upper and lower', () => {
        expect('Amidso'.hasVowels()).toBeTruthy();
    });
});
describe('Test for Upper', () => {
    test('A simple case where no vowel exist', () => {
        expect('eree'.namer()).toBe('ereed');
    });
    
    test('A simple case where Vowel is both upper and lower', () => {
        expect('ereed'.namer()).toBe('ereed');
    });
});