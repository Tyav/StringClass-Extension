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
    test('A simple case of a regular Question with a space at the end', () => {
        expect('Are you a boy? '.isQuestion()).toBe(true);
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

describe('Test for words', () => {
    test('A simple case of words', () => {
        expect('all of the time'.words()).toEqual(['all', 'of', 'the', 'time']);
    });
    test("A case where ' is included", () => {
        expect("people don't love what i see".words()).toEqual(['people', "don't", 'love', 'what', 'i', 'see']);
    });
    test('A case where - is included', () => {
        expect('jessy-way on the highway'.words()).toEqual(['jessy-way', 'on', 'the', 'highway']);
    });
    test('A case where numbers are included', () => {
        expect("7up is better than 33".words()).toEqual(['7up', 'is', 'better', 'than', '33']);
    });
    test('A case where . is included', () => {
        expect('i have it.'.words()).not.toEqual(['i', 'have', 'it'])
    });
});

describe('Test for wordCount', () => {
    test('A simple case of words with only alphabeths', () => {
        expect('all of the time'.wordCount()).toEqual(4);
    });
    test("A case where @ is included", () => {
        expect("people don@t love what i see".wordCount()).toEqual(6);
    });
    test('A case where - is included', () => {
        expect('jessy-way on the highway'.wordCount()).not.toEqual(8);
    });
    test('A case where numbers are included', () => {
        expect("7up is better than 33".wordCount()).toEqual(5);
    });
    test('A case where . is included', () => {
        expect('i have NO.'.wordCount()).toEqual(3)
    });
});
describe('Test for toCurrency', () => {
    test('A simple case of non decimals', () => {
        expect('7123456'.toCurrency()).toBe('7,123,456');
    });
    test("A case where a decimal is involve", () => {
        expect("1234543.11".toCurrency()).toBe('1,234,543.11');
    });
    test('A case where not a number', () => {
        expect('jessy-way'.toCurrency()).toBeNaN();
    });
    test('A case where numbers are included', () => {
        expect(" ".toCurrency()).toBeNaN();
    });
});
describe('Test for fromCurrency', () => {
    test('A simple case of numbers without decimals or number divider', () => {
        expect('4321'.fromCurrency()).toEqual(4321);
    });
    test("A case where only decimal exist", () => {
        expect("56.4".fromCurrency()).toEqual(56.4);
    });
    test('A case with only dividers', () => {
        expect('3,456'.fromCurrency()).toEqual(3456);
    });
    test('A case with both divider and decimal', () => {
        expect("11,111.11".fromCurrency()).toEqual(11111.11);
    });
    test('A case with a non-digit character', () => {
        expect('f34.3'.fromCurrency()).toBeNaN()
    });
});
describe('Test for inverseCase', () => {
    test('A simple case of first letter captions', () => {
        expect('Mr. Ben'.inverseCase()).toBe('mR. bEN');
    });
    test("A case where first letter is lower case", () => {
        expect('naComPLise'.inverseCase()).toBe('NAcOMplISE');
    });
    test('A case with only one word and only first is upper', () => {
        expect('Decagon'.inverseCase()).toBe('dECAGON');
    });
    test('A case with - in the string', () => {
        expect('--HappyName'.inverseCase()).toBe('--hAPPYnAME');
    });
    test('A case with digit character', () => {
        expect('123456r'.inverseCase()).toBe('123456R');
    });
});
describe('Test for alternatingCase', () => {
    test('A simple case of first letter captions', () => {
        expect('Onomatopoeia'.alternatingCase()).toBe('oNoMaToPoEiA');
    });
    test("A case where first letter is lower case", () => {
        expect('naComPLise'.alternatingCase()).toBe('nAcOmPlIsE');
    });
    test('A case with only one word and only first is upper', () => {
        expect('Decagon'.alternatingCase()).toBe('dEcAgOn');
    });
    test('A case with -  starting the string', () => {
        expect('--HappyName'.alternatingCase()).toBe('--hApPyNaMe');
    });
    test('A case with digit character', () => {
        expect('123456r'.alternatingCase()).toBe('123456r');
    });
});