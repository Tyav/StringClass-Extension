String.prototype.hasVowels = function (){
    let string = Object.values(this).join('')
    let vowelSearch = /[aeiouAEIOU]/;
    return vowelSearch.test(string)
}


module.exports = String;