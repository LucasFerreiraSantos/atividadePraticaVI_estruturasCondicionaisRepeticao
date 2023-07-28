const diaSemana = Number(prompt('Digite o número referente ao dia da semana que deseja: \n1. Domingo;\n2. Segunda;\n3. Terça;\n4. Quarta;\n5. Quinta;\n6. Sexta;\n7. Sábado.'))
  if(diaSemana == '' || diaSemana < 1 || diaSemana == isNaN(diaSemana) || diaSemana > 7){
    document.write('Você deve digitar um número positivo inteiro de 1 ao 7. ')
  }
  
  switch(diaSemana){
    case 1:
      document.write(`DOMINGO`)
      break;
    case 2:
      document.write(`SEGUNDA`)
      break;
    case 3:
      document.write(`TERÇA`)
      break;
    case 4:
      document.write(`QUARTA`)
      break;
    case 5:
      document.write(`QUINTA`)
      break;
    case 6:
      document.write(`SEXTA`)
      break;
    case 7:
      document.write(`SÁBADO`)
      break;
    default:
      document.write(`<p>Dia não reconhecido!</p>`)
  }

// 4. Reescreva o exercício 3, utilizando apenas o SWITCH.