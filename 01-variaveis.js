// variável - Uma variavel é um identificador que permite acessar um valor armazenado durante a execução do código.
// Exemplo: Imagine uma caixa etiquetada - A etiqueta é nome da variavel, e o conteúdo é o valor atual que ela armazena/representa
// let etiqueta = valor;
let name = 'Gui';

// O JavaScript possui três tipos de variáveis: var, let e const.
// 1 - const - É uma variável que não pode ser alterada, ou seja, seu valor é constante.
const message3 = 'Brasil';
// message3 = 'Portugal' Isso vai gerar um erro, pois a variável é constante
console.log(message3);

// 2 - let - É uma variavel que pode ser alterada ao longo do tempo, ou seja, seu valor pode ser modificado.
// Criando let idade = 20;
let idade = 20;
console.log(idade);
// Alterando o valor da variável idade
idade = 24;
console.log(idade);
// Alterando o valor da variável idade novamente
idade = 30;
console.log(idade);

// 3 - var (Não é mais recomendado) - Por não saber se pode ou não alterar o valor da variável ela não é mais recomendada, pois pode gerar confusão.
var message = 'São Paulo';
console.log(message);
// Alterando o valor da variável message
message = 'Rio de Janeiro';
console.log(message);