function calcularPotencia(base, expoente) {
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
  