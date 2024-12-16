//Escreva uma função JavaScript para verificar se uma 'entrada' é uma string ou não.
function isString(param){
    return typeof(param) === 'string' ? true : false
}
console.log(isString('w3resource'));
console.log(isString([1, 2, 4, 0]));

//Escreva uma função JavaScript para verificar se uma string está em branco ou não.
function isBlank(param){
    return param.length === 0 ? true : false
}
console.log(isBlank(''))
console.log(isBlank('abc'))


//Escreva uma função JavaScript para dividir uma string e convertê-la em um array de palavras.
function stringToArray(param){
    return param.split(' ')
}
console.log(stringToArray('Robin Signh'))

//Escreva uma função JavaScript para extrair um número especificado de caracteres de uma string.
function truncateString(param, number){
    return param.slice(0,number)
}
console.log(truncateString('Robin Singh', 4))
