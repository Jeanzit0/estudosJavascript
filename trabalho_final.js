var prompt = require('prompt-sync')();

let vetorPreco = [1.20, 1.30, 1.50, 1.20, 1.30, 1.00];
let cont = 0;
let multi = 0;
let soma = 0;
let vetPrint = Array();
let vetMulti = Array();
let multiPrint = 0;

console.log(`\nEspecificação //// Código //// Preço\nCachorro Quente --- 100 --- R$1,20\nBauru Simples --- 101 --- R$1,30\nBauru com Ovo --- 102 --- R$1,50\nHamburguer --- 103 --- R$1,20\nCheeseburguer --- 104 --- R$1,30\nRefrigerante --- 105 --- R$1,00\n`)

for(i=1;i>0;i++){
    let code = Number (prompt(`Código do item desejado: `));
    if(code==999){
        break;
    }else{
        switch(code){
            case 100:
                multi = Number (prompt(`Quantidade: `));
                cont = vetorPreco[0]*multi;
                vetMulti[0] = multi; //entra como numero, mostra como string, e precisa voltar como número para cálculo, e ele volta continua como
                vetPrint[0] = ("cod "+(code + "")+" qnt "+(vetMulti[0] + "")+" R$" +(cont.toFixed(2) + ""));
                soma += cont;
                break;
            case 101:
                multi = Number (prompt(`Quantidade:`));
                cont = vetorPreco[1]*multi;
                vetMulti[1] = multi;
                vetPrint[1] = ("cod "+(code + "")+" qnt "+(vetMulti[1] + "")+" R$" +(cont.toFixed(2) + ""));
                soma += cont;
                break;
            case 102:
                multi = Number (prompt(`Quantidade:`));
                cont = vetorPreco[2]*multi;
                vetMulti[2] += multi;
                vetPrint[2] = ("cod "+(code + "")+" qnt "+(vetMulti[2] + "")+" R$" +(cont.toFixed(2) + ""));
                soma += cont;
                break;
            case 103:
                multi = Number (prompt(`Quantidade:`));
                cont = vetorPreco[3]*multi;
                vetMulti[3] += multi;
                vetPrint[3] = ("cod "+(code + "")+" qnt "+(vetMulti[3] + "")+" R$" +(cont.toFixed(2) + ""));
                soma += cont;
                break;
            case 104:
                multi = Number (prompt(`Quantidade:`));
                cont = vetorPreco[4]*multi;
                vetMulti[4] += multi;
                vetPrint[4] = ("cod "+(code + "")+" qnt "+(vetMulti[4] + "")+" R$" +(cont.toFixed(2) + ""));
                soma += cont;
                break;
            case 105:
                multi = Number (prompt(`Quantidade:`));
                cont = vetorPreco[5]*multi;
                vetMulti[5] += multi;
                vetPrint[5] = ("cod "+(code + "")+" qnt "+(vetMulti[5] + "")+" R$" +(cont.toFixed(2) + ""));
                soma += cont;
                break;
            default:
                console.log("Você digitou um número inválido, tente novamente.")
                break;
        }
    }
}

console.table(vetPrint);

console.log(`Valor total: R$${soma}`)