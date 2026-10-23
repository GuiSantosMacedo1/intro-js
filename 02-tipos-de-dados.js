// O JavaScript possui 7 tipos de dados primitivos (que guardam um único valor simples):
// 1. String: representa sequências de caracteres, como nomes, endereços, etc. Em modo geral textos.
const nome = "Gui";
const cidade = 'São Paulo';
const mensagem = `Olá, meu nome é ${nome} e eu moro em ${cidade}.`;
console.log(nome);
console.log(cidade);
console.log(mensagem);
console.log('-------------------------------')
// 2. Number: representa números, tanto inteiros quanto decimais.
const idade = 30;
const altura = 1.75;
const preco = 55.99;
const temperatura = -5.21;
console.log(idade);
console.log(altura);
console.log(preco);
console.log(temperatura);
// Nan (Not a Number) é um valor especial que indica que uma operação matemática falhou ou não é válida.
// Infinity é um valor especial que representa um número maior do que qualquer outro número.
console.log(Infinity);
console.log(NaN);

console.log('-------------------------------')
// 3. BigInt: representa números inteiros muito grandes do que o limite de precisão dos números internos comuns do tipo Number.

const bigInt = 1234567890123456789012345678901234567890n;
// "n" no final do número indica que é um BigInt
console.log(bigInt);
console.log('-------------------------------')
// 4. Boolean: representa valores lógicos, podendo ser true ou false.
// É utilizado para verificar condições e controlar funcionalidades e representar estados.

const isAdult = true;
const isMinor = false;
console.log(isAdult);
console.log(isMinor);
console.log('-------------------------------')
// 5. Undefined: representa uma valor que foi declarada, mas não foi definido.
let variavel;
console.log(variavel);
console.log(typeof variavel); // undefined
console.log('-------------------------------')
// 6. Null: representa a ausência intencional de qualquer valor ou objeto.
const vazio = null;
console.log(vazio);
console.log(typeof vazio); // object (isso é um bug do JavaScript, mas é assim que funciona)
console.log('-------------------------------')
// 7. Symbol: representa um valor único e imutável, usado principalmente como identificador de propriedades de objetos.
const simbolo = Symbol('descricao');

console.log(simbolo);
console.log(typeof simbolo); // symbol