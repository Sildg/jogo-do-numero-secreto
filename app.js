let numeroMaximo = 50000
let NumeroSecreto = parseInt(Math.random() * numeroMaximo + 1 );
console.log(NumeroSecreto);
let chute;
let tentativas = 1;
  
while (chute != NumeroSecreto){
  chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
  if(chute == NumeroSecreto) {
    break 
  } else {
    if (chute > NumeroSecreto) {
      alert (`O número secreto é menor que ${chute}`);
    }
    else {
      alert(`O número secreto é maior que ${chute}`);
    }
    tentativas++;
  }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
alert( `Isso ai! Você descobriu o número secreto ${NumeroSecreto} com ${tentativas} ${palavraTentativa}` );
