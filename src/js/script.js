// Declarações e Variáveis

// var, let e const

//var x=10;
//console.log(x);
//var x = 20;
//console.log(x);

// var pode redeclarar e acessar fora do escopo
// ler não pode redeclarar e não consegue acessar fora do escopo

//if(true){
//    var nome="Fiap";
//}
//
//console.log(nome)

// cont
//const taxaJuros = 0.85;
//taxaJuros = 0.5;

//console.log(taxaJuros)

// var ex1="Olá dev var";
// console.log(ex1);

// let ex2="Olá dev let";
// console.log(ex2);

// const ex3="Olá dev const";
// console.log(typeof ex3);

// let ex4=20;
// console.log(ex4);

// let ex5=true;
// console.log(typeof ex4);

// let ex6={nome: "Fiap"};
// console.log(typeof ex6);

// let ex7=["Java", "Python", "C"];
// console.log(ex7);

// let ex8; // Declaração/ Variável indefinida
// console.log(ex8);

// let ex9=null;
// console.log(typeof ex9);

// OPERADOS ARTIMÉTICOS -------------------------------------------------------------

// se coloca rum valor em string dentro de uma soma, vai mostrar o valor em string o o valor em int no lado um do outro

// const valor1=20;
// const valor2=10;

// console.log(valor1 + valor2);
// console.log(valor1 / valor2);
// console.log(valor1 - valor2);
// console.log(valor1 * valor2);


// // OPERADOS LÓGICOS -------------------------------------------------
// console.log(valor1 > valor2);
// console.log(valor1 > 10 && valor2 !=20); //Os dois tem que ser verdadeiro para ser True
// console.log(valor2 < 5 || valor1 > 3); //um deles é verdadeiro para ser True

// // COMPARAÇÃO ------------------------------------------------------
// console.log(valor1 < valor2);
// console.log(valor1 >= valor2);
// console.log(valor1 <= valor2);
// console.log(valor1 != valor2);
// console.log(valor1 == valor2);
// console.log(valor1 === valor2);

// //CONCATENAÇÃO - texto para ser exibido ao lado da variável
// console.log("O valor é", valor2);

// Exercício ----------------------------------------------------------
// 1-
// const p = 50;
// const v = 35;
// const precoFinal = p - v;
// console.log("O preço final com desconto é", precoFinal);

//2-
// const usuarioLogado = 1;
// const token = 100;
// const autorizado = (usuarioLogado === 1) && (token >= 10);
// console.log("Trasação autorizada com sucesso!", autorizado)

// Estrutura Condicional ---------------------------------------

if(true){
    console.log("É verdadeiro");
}

// if/else

let nome ="Fiap";
if(nome == "Fiap"){
    console.log("Nome verdadeiro")
} else{
    console.log("Nome Errado")
}

// if encadeado ou aninhado
let idade = 18;

if(idade <= 13){
    console.log("É uma criança");
} else if (idade > 13 && idade <=18){
    console.log("É um adolescente");
} else if (idade > 18 && idade <=59){
    console.log("É um adulto");
}else{
    console.log("É um idoso");
}

// Switch-case
let times = "Palme"

switch(times){
    case "Santos":
        console.log("Um time idoso");
        break;
    case "São Paulo":
        console.log("Time panetone");
        break;
    case "Palmeiras":
        console.log("SEM MUNDIAL");
        break;
    case "Corinthians":
        console.log("Um time de tradição");
        break;
    default:
        console.log("é tão ruim quanto a seleção brasileira")
}

//ternaria

let salario = 100;
let resultado = salario == 100 ? "Salario Certo" : " Salario Errado";

console.log(resultado);

let usuario = "fiap";
let userLogado = usuario == "fiap" ? "Logado com Sucesso" : "Usuário Errado"
console.log(userLogado)

function verificarParImpar(numero){
    return numero % 2  === 0 ? "Par" : "Impar";
}
console.log(verificarParImpar())