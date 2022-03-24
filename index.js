// function mayorNumero (a, b) {
//     if (typeof(a) === 'number') {
//         console.log('paso validaciones para a');
//     }else{
//         return 'a, no es un numero';
//     }

//     if (typeof(b) === 'number') {
//         console.log('si es numero', b);
//     }else{
//         return 'b, no es un numero';
//     }
  
// }


function mayorNumero (dato1, dato2) {
    console.log(dato1);
    console.log(typeof(dato1));
    console.log(typeof(dato1) !== 'number');

    if (typeof(dato1) !== 'number') {

        return 'a, no es un numero';

    }
    console.log(dato2);
    console.log(typeof(dato2));
    console.log(typeof(dato2) !== 'number');    

    if (typeof(dato2) !== 'number') {

        return 'b, no es un numero';

    }
    
    return 'paso validaciones';
  
}
const resultado = mayorNumero(100, 8, 9);
console.log('====================================');
console.log(resultado);
console.log('====================================');

