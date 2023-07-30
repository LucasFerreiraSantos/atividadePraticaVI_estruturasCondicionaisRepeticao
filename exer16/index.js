const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();
const anoNascimento = Number(prompt('Qual o seu ano de nascimento? '))
const calculoIdade = anoAtual - anoNascimento
  if(calculoIdade < 16){
    document.write(`Sua idade é ${calculoIdade} anos. Você NÃO PODE VOTAR!`)
  } else if(calculoIdade >= 16 && calculoIdade < 18 || calculoIdade > 65){
    document.write(`Sua idade é ${calculoIdade} anos. Seu voto é OPCIONAL!`)
  } else{
    document.write(`Sua idade é ${calculoIdade} anos. Você PODERÁ VOTAR!`)
  }

// 16. Escreva um algoritmo que armazene o ano atual e o ano de
// nascimento de uma pessoa. Escrever uma mensagem no console
// que diga se ela poderá ou não votar este ano (não é necessário
// considerar o mês em que a pessoa nasceu).