/*function calcularPotencia(base, expoente) {
    if (expoente === 0) {
      return 1;
    } else if (expoente === 1) {
      return base;
    } else {
      return base + calcularPotencia(base, expoente - 1);
    }
  }
  
  const prompt = require('prompt-sync')();
  const base = parseInt(prompt("Digite a base:"));
  const expoente = parseInt(prompt("Digite o expoente:"));
  
  const resultado = calcularPotencia(base, expoente);
  
  console.log(`${base} elevado à potência ${expoente} é igual a ${resultado}`);
  */

const prompt = require(`prompt-sync`)();

console.log("Vamos calcular uma potência");

while (true) {

  let base = +prompt("Base: ");
  base = +base;
  let expoente = +prompt("Expoente: ");
  let resultado = base;
  let base_aux= base;
  
  for (let j = 1; j < expoente; j++) {
    for (let i = 0; i < base; i++) {
      resultado += base;
    }
    base_aux = resultado
  }
  console.log(resultado);
}
