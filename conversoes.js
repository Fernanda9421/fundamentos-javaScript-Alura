// conversão implícita:

const numero = 456;
const numeroString = '456';

console.log (numero === numeroString); // retorna false
console.log (numero == numeroString); // retorna true

console.log (numero + numeroString); // retorna 456456 (transformou o numero em string)

// conversão explícita:
// Number();
// String();

console.log(numero + Number(numeroString)); // retorna a soma = 912