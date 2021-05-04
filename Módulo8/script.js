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


// Operador ternário

// var idade = 20;

// var pode = idade >=18 ? "Pode" : "Não pode" ;

// console.log(pode);


// Condicionais - Switch

// var nota1 = 8.0;
// var nota2 = 8.0;

// var media = (nota1 + nota2 ) / 2;

// if(media >= 8){

//     conceito = "Ótimo"
// }
// else if( media >= 6.5) {

//     conceito = "Bom"
// }else{

//     conceito = "Regular"
// }

// conceito = "Mais ou menos";

// console.log(media);
// console.log(conceito);

// switch(conceito){

//     case "Ótimo":
//         console.log("Parábens, você é um ótimo aluno");
//         break;
//     case "Bom":
//         console.log("Você está quase perfeito");
//         break; 
//     case "Regular":
//         console.log("Estude mais um pouco")
//         break;    
//     default:
//         console.log("Houve algum erro");
//         break;


// }


// Repetição - for e while


// var numero = 5;

// for(var i = 0 ; i < numero ; i++  ){

//     console.log("Executando o for , pela " + i + " vez" );
// }

// console.log("Acabou");


// var numero = 0;

// while(numero<5){

//     console.log("Número "+ numero);
//     numero +=1;
// }

// console.log("Acabou");


// Arrays


// var empresas = ["Google", "Facebook", "Sony", "Lenovo", "Youtube", "Samsung"];

// console.log(empresas)

//Usando o for:

// index(i): é a posição de cada elemento dentro do array.

// for (var i = 0;i < empresas.length; i++){
//     console.log(empresas[i]);
// }

// outra forma de usar o for , o in é usado para pegar os index do array e o of é usado pra pegar os elementos do array.

// for (var empresa of empresas) {
//     console.log(empresa)
// }


// Funções

// function media(n1,n2){;

//     var valor1 =n1;
//     var valor2 = n2;
//     var media = (n1 + n2)/2;

//     return media;

// }
//  var n1 = Number(prompt("Digite o primeiro valor: "));
//  var n2 = Number(prompt("Digite o segundo valor: "));

// alert("A media entre esses número é : "+ media(n1,n2));


// Tabuada usando o function:

// function mult (number){
//     for(var i= 0; i <=10; i++ ){
//       var result =  i * number;
//       console.log(number + " * " + i + " = " + result);
//     }
//     return mult;
// }

// var number = Number(prompt("Tabuada de multiplicação, digite um número: "));

// mult(number);