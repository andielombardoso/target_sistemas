let numeroAnterior = 0;
let numeroAtual = 1;
let fibonacci;
let numeroInformado = prompt("Insira um número para verificar se ele pertence à sequência de Fibonacci:");


numero = parseInt(numeroInformado);

    for (let i = 0; i < 100; i++) {
        fibonacci = numeroAnterior + numeroAtual;
        console.log(fibonacci);
        if (fibonacci != numero){
            numeroAnterior = numeroAtual;
            numeroAtual = fibonacci;
        } if (fibonacci == numero){
            alert(`${numero} pertence à sequência de Fibonacci!`);
            break;
        } else if (fibonacci >= numero) {
            alert(`${numero} não pertence à sequência de Fibonacci!`);
            break;
        }
    }

        
    

    
    


