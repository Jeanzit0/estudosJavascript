var prompt = require('prompt-sync')();

let vetorPreco = [1.20, 1.30, 1.50, 1.20, 1.30, 1.00];
let cont = 0;
let multi = 0;
let soma = 0;
let vetPrint = Array();
let vetQnt0 = 0;
let vetQnt1 = 0;
let vetQnt2 = 0;
let vetQnt3 = 0;
let vetQnt4 = 0;
let vetQnt5 = 0;

console.log(`\n============  Cardapio  ============\n|| 100 Cachorro quente....R$1,20 ||\n|| 101 Bauru Simples......R$1,30 ||\n|| 102 Bauru com Ovo......R$1,50 ||\n|| 103 Hamburguer.........R$1,20 ||\n|| 104 Cheeseburguer......R$1,30 ||\n|| 105 Refrigerante.......R$1,00 ||\n===================================`)

for(i=1;i>0;i++){
    let code = Number (prompt(`Código do item desejado: `));
    if(code==999){
        break;
    }else{
        switch(code){
            case 100:
                multi = Number (prompt(`Quantidade: `));
                if(typeof multi != Number){
                    console.log('Você digitou um número inválido, tente novamente.')
                    break;
                }
                cont = vetorPreco[0]*multi;
                vetQnt0 += multi;
                vetPrint[0] = ("cod 100 qnt " + `${vetQnt0} R$ ${cont.toFixed(2)}`);
                soma += cont;
                break;
            case 101:
                multi = Number (prompt(`Quantidade: `));
                if(typeof multi != Number){
                    console.log('Você digitou um número inválido, tente novamente.')
                    break;
                }
                cont = vetorPreco[1]*multi;
                vetQnt1 += multi;
                vetPrint[1] = ("cod 101 qnt " + `${vetQnt1} R$ ${cont.toFixed(2)}`);
                soma += cont;
                break;
            case 102:
                multi = Number (prompt(`Quantidade: `));
                    if(typeof multi != Number){
                        console.log('Você digitou um número inválido, tente novamente.')
                        break;
                    }
                cont = vetorPreco[2]*multi;
                vetQnt2 += multi;
                vetPrint[2] = ("cod 102 qnt " + `${vetQnt2} R$ ${cont.toFixed(2)}`);
                soma += cont;
                break;
            case 103:
                multi = Number (prompt(`Quantidade: `));
                if(typeof multi != Number){
                    console.log('Você digitou um número inválido, tente novamente.')
                    break;
                }
                cont = vetorPreco[3]*multi;
                vetQnt3 += multi;
                vetPrint[3] = ("cod 103 qnt " + `${vetQnt3} R$ ${cont.toFixed(2)}`);
                soma += cont;
                break;
            case 104:
                multi = Number (prompt(`Quantidade: `));
                if(typeof multi != Number){
                    console.log('Você digitou um número inválido, tente novamente.')
                    break;
                }
                cont = vetorPreco[4]*multi;
                vetQnt4 += multi;
                vetPrint[4] = ("cod 104 qnt " + `${vetQnt4} R$ ${cont.toFixed(2)}`);
                soma += cont;
                break;
            case 105:
                multi = Number (prompt(`Quantidade: `));
                if(typeof multi != Number){
                    console.log('Você digitou um número inválido, tente novamente.')
                    break;
                }
                cont = vetorPreco[5]*multi;
                vetQnt5 += multi;
                vetPrint[5] = ("cod 105 qnt " + `${vetQnt5} R$ ${cont.toFixed(2)}`);
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
