/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0]
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[(array.length-1)]
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var masuno= array.map((num) => {return num + 1});
   return masuno 
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:

   var frase = palabras.join(" ");
   return frase

}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   if (array.includes(elemento)) { return true}
   else return false 
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var suma = 0
   for (i = 0 ; i < arrayOfNums.length ; i++){
      suma = suma + arrayOfNums[i]
   }
   return suma
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var suma2 = 0
   for (i=0 ; i<resultadosTest.length ; i++){
      suma2 = suma2 + resultadosTest[i]
   }
   var promedio = suma2/resultadosTest.length
   return promedio 
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
      var mayor = arrayOfNums[0]
      for (i=1 ; i<arrayOfNums.length ; i++){
          if (arrayOfNums[i]>arrayOfNums[i-1] && arrayOfNums[i]>mayor) {mayor = arrayOfNums[i]}
          else if (arrayOfNums[i]<arrayOfNums[i-1] && arrayOfNums[i-1]>mayor) { mayor = arrayOfNums[i-1]}
          else {mayor = mayor}
      }
      return mayor}


function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if (arguments.length == 0) { return 0}
   else if (arguments.length == 1) {return arguments[0]}
   let resultado=arguments[0]
   for (i=1; i < arguments.length ; i++){
     resultado =  arguments[i]*resultado;
   }
   return resultado}


function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var cantidad=0
   array.forEach(element => {if(element>18) {cantidad = cantidad+1}
      
   });
   return cantidad
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   switch(numeroDeDia){
   case 1: return "Es fin de semana";
   case 7: return "Es fin de semana";
   case 2: return "Es dia laboral";
   case 3: return "Es dia laboral";
   case 4: return "Es dia laboral";
   case 5: return "Es dia laboral";
   case 6 : return "Es dia laboral";
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   num = num.toString()
   arraynum = num.split('')
   if (arraynum[0] == 9) {return true}
   else { return false}
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   if (array.every(num => num==array[0])== true){return true}
   else {return false}
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   nuevoarray = []
   if (array.includes("Enero") && array.includes("Marzo") && array.includes("Noviembre")){
     for (i=0 ; i < array.length ; i++) {
      if (array[i] == "Enero" || array[i] == "Marzo" || array[i]== "Noviembre"){
         nuevoarray.push(array[i])
      }}
      return nuevoarray
     }
     else {return "No se encontraron los meses pedidos"}
   }
      

 function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   valor = 0
   tabla=[]
   numero = 0
   do {
      numero = 6*valor
      tabla.push(numero)
      valor = valor+1
   }
   while (valor <=10)

   return tabla
   }


function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:

   nuevoCien = []
   array.forEach((num)=> {if (num>100) {nuevoCien.push(num)}})
   return nuevoCien
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   iter = 1
   arreglo = []
   while (iter <=10){
      if (num=== iter){
         return "Se interrumpió la ejecución"
      }
      iter = iter + 1
      num = num + 2
      arreglo.push(num)
   }
   return arreglo 
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   ite = 1
   arre = []
   while (ite <=10){
      
      ite = ite + 1
      
      if (ite === 5){
         continue
      }
      num = num + 2
      arre.push(num)
   }
   return arre 
   
}


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
