const idadeMotorista = Number(prompt('Qual a sua idade? '))
  if(idadeMotorista < 18){
    document.write(`Sua idade é ${idadeMotorista} anos, você NÃO pode dirigir!!!`)
  } else{
    document.write(`Sua idade é ${idadeMotorista} anos, você PODE dirigir!!!`)
  }