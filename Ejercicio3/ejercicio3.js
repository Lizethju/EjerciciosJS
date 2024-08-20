
let  consumo = 15;

function calcularPago(estrato,consumo){

    let valorMetrocubico;

switch (consumo){
case 1:{
    valorMetrocubico = 1200; 
    break
}
case 2: {
    valorMetrocubico = 2300;
    break
}
case 3:{
    valorMetrocubico = 3300;
}
default: {
('Estrato incorrecto')
}
}


let valorDelConsumo = valorMetrocubico * consumo


if (consumo >= 20){
    valorDelConsumo * 0.1;
}


const valorFijo = 5800;



const totalApagar = valorDelConsumo + valorFijo
return totalApagar;


}


 
