////////////////////////////////////////////////////////////////////////
// var prompt = require('prompt-sync')();

// let numCD = prompt("Quantos CDs você tem? ");
// let vlrTotal = 0;
// let vlrDiv = 0;

// for(i=1; i<=numCD; i++){
//     let vlrCD = Number (prompt(`Qual valor do CD em questão? `));
//     vlrTotal += vlrCD;
    
// }

// vlrDiv = (vlrTotal/numCD);

// console.log(`a média é: ${vlrDiv}`);
////////////////////////////////////////////////////////////////////////
// declare, vindo do valor de cada cd, e de uma quantidade, ambas sendo declaradas pelo usuario, a média da soma de seus valores. SEM VETOR. 



/////////////////////////////////////////////////////////////////////////////
// var prompt = require('prompt-sync')();

// // let vetor = [4,5]; - DECLARAR VETOR

// let numCD = prompt("Quantos CDs você tem? ");
// let vetVazio = Array(numCD);
// let vlrTotal = 0;
// let vlrDiv = 0;

// for(i=0; i<numCD; i++){
//     vetVazio[i] = Number (prompt (`Qual o valor do CD em questão? `));
//     vlrTotal += vetVazio[i];

// }

// vlrDiv = vlrTotal/numCD;

// console.log(`Os valor digitados em ordem foram: ${vetVazio} `);
// console.log(`A média é: ${vlrDiv}`);
/////////////////////////////////////////////////////////////////////////////
// declare, vindo do valor de cada cd, e de uma quantidade, ambas sendo declaradas pelo usuario, a média da soma de seus valores. COM VETOR.



///////////////////////////////////////////////////////////////////////////////////////
// var prompt = require('prompt-sync')();

// let numTemp = prompt("Quantas temperaturas você quer declarar? ");
// let vetVazio = Array(numTemp);
// let numMenor = vetVazio[0];
// let numMaior = vetVazio[0];
// let vlrTotal = 0;
// let vlrDiv = 0;
// let numTempo = 0;

// numTempo = numTemp;
// for(i=0;i<numTempo;i++){
//     vetVazio[i] = Number (prompt (`Qual a temperatura que deseja declarar? `));
//     vlrTotal += vetVazio[i];
//         if(vetVazio[i]<numMenor){
//             numMenor = vetVazio[i];
//         }else if(vetVazio[i]>numMaior){
//             numMaior = vetVazio[i];
//         }
// }
// vlrDiv = (vlrTotal/numTempo);

// console.log(`A menor temperatura listada é de: ${numMenor} C°`);
// console.log(`A maior temperatura listada é de: ${numMaior} C°`);
// console.log(`A média entre os valores de temperaturas é de: ${vlrDiv} C°`);
///////////////////////////////////////////////////////////////////////////////////////
// declare, vindo do valor de cada temperatura, e de uma quantidade, ambas declaradas pelo usuario, 
// a média entre seu valores. Demonstre a menor e a maior temperatura separadamente também.



/////////////////////////////
// let vlrs = 0;
// let vetVazio = Array(50);
// let texto = " ";
// let multi = 0;

// for(i=1; i<=50; i++){
//     multi = (1.99*[i]);  
//     texto = `R$ ` + multi;
//     vetVazio[i] = texto;
// }
// console.table(vetVazio);
/////////////////////////////
// mostrar uma tabela de valores de R$1,99 vezes o número em sua posição do vetor.








