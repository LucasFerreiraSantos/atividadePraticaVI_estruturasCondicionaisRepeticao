const idadeMotorista = Number(prompt('Qual a sua idade? '))
  if(idadeMotorista < 18){
    document.write(`Sua idade é ${idadeMotorista} anos, você NÃO pode dirigir!!!`)
  } else{
    document.write(`Sua idade é ${idadeMotorista} anos, você PODE dirigir!!!`)
  }

// 1. Crie uma variável para ler a idade de um motorista. Caso o
// motorista tenha idade maior ou igual a 18 anos imprime no console
// “Pode dirigir”, caso contrário imprima “Não pode dirigir”.