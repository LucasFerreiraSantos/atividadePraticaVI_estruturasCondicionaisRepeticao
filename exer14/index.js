let num = Number(prompt('Digite um número: '))
let resultado = 0
  document.write(`${num} `)
  while(resultado < 500){
    const multiplicador = 3
    let soma = num * multiplicador
    num = soma
    resultado += soma
      if(soma <= 500){
        document.write(`${soma} `)
      }
  }

// 14. Leia um número, utilizando WHILE multiplique este número por 3
// enquanto a soma seja menor que 500 e no final mostre qual o
// último valor