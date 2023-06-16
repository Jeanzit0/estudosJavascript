// // //////////////////////////////////////////////////////////////////
// var prompt = require('prompt-sync')();

// let vetVazio = Array();
// let troco = 0;
// let vlrTotal = 0;
// let dindin = 0;

// for(i=1;i>=1;i++){
//     vetVazio[i] = Number (prompt (`Produto ${i}: R$ `));
//     vlrTotal += vetVazio[i];
//         if(vetVazio[i] == "0"){
//             i = ((i-i)-1) ;
//         }
// }

// console.log(`Valor total: R$ ${vlrTotal}`);

// dindin = Number (prompt (`Dinheiro: R$ `));

// troco = dindin - vlrTotal;

// // console.log(`Troco: R$ ${troco}`);
//////////////////////////////////////////////////////////////////
//caixa registradora rudimentar



//////////////////////////////////////////////////////////////////
// var prompt = require('prompt-sync')();
// let vetVazio = Array();

// console.log("Digite os 3 número que deseja organizar:")

// for(j=0; j<=2; j++){
//     vetVazio[j] = Number (prompt (`Número: `));
// }

// let numMenor = vetVazio[0];
// let numMaior = vetVazio[0];
// let numMedio = vetVazio[0];

// for(i=0; i<=2; i++){

//     if(vetVazio[i]<numMenor){
//         numMenor = vetVazio[i];

//     }else if(vetVazio[i]>numMaior){
//         numMaior = vetVazio[i];

//     }else{
//         numMedio = vetVazio[i];
// }
// }


// console.log(numMenor);
// console.log(numMedio);
// console.log(numMaior);
//////////////////////////////////////////////////////////////////
//organiza 3 número em ordem crescente



//////////////////////////////////////////////////////////////////
// var prompt = require('prompt-sync')();

// let nomeAtl = prompt (`Nome do atleta: `);
// let vetVazio = Array();
// let vlrTotal = 0;
// let numMedia = 0;

//     for(i=1;i<=5;i++){
//         vetVazio[i] = Number (prompt (`Salto ${i}: `));
//         vlrTotal += vetVazio[i];
//     }

// let numMaior = vetVazio[1];
// let numMenor = vetVazio[1];

//     for(j=1; j<=5; j++){
//         if(vetVazio[j]>numMaior){
//             numMaior = vetVazio[j];
//         }else if(vetVazio[j]<numMenor){
//             numMenor = vetVazio[j];
//         }
//     }

// numMedia = ((vlrTotal - (numMaior + numMenor))/3);

// console.log(`Maior salto: ${numMaior}`);
// console.log(`Pior salto: ${numMenor}`);
// console.log(`Média dos saltos: ${numMedia}`);
//////////////////////////////////////////////////////////////////
//mostra o maior, pior e média dos saltos de diversos atletas, além de registrar cada um


/////////////////////////////////////////////////////////////////////
// var prompt = require('prompt-sync')();

// let vetNomes = Array();
// let vetPesos = Array();
// let vetAlt = Array();
// let vetCod = Array();
// let contA = 1;
// let conta = 1;
// let contP = 1;
// let contp = 1;

//     for(i=1; i>0; i++){
//         vetNomes[i] = prompt (`Nome do cliente: `);
//             if(vetNomes[i] == "0"){
//                 break;
//             }
//         vetCod[i] = Number (prompt (`Seu código: `))
//         vetPesos[i] = Number (prompt (`Seu peso: `));
//         vetAlt[i] = Number (prompt (`Sua altura: `));
//     }

// let pesoMaior = vetPesos [1];
// let pesoMenor = vetPesos [1];

//     for(j=1; j<i; j++){
        
//         if(vetPesos[j]>pesoMaior){
//             pesoMaior = vetPesos[j];
//             contP = j;
//         }else if(vetPesos[j]<pesoMenor){
//             pesoMenor = vetPesos[j];
//             contp = j;
//         }
//     }

// let altMaior = vetAlt [1];
// let altMenor = vetAlt [1];

//     for(x=1; x<i; x++){
//         if(vetAlt[x]>altMaior){
//             altMaior = vetAlt[x];
//             contA = x;

//         }else if(vetAlt[x]<altMenor){
//             altMenor = vetAlt[x];
//             conta = x;
//         }
//     }

// console.log(`Cliente mais gordo:\n`)
// console.log(`Nome: ${vetNomes[contP]}`)
// console.log(`Código: ${vetCod[contP]}`)
// console.log(`Peso: ${vetPesos[contP]}\n\n`)

// console.log(`Cliente mais magro:\n`)
// console.log(`Nome: ${vetNomes[contp]}`)
// console.log(`Código: ${vetCod[contp]}`)
// console.log(`Peso: ${vetPesos[contp]}\n\n`)

// console.log(`Cliente mais alto:\n`)
// console.log(`Nome: ${vetNomes[contA]}`)
// console.log(`Código: ${vetCod[contA]}`)
// console.log(`Altura: ${vetAlt[contA]}\n\n`)

// console.log(`Cliente mais baixo:\n`)
// console.log(`Nome: ${vetNomes[conta]}`)
// console.log(`Código: ${vetCod[conta]}`)
// console.log(`Altura: ${vetAlt[conta]}\n\n`)
/////////////////////////////////////////////////////////////////////
//registra cada cliente de uma acedmia e mostra todos os dados do mais gordo (peso, cod, nome), mais magro (peso, cod, nome), mais alto (altura, cod, nome), mais baixo (altura, cod, nome)


//////////////////////////////////////////////////////////////////////////
// const { descobrir_par } = require('./thetenth'); // function biblioteca

// var prompt = require('prompt-sync')();

// let vlr = Number (prompt('Qual número você deseja saber se é par?'))

// if(descobrir_par(vlr)){
//     console.log(`É par`);
// }else{
//     console.log(`É impar`);
// }
//////////////////////////////////////////////////////////////////////////
//verificar se é par em function (function no thetenth.js)

    














