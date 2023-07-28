const diaSemana = Number(prompt('Digite o número referente ao dia da semana que deseja: \n1. Domingo;\n2. Segunda;\n3. Terça;\n4. Quarta;\n5. Quinta;\n6. Sexta;\n7. Sábado.'))
  if(diaSemana == '' || diaSemana < 1 || diaSemana == isNaN(diaSemana) || diaSemana > 7){
    document.write('Você deve digitar um número positivo inteiro de 1 ao 7. ')
  }

  if(diaSemana === 1){
    document.write(`DOMINGO`)
  }else if(diaSemana === 2) {
    document.write(`SEGUNDA`)
  }else if(diaSemana === 3) {
    document.write(`TERÇA`)
  }else if(diaSemana === 4) {
    document.write(`QUARTA`)
  }else if(diaSemana === 5) {
    document.write(`QUINTA`)
  }else if(diaSemana === 6) {
    document.write(`SEXTA`)
  }else if (diaSemana === 7){
    document.write(`SÁBADO`)
  } else{
    document.write(`<p>Dia não reconhecido!</p>`)
  }


// 3. Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
// número de 1 a 7 e imprimir no console o dia da Semana. Para este
// exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
// por diante. Caso o número recebido não esteja neste intervalo
// imprimir “Dia não reconhecido”.