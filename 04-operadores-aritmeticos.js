// Operadores Aritméticos são utilizados para realizar operações matématicas como por exemplo: adição, subtração, multiplicação, divisão, etc.
// 1. Adição (+): Soma dois valores.
//Utilizado para a soma de valores.
console.log('------Adição--------')
const preco = 50;
const qtd = 5;
const frete = 10;
const total = preco + frete;

console.log(total);
console.log(preco + frete);
console.log( 50 + 10);

console.log('------Subtração--------')
// 2. Subtração (-): Subtrai um valor de outro.
// Utilizado para a subtração de valores.

const subtracao = preco - frete;

console.log(subtracao);
console.log(preco - frete);
console.log( 50 - 10);

console.log('------Multiplicação--------')
// 3 - Multiplicação (*): Multiplica dois valores.
// Utilizado para a multiplicação de valores.
const multiplicacao = preco * qtd;
console.log(multiplicacao);
console.log(preco * qtd);
console.log( 50 * 5);

console.log('------Divisão--------')
// 4 - Divisão (/): Divide um valor por outro.
// Utilizado para a divisão de valores.
const divisao = preco / frete;

console.log(divisao);
console.log(preco / frete);
console.log( 50 / 10);
console.log(10 / 0); // Retorna Infinity

console.log('------Exponenciação--------')
// 5 - Exponenciação (**): Eleva um valor a potência de outro.
// Utilizado para realizar a exponenciação de valores, ou seja, elevar um número a uma potência.
const exponenciacao = preco ** qtd;
console.log(exponenciacao);
console.log(preco ** qtd);
console.log( 50 ** 5);
// 50 * 50 * 50 * 50 * 50 = 312500000 

console.log('------Resto da Divisão--------')
// 6 - Resto da Divisão (%): Retorna o resto da divisão de um valor por outro.
// O operador % retorna o RESTO DA DIVISÃO, não o resultado em si. Usado para verificar se um número é par ou ímpar, por exemplo.
console.log(8 % 2); // Retorna 0, pois 8 é par
console.log(7 % 2); // Retorna 1, pois 7 é ímpar

console.log('------Incremento--------')
// 7 - Incremento (++): Adiciona 1 ao valor de uma variável.
// O operador ++ aumenta o valor de uma variável em 1.
let contador = 5;
console.log(contador);
contador++;
console.log(contador);

console.log('------Decremento--------')
// 8 - Decremento (--): Subtrai 1 do valor de uma variável.
// O operador -- diminui o valor de uma variável em 1.
let vidas = 3;
console.log(vidas);
vidas--;
console.log(vidas);