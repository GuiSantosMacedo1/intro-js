// Os operadores de comparação servem para comparar dois valores e verificar se uma determinada condição é verdadeira ou falsa.
// DICA: No Js, o resultado de uma comparação é sempre um valor booleano (true ou false).
// Os operadores de comparação mais comuns são:
// === Igualdade Estrita (igual a)
// Igualdade estrita verifica se os valores são iguais e do mesmo tipo de dado.
console.log(5 === 5); // true
console.log(10 === 20) // false
console.log(10 === '10') // false, pois o tipo de dado é diferente
console.log('-------Igualdade não estrita começa--------')
// == Igualdade não estrita
// Igualdade não estrita verifica se os valores são iguais, e faz a conversão de tipos antes de comparar.
console.log(10 == 10) // true
console.log(10 == 20) // false
console.log(10 == '10') // true, pois o operador == faz a conversão de tipos antes de comparar
console.log(0 == false) // true, pois o operador == faz a conversão de tipos antes de comparar, e no binário 0 é considerado false
console.log(1 == true) // true, pois o operador == faz a conversão de tipos antes de comparar, e no binário 1 é considerado true
console.log('-------Diferença estrita começa--------')

// !== (Diferença estrita)
// Tanto o operador !== quanto o operador != verificam se os valores são diferentes, mas o operador !== também verifica se os tipos de dados são diferentes.
console.log(10 !== 3) // true
console.log(10 !== 10) // false
console.log(10 !== '10') // true, pois o tipo de dado é diferente
console.log('-------Diferença não estrita começa--------')

// != (Diferença não estrita)
// No caso desse operador, ele verifica apenas valor, e não o tipo de dado
console.log(10 != 3) // true
console.log(10 != '10') // false, pois o operador != faz a conversão de tipos antes de comparar
console.log('-------Maior que--------')


// > (maior que)
// Esse operador verifica se o valor da esquerda é maior que o valor da direita, e retorna true ou false.
console.log(10 > 5) // true
console.log(10 > 20) // false
console.log(10 > 10) // false, pois 10 não é maior que 10
console.log('-------Menor que--------')

// < (menor que)
// Esse operador verifica se o valor da esquerda é menor que o valor da direita, e retorna true ou false.
console.log(10 < 5) // false
console.log(10 < 20) // true
console.log(10 < 10) // false, pois 10 não é menor que 10
console.log('-------Maior ou igual a--------')
// >= (maior ou igual a)
// Esse operador verifica se o valor da esquerda é maior ou igual ao valor da direita, e retorna true ou false.

const nota = 7;

console.log(nota >= 7) // true, pois 7 é igual a 7
console.log(nota >= 6) // true, pois 7 é maior que 6
console.log(nota >= 8) // false, pois 7 não é maior ou igual a 8
console.log('-------Menor ou igual a--------')

// <= (menor ou igual a)
// Esse operador verifica se o valor da esquerda é menor ou igual ao valor da direita, e retorna true ou false.
console.log(nota <= 7) // true, pois 7 é igual a 7
console.log(nota <= 6) // false, pois 7 não é menor ou igual a 6
console.log(nota <= 8) // true, pois 7 não é menor ou igual a 8