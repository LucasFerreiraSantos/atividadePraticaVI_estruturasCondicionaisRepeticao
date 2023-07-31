const valorCompra = parseFloat(prompt('Qual o valor da sua compra: '))
const pagamento = confirm('O pagamento será a vista?')
const descontoAvista = valorCompra * 2.50 / 100
const juros6 = valorCompra * 6 / 100
const juros13 = valorCompra * 13 / 100
let quantParcelas = 0

  if(pagamento == true){
    document.write( valorCompra - descontoAvista)
  }else{
    quantParcelas = Number(prompt('Em quantas vezes deseja dividir?\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15'))
  }

switch(true){
  case quantParcelas === 2 || quantParcelas <= 5:
    document.write(`Preço de tabela, sem desconto ou acréscimo.<br>`)
    const valorParcela = valorCompra / quantParcelas
    document.write(`Você optou por pagar em ${quantParcelas}x, no valor de RS${valorParcela.toFixed(2)} e o preço total da compra é de R$${valorCompra.toFixed(2)}.`)
    break;

  case quantParcelas === 6 || quantParcelas <= 10:
    document.write(`Juros de 6% sobre o preço de tabela.<br>`)
    const valorTotal = valorCompra + juros6
    const valorParcela2 = valorTotal / quantParcelas
    document.write(`Você optou por pagar em ${quantParcelas}x, no valor de R$${valorParcela2.toFixed(2)} e o preço total da compra é de R$${valorTotal.toFixed(2)}, acrescentado os juros no valor de R$${juros6.toFixed(2)}.`)
    break;

  case quantParcelas === 11 || quantParcelas <= 15:
    document.write(`Juros de 13% sobre o preço de tabela.<br>`)
    const valorTotal2 = valorCompra + juros13
    const valorParcela3 = valorTotal2 / quantParcelas
    document.write(`Você optou por pagar em ${quantParcelas}x, no valor de R$${valorParcela3.toFixed(2)} e o preço total da compra é de R$${valorTotal2.toFixed(2)}, acrescentado os juros no valor de R$${juros13.toFixed(2)}.`)
    break;
}