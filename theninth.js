
////////////////////////////////////////////////////////////////////////////////////////////////////
// var prompt = require('prompt-sync')();

// let vetVazio = [0, 0, 0, 0, 0, 0, 0];
// let div = [0, 0, 0, 0, 0, 0, 0];
// let mult = 0;
// let cont = 0;

// for (i = 1; i > 0; i++) {
//     cont+=1;
      
//     let perg = Number(prompt('Você deseja: 1-Votar 2-Ver relátorio 0-Desligar '));
//     if (perg == 0) {

//         break;
//     }
//     else if (perg == 2) {
//         let senha = Number(prompt(`Somente pessoal permitido. Qual senha? `));
//         if (senha == 1111) {
//             console.log(`\nO candidato João obteve ${vetVazio[0]} votos e ${div[0].toFixed(2)}% dos votos\nO candidato José obteve ${vetVazio[1]} votos e ${div[1].toFixed(2)}% dos votos\nO candidato Josemar obteve ${vetVazio[2]} votos e ${div[2].toFixed(2)}% dos votos\nO candidato Junior obteve ${vetVazio[3]} votos e ${div[3].toFixed(2)}% dos votos\nO candidato Juca obteve ${vetVazio[4]} votos e ${div[4].toFixed(2)}% dos votos\nVotos anulados: ${vetVazio[5]} são ${div[5].toFixed(2)}% dos votos\nVotos em branco: ${vetVazio[6]} são ${div[6].toFixed(2)}% dos votos\n`);
//         }
//     } else {
//         let voto = Number(prompt(`Vote em seu candidato!\n\n1 - João\n2 - José\n3 - Josemar\n4 - Junior\n5 - Juca\n6 - Anular voto\n7 - Votar em branco\n\n`))
        
        
//         switch (voto) {
//             case 1:
//                 vetVazio[0] += 1;
//                 break;
//             case 2:
//                 vetVazio[1] += 1;
//                 break;
//             case 3:
//                 vetVazio[2] += 1;
//                 break;
//             case 4:
//                 vetVazio[3] += 1;
//                 break;
//             case 5:
//                 vetVazio[4] += 1;
//                 break;
//             case 6:
//                 vetVazio[5] += 1;
//                 break;
//             case 7:
//                 vetVazio[6] += 1;
//                 break;
//             default:
//                 break;
//         }
//         console.log(`Seu voto foi registrado com sucesso!\n\n`)
     
//         }
//         for(j=0;j<=6;j++){
//             mult==0;
//             mult = (vetVazio[j]*100);
//             div[j] = (mult/cont);

//         }  
//     }
////////////////////////////////////////////////////////////////////////////////////////////////////
//urna moderna.



///////////////////////////////////////////////////////////////////////////////////
// var prompt = require('prompt-sync')();

// let nota = 0;
// let vetPerg = Array();
// let vetRes = ['a', 'b', 'c', 'd', 'e', 'e', 'd', 'c', 'b', 'a'];
// let totalA = 0;
// let mediaA = 0;
// let mediaAb = 0;
// let totalQ = 0;

// for(i=1;i>0;i++){
// let perg = Number(prompt('Você deseja: 1-Adicionar aluno 0-Desligar '));
// nota = 0;

//     if(perg==1){
//         totalA += 1;
//         totalQ = 10;
//         let nomeA = prompt ('Nome do aluno: ');
//         for(i=0;i<=9;i++){
//             vetPerg[i] = prompt (`Questão ${i+1}: `);
//             if(vetPerg[i] == vetRes[i]){
//                 nota += 1;
//             }
            
//         }
//         mediaA += nota;
//         console.log(`${nomeA} acertou ${nota} de 10!`);
//         console.table(`Gabarito: ${vetRes} // Respostas: ${vetPerg}\n`);
//     }else{
//         break;
//     }
   
// }

// mediaAb=mediaA/totalA;
// console.log(`Total de alunos: ${totalA}`);
// console.log(`Media das notas dos alunos: ${mediaAb}\n`);
// /////////////////////////////////////////////////////////////////////////////
// conferimento de questões, média de todas as notas, número de alunos, comparação com o gabarito, quanto cada um acertou.

























