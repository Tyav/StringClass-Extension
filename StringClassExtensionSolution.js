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



module.exports = String;