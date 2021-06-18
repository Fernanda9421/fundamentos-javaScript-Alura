/*
// Achar a área de um retangulo:

var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area);

var area; //pode ser declarada depois de usá-la, em qualquer lugar.
*/

// Retângulo ou triângulo:
let forma = 'Triângulo';
let altura = 5;
let comprimento = 7;
let area;

if (forma === 'Retângulo') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area);