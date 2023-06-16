// var prompt = require('prompt-sync')();

// /////////////////////////////////////////////////

// let frase = 'eaieaiaa';
// for(let i=0; i<=frase.length; i++){
//     console.log(frase[i]); //escreve seguido \n
// }

// /////////////////////////////////////////////////

// frase.charCodeAt(7); //mostra o valor do caractere na função

// /////////////////////////////////////////////////

// frase.split('i'); //corta a string

// /////////////////////////////////////////////////

// let vetor = ['times', 'do', 'Brasil']
// let teste = vetor.join('#') //adiciona o # dentro de cada espaço da string
// console.log(teste);


//--//--//--//--//--//--//--//--//--//--//--//--//--//
//--//--//--//--//--//--//--//--//--//--//--//--//--//
//--//--//--//--//--//--//--//--//--//--//--//--//--//


// function saudacao(){
//     console.log('ola a todos')
// }
// saudacao() //criar e chamar uma função

/////////////////////////////////////////////////

// var prompt = require('prompt-sync')();

// function calcular_aumento_salarial(salario){//>>(salario,percentual) 
//     let conta = salario * (25/100); //>>(percentual/100)
//     return conta;
// }

// function main(){
//     let salario = Number(prompt('digite seu salário (R$): ')); //entrada
//     //>> let percentual = Number(prompt('digite o percentual'))

//     let aumento = calcular_aumento_salarial(salario); //>>(salario,percentual)
//     let salario_novo = salario + aumento; //processamento           

//     console.log(`Seu novo salario é: ${salario_novo.toFixed(2)}`) //saida
// }
// main()


// module.exports={
//     calcular_aumento_salarial; //faz eu exportar funções
// }

/////////////////////////////////////////////////
//calcule o aumento de salário de 25%

function descobrir_par(numero){

    if(numero%2 == 0){
        return true;
    }else{
        return false;
    }
}

var prompt = require('prompt-sync')();

let vlr = Number (prompt('Qual número você deseja saber se é par?'))

if(descobrir_par(vlr)){
    console.log(`É par`);
}else{
    console.log(`É impar`);
}


module.exports={
    descobrir_par
}




