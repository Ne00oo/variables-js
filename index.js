// function mayorNumero (dato1, dato2) {
//     console.log(dato1);
//     console.log(typeof(dato1));
//     console.log(typeof(dato1) !== 'number');

//     if (typeof(dato1) !== 'number') {

//         return 'a, no es un numero';

//     }
//     console.log(dato2);
//     console.log(typeof(dato2));
//     console.log(typeof(dato2) !== 'number');    

//     if (typeof(dato2) !== 'number') {

//         return 'b, no es un numero';

//     }
    
//     return 'paso validaciones';
  
// }
// const resultado = mayorNumero(100, 8, 9);
// console.log('====================================');
// console.log(resultado);
// console.log('====================================');

function detector(respuesta) {
    const resp =  respuesta=="si" ? ('irás a la cárcel') :( 'irás a casa');

    console.log(resp);
	// if(respuesta=="si"){
	// 	alert("irás a la cárcel");
	// }else if(respuesta=="no"){
	// 	alert("irás a casa");
	// }else{
	// 	alert("la documentación por favor");
	// }

}
// detector('si');
detector('si');
