const idadeMotorista = Number(prompt('Qual a sua idade? '))
const possuiHabilitacao = confirm('Você possui habilitação?')
  if(idadeMotorista < 18){
    document.write(`Sua idade é ${idadeMotorista} anos, você NÃO pode dirigir!!!`)
  } else{
    document.write(`Sua idade é ${idadeMotorista} anos, você é maior de idade! `)
      if(possuiHabilitacao === true){
        document.write('Você PODE DIRIGIR!')
      } else{
        document.write('Você NÃO PODE DIRIGIR!')
      }
  }

// 2. Para o mesmo exercício acima insira mais uma variável a
// condicional, além de saber se o motorista tem 18 anos ou mais,
// temos que saber também se ele é habilitado para dirigir. Caso ele
// tenha idade maior ou igual a 18 anos e possua habilitação, insira no
// html “Pode dirigir” caso contrário imprima “Não pode dirigir”.