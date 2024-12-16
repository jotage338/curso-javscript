//Métodos de string

//01 - toUpperCase(): deixar as letras maiúsculas
let frase1 = 'tudo está em minúsculo'
console.log(frase1.toUpperCase())//

//02 - toLowerCase(): deixar tudo em minúsculo
let frase2 = 'TUDO ESTÁ EM MAIÚSCULO.'
console.log(frase2.toLowerCase())

//03 - .length :saber o tamanho de uma string
let nome1 = 'marceneiro'
console.log(nome1.length)

//----------------------------------------------------------------------------------

//Método para extrair parte da string
//slice(start,end). Sendo que o start e o end são ínidices numéricos.
//Start -> ínidce incluso
//End -> índice excluso
//indices    01234567890
let nome2 = 'JotaGGMFgon'
console.log(nome2.slice(7,8))//Pegar a letra F
console.log(nome2.slice(2,6))//Pegar taGG

//----------------------------------------------------------------------------------

//Métodos de busca

//indexOf(): primeira ocorrência de uma substring
//indices     012345678901234567890123456789
let frase3 = 'a macarronada estava deliciosa'
console.log(frase3.indexOf('nada'))//9
console.log(frase3.indexOf('estava'))//14

//lastIndexOf(): acha a ultima ocorrencia de uma string
console.log(frase3.lastIndexOf('i'))//26

//includes(): verifica se a string contém uma substring específica
console.log(frase3.includes("deliciosa"))//true
console.log(frase3.includes("vaidosa"))//false

//----------------------------------------------------------------------------------

//Métodos de manipulação de strings:
//concat(str1,str2,str3): concatenar strings
let x = 'olá'
console.log(x.concat(',', ' ', 'tudo bem com você', '?'))

//trim(): remove espações em branco do início e do fim da string
let fraseComEspecos = '           parararasdadsa    '
console.log(fraseComEspecos.trim())

//replace(): remove a PRIMEIRA ocorrencia de uma substring.
//replaceAll(): remove todas as ocorrências de uma substring.
let teste = 'andoleta, lepeti, peti pola'
console.log(teste.replace('andoleta','borboleta'))
let teste2 = 'Frase Com Espaço'
console.log(teste2.replaceAll(' ', ''))


//----------------------------------------------------------------------------------
//Método para dividir
//split(): divide uma string em uma array
let saudacao = 'Olá, me chamo João'
console.log(saudacao.split(' '))