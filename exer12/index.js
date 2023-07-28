const idade = Number(prompt('Qual a sua idade: '))
  if(idade >=18 && idade <= 67) {
    document.write(`VOCÊ pode doar sangue!`)
  } else{
    document.write(`VOCÊ NÃO PODE DOAR SANGUE!`)
  }

// 12. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um
// programa que armazene a idade de uma pessoa e diga se ela pode
// doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E
// (&&).