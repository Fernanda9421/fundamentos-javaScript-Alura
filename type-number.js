/*
function ganhoPorHora (salario, horasTrabalhadas) {
    const salarioHora = (salario / horasTrabalhadas);
    console.log(Math.round(salarioHora));
}

ganhoPorHora(3000, 176);
*/

/*
function ganhoPorHora (salario, horasTrabalhadas) {
    const salarioHora = (salario / horasTrabalhadas);
    const total = salarioHora.toFixed(2);
    console.log(total);
}
ganhoPorHora(3000, 176);
*/

/*
function ganhoPorHora (salario, horasTrabalhadas) {
    const salarioHora = (salario / horasTrabalhadas);
    const formatado = salarioHora.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    console.log(formatado);
}
ganhoPorHora(3000, 176);
*/

/*
// ORDENAR NÚMEROS:
var lista = [10,1, 5, 9, 8, 12, 15];
function comparaNumeros(a,b) { if (a == b) return 0; if (a < b) return -1; if (a > b) return 1; }

lista.sort(comparaNumeros);
console.log(lista);
*/

//JEITO FÁCIL DE ORDENAR NÚMEROS:
var lista = [10,1, 5, 9, 8, 12, 15];
lista.sort ((a,b) => a-b);

console.log(lista);