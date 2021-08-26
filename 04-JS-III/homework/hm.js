// function empiezaConNueve(n) {
//     //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
//     //inicia con 9 y false en otro caso.
//     //Escribe tu código aquí

//     let cadena2 = n;
//     cadena = cadena2.toString();
//     if (cadena.length === 1) {
//         return cadena === '9' ? true : false;
//     } else {

//         cadena = cadena.slice(0, 1);
//         return cadena === '9' ? true : false;
//         console.log(cadena);

//     }


// }
// console.log(empiezaConNueve(9));;
// let ok =["Marzo", "Diciembre", "Abril", "Junio", "Julio", "Noviembre", "Enero", "Mayo", "Febrero"];
// function mesesDelAño(array) {
//     //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
//     // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
//     //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
//     // Tu código:
//     let mensaje = "No se encontraron los meses pedidos";
//     let arreglo = [];
  
//     var elements = ["Enero", "Marzo", "Noviembre"];
//     for (let i = 0; i < array.length; i++) {
  
//       for (let j = 0; j < elements.length; j++) {
  
//         if (array[i] === elements[j]) {
//           arreglo.push(elements[j]);
//         //   elements = elements.splice(j)
//           console.log(arreglo);
//         //   console.log(elements);
//         }else{
//           continue;
//         }
  
//       }
//     }
//     return (arreglo.length === 3)?arreglo:mensaje;
  
//   }
//   console.log(mesesDelAño(ok));