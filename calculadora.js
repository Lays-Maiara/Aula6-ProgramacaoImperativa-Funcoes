// Aula 06 - 19/08/2021
// Funções - Aplicando os conhecimentos
// 1. Calculadora - Nível I, II e III

function adicionar(valor1, valor2) {
  let resultadoAdicao = valor1 + valor2
  return resultadoAdicao
}
console.log (" Teste de Operações / Calculadora - Adição")

console.log (adicionar (50, 20))


function subtracao(valor1, valor2) {
  let resultadoSubtracao = valor1 - valor2
  return resultadoSubtracao
}
console.log (" Teste de Operações / Calculadora - Subtração")

console.log (subtracao (25, 12))

function multiplicacao(valor1, valor2) {
  let resultadoMultiplicacao = valor1 * valor2
  return resultadoMultiplicacao
}

console.log (" Teste de Operações / Calculadora - Multiplicção")

console.log (multiplicacao (45, 7))

function divisao(valor1, valor2) {
  let resultadoDivisao = valor1 / valor2
  return resultadoDivisao
}

console.log (" Teste de Operações / Calculadora - Divisão")

console.log (divisao (100, 0))

function quadradoDoNumero (numero) {
  let resultadoquadradoDoNumero = numero * numero
  return resultadoquadradoDoNumero
}

console.log (" Teste de Operações / Calculadora - Quadrado de um número")

console.log (quadradoDoNumero (7))

function mediaDeTresNumeros (numeroA, numeroB, numeroC) {
  let resultadoMediaDeTresNumeros = (numeroA + numeroB + numeroC) / 3
  return resultadoMediaDeTresNumeros
}

console.log (" Teste de Operações / Calculadora - Média de 3 Números")

console.log (mediaDeTresNumeros (3, 5, 7))

function calculaPorcentagem (valor1, valor2) {
  let resultadoPorcentagem =  (valor2/100) * valor1
  return resultadoPorcentagem
}

console.log (" Teste de Operações / Calculadora - Porcentagem")

console.log (calculaPorcentagem (500, 15))

function geradorDePorcentagem (valor1, valor2) {
  let resultadogeradorDePorcentagem = (valor1*100) / valor2
  return resultadogeradorDePorcentagem
}

console.log (" Teste de Operações / Calculadora - Gerador de Porcentagem")


console.log (geradorDePorcentagem (50, 200))