const numEleitores = parseInt(prompt('Qual o número de eleitores do município: '))
const votosBrancos = parseInt(prompt('Número de votos brancos: '))
const votosNulos = parseInt(prompt('Número de votos nulos: '))
const votosValidos = numEleitores - (votosBrancos + votosNulos)
const verificacao = votosBrancos + votosNulos

  if(verificacao > numEleitores){
    document.write('DADOS INCOERENTES!! A soma de votos brancos, nulos e válidos, não pode ser maior que o número de ELEITORES.')
  }else{
    const percentualBrancos = (votosBrancos / numEleitores) * 100
    const percentualNulos = (votosNulos / numEleitores) * 100
    const percentualValidos = (votosValidos / numEleitores) * 100

    document.write(`O número total de eleitores é ${numEleitores}.<br>`)
    document.write(`Houveram ${votosBrancos} votos em branco, que correspondem ao percentual de ${percentualBrancos}%.<br>`)
    document.write(`Houveram ${votosNulos} votos nulos, que correspondem ao percentual de ${percentualNulos}%.<br>`)
    document.write(`E houveram ${votosValidos} votos válidos, que correspondem ao percentual de ${percentualValidos}% da quantidade de votos totalizada.`)
  }

// 17. Escreva um algoritmo que armazene o número total de eleitores de
// um município, o número de votos brancos, nulos e válidos. Calcular
// e escrever o percentual que cada um representa em relação ao
// total de eleitores. O algoritmo deve fazer uma validação para que as
// porcentagens dos votos armazenados (brancos, nulos e válidos)
// respeitem o limite do número total de eleitores, ou seja, garantir que
// a soma dos votos brancos, nulos e válidos não seja maior que o
// número total de eleitores.