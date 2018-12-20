String.prototype.hasVowels = function (){
    let string = Object.values(this).join('');
    let vowelSearch = /[aeiouAEIOU]/;
    return vowelSearch.test(string);
}

String.prototype.toUpper = function () {
    let string = Object.values(this);
    for (var i = 0; i < string.length; i++){
        if (/[a-z]+$/u.test(string[i])){
            string[i] = String.fromCharCode(string[i].charCodeAt(0)-32)
        }
    }
    return string.join('')
}
String.prototype.toLower = function () {
    let string = Object.values(this);
    for (var i = 0; i < string.length; i++){
        if (/[A-Z]+$/u.test(string[i])){
            string[i] = String.fromCharCode(string[i].charCodeAt(0) + 32)
        }
    }
    return string.join('')
}
String.prototype.ucFirst = function () {
    let string = Object.values(this).join('')
    return string[0].toUpper() + string.slice(1);
}
String.prototype.isQuestion = function (){
    let string = Object.values(this).join('')
    return /^.+\?\s*$/.test(string)
}
String.prototype.words = function (){
    let string = Object.values(this).join('')
    return string.match(/\w+[^\s\t]*\w*/g)
}
String.prototype.wordCount = function (){
    let string = Object.values(this).join('')
    return string.words().length
}
String.prototype.toCurrency = function () {
    let string = Object.values(this).join('');
    let expres = new RegExp('(\\d)(?=(\\d{3})+\\.)', 'g');
    if(/[^\d\.]/.test(string)){
        return NaN;
    }else if (/\./.test(string)){
        return string.replace(expres, '$1,')
    } else {
        let final = string + '.';
        final = final.replace(expres, '$1,')
        return final.slice(0, final.length-1)
    }
}
String.prototype.fromCurrency = function (){
    let string = Object.values(this).join('');
    if(/[^\d\.,]/.test(string)){
        return NaN;
    }else {
        return Number(string.replace(/,/g, ''))
    }
}
String.prototype.inverseCase = function (){
    var invert = [];
    for (var i = 0; i < this.length; i++){
        if (/[a-z]+$/u.test(this[i])){
            invert.push(this[i].toUpper())
        } else {
            invert.push(this[i].toLower())
        }
    }
    return invert.join('');
}
String.prototype.alternatingCase = function (){
    var alter = [];
    for (var i = 0; i < this.length; i++){
        if (i % 2 == 0){alter.push(this[i].toLowerCase());}
        else{alter.push(this[i].toUpperCase());}
    }
    return alter.join('');
}
String.prototype.numberWords = function (){
    let wordObjects = {'0':'zero','1':'one','2':'two','3':'three',
    '4':'four','5':'five','6':'six','7':'seven','8':'eight','9':'nine','.':'point'};
    let numWord = [];
    if (/[^\d\.]/.test(this)){
        return NaN;
    } else {
        for (let i = 0; i < this.length; i++){
            numWord.push(wordObjects[(this[i])]);
        }
    }
    return numWord.join(' ')
}
String.prototype.isDigit = function (){
    return /^\d$/.test
}




module.exports = String;