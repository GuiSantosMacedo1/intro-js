// if/se - Execite um bloco de código se uma condição for verdadeira

// estrutura de um if
// if (condição) {
//     // bloco de código a ser executado se a condição for verdadeira
// }

const saldo = 5.30

//1 - if simples
console.log( "********* IF SIMPLES *********" );
if ( saldo >= 5.30) {
  console.log("Passagem liberada");
  console.log("Foram debitados R$ 5,30 do seu saldo");
}

//2 - if / else 
  console.log( "********* IF / ELSE *********" );
/* 
  if (condição) {
    bloco de código que será executado caso a condição seja verdadeira
    } else {
      bloco de código que será executado caso a condição seja false
    }
*/
// IF Composto - IF / ELSE
if ( saldo > 5.30) {
console.log("Passagem liberada");
console.log("Foram debitados R$ 5,30 do seu saldo");
} else {
  console.log("Saldo insuficiente");
  console.log("Por favor, realize uma recarga e tente novamente.");
  console.log("Seu saldo é de R$" + saldo);
}

// if...else if 
console.log( "********* IF / ELSE IF *********" );
/* 
  if (condição) {
    bloco de código que será executado caso a condição seja verdadeira
    } else if (condição) {
      bloco de código que será executado caso a condição anterior seja falsa
    }
    } else {
      bloco de código que será executado caso nenhuma das condições seja verdadeira
    }
*/
const nota = 4
if( nota >= 9){
  console.log("Excelente! Você tirou um A");
} else if( nota >= 6){
  console.log("Aprovado! Você tirou um B");
} else if( nota >= 4){
  console.log("Você está de recuperação");
} else{
  console.log("Você está reprovado");
}

// Aprimorando Condicionais 
console.log( "********* CONDICIONAIS LÓGICAS *********" );

// Operadores Lógicos
// && (E) - Ambas as condições devem ser verdadeiras
// || (OU) - Pelo menos uma das condições deve ser verdadeira
// ! (NÃO) - Inverte o valor da condição

const idade = 18;
const temIngresso = true;

// Exemplo de uso do operador && (E)
console.log("********* AND - E *********")
if (idade >= 18 && temIngresso){
  console.log("Entrada liberada");
} else {
  console.log("Entrada negada");
}

// Exemplo de uso do operador || (OU)
console.log("********* || OR(OU) *********")
const admin = false;
const moderador = true;
const logado = false;

if( admin || moderador && logado ){
  console.log("Acesso ao painel")
} else {
  console.log("Acesso não permitido")
}

// Exemplo de uso do operador ! (NÃO)
console.log("********* ! NOT(NÃO) *********");

console.log(!admin); // true
const estaLogado = false;
if(!estaLogado){
  console.log("Faça login para continuar.");
} else {
  console.log("Bem-vindo!");
}

const nome = "";

if(!nome){
  console.log("Nome não informado");
} else {
  console.log("Nome informado: " + nome);
}

const aceiteTermos = false;

if(!aceiteTermos){
  console.log("Você precisa aceitar os termos de uso para continuar.");
} else {
  console.log("Obrigado por aceitar os termos de uso.");
}