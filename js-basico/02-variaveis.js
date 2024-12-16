let num1 = 20
console.log(num1)
num1 = 'Virei uma string'
console.log(num1)


const num2 = 35
console.log(35)
//num2 = 27
//console.log(num2)
//Não é possível fazer reatribuição em constantes

/*
function a(){
    const ola = 'olá'
    let pizza = 'pizza'
}
console.log(pizza)
console.log(ola)
*/
//Variáveis criadas dentro de escopos locais não podem ser acessadas globalmente.

//Mas variáveis criadas globalmente podem ser acessadas de qualquer lugar do documento

let pizza = 'pizza de mussarela grande'
const ola = 'olá, boa noite!'

function pedir(){
    return `${ola} Quero uma ${pizza}`
}

console.log(pedir())

const nome = 'João Gabriel'
let idade = 20
const anoDeNascimento = 2004
const altura = 1.73
let peso = 80

let imc = peso/(altura**2)

console.log(`Olá, eu me chamo ${nome}, tenho ${idade} anos, nasci no ano de ${anoDeNascimento} e meu IMC é de ${imc.toFixed(2)}.`)