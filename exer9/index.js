let num = Number(prompt('Digite um número, para verificar se ele é primo: '))
let numPrimo = true

  let divisores=0;

  for(let i=1; i<=num; i++)
    if(num % i === 0) divisores++;

    if(divisores==2) document.write(`Você digitou ${num}, ele é primo.`);
    else document.write(`Você digitou ${num}, ele não é primo`);

// 9. Informe um valor a uma variável e imprima no console se o número
// é primo.