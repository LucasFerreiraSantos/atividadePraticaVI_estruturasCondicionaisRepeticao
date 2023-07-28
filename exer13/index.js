const num = parseInt(prompt('Digite um número: '))
  if(num < 1 || num == '' || num == isNaN(num)) document.write('DIGITE UM VALOR VÁLIDO!')
for(let i = 1; i <= num; i+=2){
  document.write(`${i} `)
}

// 13. Faça um algoritmo que armazene um número e imprima os
// números ímpares entre 1 e o número armazenado.