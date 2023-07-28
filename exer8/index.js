const salario = parseFloat(prompt('Diga o seu salário: '));
const limiteIR = 1903.98;
  if(salario <= limiteIR){
    document.write(`Seu salário é de R$${salario.toFixed(2)}. Você está isento do pagamento do Imposto de Renda.`)
  } else{
    document.write(`Seu salário é de R$${salario.toFixed(2)}. Você será tributado ao pagamento do Imposto de Renda.`)
  }

// 8. Crie uma variável para armazenar o salário do usuário e atribua um
// valor a essa variável. Crie a validação necessária:
// - Caso o salário seja MENOR que R$ 1.903,98, insira no html
// "ISENTO DE IR";
// - caso contrário insira "TRIBUTADO NO IR".