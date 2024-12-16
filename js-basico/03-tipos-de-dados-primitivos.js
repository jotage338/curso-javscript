//String: 
//conjunto de caracteres. utilizamos aspas simples '', aspas duplas "" ou ``
const nome = 'JotaGê'
const frase = "O amanhã é uma 'nova' chance de acertar." 
const apresentacao = `Eu me chamo ${nome}`

//Number:
// respresentam valores numéricos. Sejam eles inteiros ou flutuantes
const numero = 102304 //number -> int
const numeroFlutuante = 100.59 // number -> float

//Boolean:
// Verdadeiro ou falso
const aprovado = true //boolean -> verdadeiro
const bomAluno = false //bolean -> falso

//undefined: 
//Variável que foi inicializada mas seu valor não está apontado na memória
let nomeAluno //undefined
console.log(nomeAluno)

//Null
//Seu valor é nulo -> há uma ausência de valor
const sobrenomeAluno = null

//Valores primitivos vs valores por refencia
//Cada variável fica guardada em um espaço da memória

//Já os valores por referencia eles apontam para um espaço na memória
let a = 10
let b = a
console.log(a, b) // 10, 10
a = 5
console.log(a,b)//5, 10

let arr1 = [1,2]
let arr2 = arr1
console.log(arr1, arr2)//1,2    1,2
arr1.push(3)
console.log(arr1, arr2)//1,2,3  1,2,3
//Isso acontece pois os tipos de dados por referência apontam para um mesmo lugar de memória