const altura = parseFloat(prompt('Digita a sua altura: '))
const sexo = prompt('Qual o seu sexo:\n1.Feminino;\n2.Masculino.')

  switch(+sexo){
    case 1:
      const pesoIdealFeminino = (62.1 * altura) - 44.7
      document.write(`Seu peso ideal é ${pesoIdealFeminino.toFixed(2)}`)
      break
    case 2:
      const pesoIdealMasculino = (72.7 * altura) - 58
      document.write(`Seu peso ideal é ${pesoIdealMasculino.toFixed(2)}`)
      break
  }
  
// 10. Tendo como entrada a altura e o sexo (codificado da seguinte
//   forma: 1 para sexo feminino e 2 para sexo masculino) de uma
//   pessoa, construa um programa que calcule e mostre seu peso ideal,
//   utilizando as seguintes fórmulas:
//   - para homens: (72.7 * Altura) – 58
//   - para mulheres: (62.1 * Altura) – 44.7