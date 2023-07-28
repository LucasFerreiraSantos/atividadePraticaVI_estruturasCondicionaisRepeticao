const turno = prompt('Qual o seu turno:\nM.Matutino;\nV.Vespertino;\nN.Noturno.').toUpperCase()

  switch(turno){
    case 'M':
      document.write('BOM DIA!!!')
      break
    case 'V':
      document.write('BOA TARDE!!!')
      break
    case 'N':
      document.write('BOA NOITE!!!')
      break
    default:
      document.write('VALOR INVÁLIDO!')
  }

// 11. Utilizando Switch, faça um programa que pergunte em que turno
// você estuda. Peça para digitar “M” para matutino ou “V” para
// vespertino ou “N” para noturno. Mostre um alerta com a mensagem
// “Bom dia!” ou “Boa tarde” ou “Boa Noite” ou “Valor inválido”,
// conforme o caso.