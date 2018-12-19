String.prototype.home = function (){
    return 'yas'
}

String.prototype.exit = function (){
    return 'exiting'
}

String.prototype.namer = function (){
    return Object.values(this).join('')
}

module.exports = String;