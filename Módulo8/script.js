// Tipos de dados:
// Boolean
// Null
// Undedined
// Number
// String


// Operações Aritmeticas:

// + Adição
// - Subtração
// * Multiplicação
// / Divisão
// ** Potenciação
// % Módulo (resto da divisão)
// ++ Incremento
// -- Decremento


//Atribuições

//  =   x = y   x = y
// +=   x += y  x = x + y
// -=   x -= y  x = x - y
// *=   x *= y  x = x * y
// /=   x /= y  x = x / y
// %=   x %= y  x = x % y


// Operadores comparativos

// == igual a
// === valor igual e igual ( considera o tipo da variável )
// ! = não é igual
// !== não igual ou não igual ( considera o tipo da variável ) 
// > maior que 
// < menor que 
// > = maior que ou igual a
// < = menor ou igual a 


// Operadores lógicos

// && e 
// || ou
// Negativo (!)

//Exemplos (&&):

// var idade = 20;

// var menor25 = idade <= 25;
// var maior15 = idade >= 15;
// var entre = menor25 && maior15; 

// console.log("Idade: ", idade);
// console.log("Idade menor que 25", menor25);
// console.log("Idade maior que 15", maior15);
// console.log("Entre 15 e 25 ", entre);

//Exemplo (||):

// var idade = 9;

// var menor10 = idade <= 10;
// var maior65 = idade >= 65;
// var gratuito = menor10 || maior65; 

// console.log("Idade: ", idade);
// console.log("Idade menor que 10", menor10);
// console.log("Idade maior que 65", maior65);
// console.log("Tem direito a gratuidade", gratuito);

//Exemplo (!): 

// console.log(!true);
// console.log(!false);   


// Strings

//Ocorre uma concatenação abaixo: 
//var str = "Valor qualquer" + " " + "outro texto";

//console.log(str);


// Transformando Strings em Números (parseInt , parseFloat)

// var a = "3.5";
// var b = "5";

// var c = parseFloat(a) * parseFloat(b);

// console.log(c);


// Alert e Prompt

// var nome = prompt("Digite o seu nome:");

// alert("Seu nome é "+ nome);

// var numero = parseInt(prompt("Digite um número:"));
// var dobro = numero + numero; 

// alert("O dobro de "+ numero + " é " + dobro);


// Condicionais - IF

// var idade = parseInt(prompt("Digite sua idade:"));


// if (idade >= 30) {
//     alert("Você pode consumir bebidas alcoólicas.")
//     var bebida = prompt("Qual é o seu pedido?", bebida);
//     alert("O seu pedido é uma " + bebida + ".");
// } 
// else if (idade >= 18) {
//     alert("Você possui uma idade menor que 30 anos. ");
//     alert("Mostre a sua identidade.");
// } 
// else {
//     alert("Você não possui a idade mínima pra ingerir bebidas alcoólicas.");
//     alert("Volte quando estiver a idade mínima pra o consumo de bebidas alcoólicas.")
// }


// Operador ternario

var idade = 20;

var pode = idade >=18 ? "Pode" : "Não pode" ;

console.log(pode);

