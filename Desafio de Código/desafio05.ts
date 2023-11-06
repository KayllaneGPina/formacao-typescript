// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let line = gets().split(" ");
const a = parseInt(line[0]);
const b = parseInt(line[1]);

q = parseInt(a / b);

r = a - b * q;

// TODO: Imprima o quociente q seguido pelo resto r da divisão de a por b

if (r < 0) {
  r += Math.abs(b);
  
  q = (a - r) / b   ;    //escreva sua lógica aqui
}

console.log(q + " " + r);