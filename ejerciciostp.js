/*
1) Convertir una cadena de texto a formato de título:
Crear una función que reciba una frase (string) y devuelva la misma frase con el formato de
título, donde la primera letra de cada palabra está en mayúscula y el resto en minúscula.

● Ejemplo: Si la entrada es “mi amigo me invitó a comer”, la salida debería ser “Mi
Amigo Me Invitó A Comer”.

● Ayuda: Los strings entienden una función “toLowerCase()” que convierte la primera
letra del texto en mayúscula. Además, se espera que se resuelva con algún ciclo (exacto
o inexacto) y utilizando la función anteriormente mencionada.*/

function convertidor(frase){
     
    var fraseComoTitulo = "";
    var convertirAMayuscula = true;

    for (var i = 0; i < frase.length; i++) {

    if (convertirAMayuscula) {
        fraseComoTitulo += frase[i].toUpperCase();
        convertirAMayuscula = false;
      } 
      
    else {
        fraseComoTitulo += frase[i].toLowerCase();
      }
      
      if (frase[i] == " ") {
          convertirAMayuscula = true;
        }
    } 
      return fraseComoTitulo;
  }
    


console.log(convertidor("juanma me puso un cinco"));


/*
2) Concatenar elementos de un array con un separador personalizado:

Crear una función que reciba un array de strings y un separador, y devuelva una sola cadena de
texto que contenga todos los elementos del array concatenados con el separador especificado.

● Ejemplo: Si la entrada es ["Hola", "Mundo", "JavaScript"] y el separador “-”, la
salida debería ser "Hola-Mundo-JavaScript"
*/

function concatenarConSeparador(array, separador){
    var resultado = array[0];
    resultado = "";
   for (var i = 0; i < array.length; i++) {
     if(i==(array.length-1)){
  
        resultado += array[i]; 
  
     }
     else{
         resultado += array[i] + separador ;
     } 
  }
   
  
   return resultado;
  }
  
  console.log(concatenarConSeparador(["Me", "dolio", "el", "cinco", "de", "Juanma"], "-"));



/*
3) Revertir las palabras de una frase:
Crear una función que reciba una cadena de texto y devuelva la misma cadena con las palabras
en orden inverso.

● Ejemplo: Si la entrada es "JavaScript es divertido", la salida debería ser “divertido es
JavaScript”

● Ayuda: Se sugiere recorrer la frase con algún ciclo de repetición. Cada vez que se
encuentre un espacio en blanco se habrá encontrado una palabra. Cada palabra podría
ser insertada en un array (¿para qué?)*/
function revertir(frase){
   
    var array1 = [];
    var j = 0;
    var array2=""
    for(var i = 0; i < frase.length; i++){
        if(frase[i] !== " "){
            if (!array1[j]){
                array1[j] = ""; 
            }
            array1[j] += frase[i];
        }
        else{
            j++;
        }
    }
    for(var i = array1.length - 1; i >= 0; i--){
       
       if(i !=array1.length){ 
       array2 += array1[i] + " "; 
    }
    else{
       array2 += array1[i];
    }
   }
   
   return array2; 
    
 }
 
console.log(revertir("Java es divertido o no"));

 

 /*
4) Contar la cantidad de veces que aparece una palabra en una cadena:
Crear una función que reciba una cadena de texto y una palabra, y devuelva la cantidad de
veces que aparece esa palabra en la cadena.
● Ejemplo: Si la entrada es "El sol brilla y el cielo está despejado.", y la palabra que se
quiere buscar es “el”, la salida debería ser el número 2.
● Ayuda: Se sugiere recorrer la frase con algún ciclo de repetición. Cada vez que se
encuentre un espacio en blanco se habrá encontrado una palabra. Cuando se tenga una
palabra, se la podrá comparar con la palabra buscada y si coincide … (siga usted!)*/

function contadorAparicionesPalabra(cadenaDeTexto,palabraaBuscar){
   
    var array1 = [];
    var j = 0;
    var contador = 0;
    var cadenaEnMinusculas = cadenaDeTexto.toLowerCase();
    var palabraEnMinusculas = palabraaBuscar.toLowerCase();
    
    for(var i = 0; i < cadenaEnMinusculas.length; i++){
        if(cadenaEnMinusculas[i] !== " "){
            if (!array1[j]){
                array1[j] = ""; 
            }
            array1[j] += cadenaEnMinusculas[i];
        }
        else{
            j++;
        }
     }
    
     for(var i = 0; i < array1.length; i++){
         if(array1[i] === palabraEnMinusculas){
             contador++;
         }
     }
     
     return contador;
 }
 
  
 console.log(contadorAparicionesPalabra("Java Es divertido y es dinamico","Es"));
  


 /*
5) Comprobar si una cadena de texto termina con un determinado sufijo:
Crear una función que reciba una cadena de texto y un sufijo, y devuelva true si la cadena
termina con ese sufijo, false en caso contrario.
● Ejemplo: Si la entrada es "JavaScript es un lenguaje de programación" y se pretende
saber si termina con “ción”, debería devolver true.
● Ayuda: Se espera que el ejercicio se resuelva con ciclos inexactos.*/

function oracionTerminaConSufijo(cadena,sufijo){
    var ultimaPalabraInvertida = "";
    var sufijoInvertido = "";
    var respuesta = false;
    for(var i = cadena.length-1; i >= 0 && cadena[i] !== " ";i --){
        ultimaPalabraInvertida += cadena[i];
    }
    for(var j = sufijo.length-1; j >= 0; j-- ){
        sufijoInvertido += sufijo[j];
    }
    for(var k=0 ; k < sufijoInvertido.length;k++){
        if(ultimaPalabraInvertida[k] !== sufijoInvertido[k]){
            return console.log(respuesta);
        }    
    }
            respuesta = true;
            return console.log(respuesta); 
}

oracionTerminaConSufijo("Espero que este codigo","go");



/*
6) Eliminar los espacios en blanco al inicio y final de una cadena:
Crear una función que reciba una cadena de texto y elimine los espacios en blanco al inicio y
final de la misma.
● Ejemplo: Si la entrada es " JavaScript es divertido “, la salida debería ser "JavaScript
es divertido".
● Ayuda: Se sugiere utilizar un ciclo exacto para recorrer toda la frase y que cada vez que
se encuentre un caracter no “vacío” (espacio) se lo considere para la nueva palabra “sin
espacios”. Si se le busca la vuelta, se puede reutilizar la función del punto 2.*/
    
function eliminarEspaciosBlancos(oracion){
    var oracionSinEspacios = "";
    
     for (var i = 0; i < oracion.length; i++) {
    
        if(oracion[i] != " " || (oracion[i - 1] != " " && oracion[i + 1] != " ")){
            oracionSinEspacios += oracion[i];
        }
    }
    
        console.log(oracionSinEspacios);
      
     
     return oracionSinEspacios;
    }

   eliminarEspaciosBlancos("   Aprobame el tp eze porfavor   ");


   /*
7) Extraer el dominio de una dirección de correo electrónico:
Crear una función que reciba una dirección de correo electrónico y devuelva únicamente el
dominio de la misma.
● Ejemplo: Si la entrada es “jhondoe@ahk.com.ar”, la salida debería ser “ahk.com.ar”*/

function extraerDominio(email){
    var dominio = "";
    for(var i = 0; i < email.length; i++){
        if(email[i]=="@"){
            for(var j = i+1; j < email.length; j++){
                dominio += email[j];
        }
        return dominio;
    }
    
}
}

console.log(extraerDominio("germanmbauer@ahk.com.ar"));



/*
9)Calcular impuestos:
Desarrollar una función que permita conocer los impuestos que debe abonar una persona dada
su edad y sus ingresos mensuales. Los impuestos a abonar por una persona entre 18 y 20 años
es un 10% de los ingresos; las personas entre 21 y 30 deben abonar 15% de los ingresos; y
todo el resto un 40%. Los menores de edad no abonan impuestos.

● Ejemplo: Si la entrada fuera la edad 18 e ingreso 1000, la salida esperada debería ser
100*/

function calcularimpuestos(edad,ingresosMensuales){
    var impuestoAAbonar;
    if(edad >= 18 && edad <= 20){
       ingresosMensuales = (ingresosMensuales/100)*10;
       impuestoAAbonar = ingresosMensuales;
    }
    else if(edad >= 21 && edad <= 30){
       ingresosMensuales = (ingresosMensuales/100)*15;
       impuestoAAbonar = ingresosMensuales;

    }
    else if(edad >= 31){
    
       ingresosMensuales = (ingresosMensuales/100)*40;
       impuestoAAbonar = ingresosMensuales;
    }
    else{
      return "No abona impuestos";
    }
    return impuestoAAbonar;
}

console.log(calcularimpuestos(18,18000));



/*
9) Combinar dos arrays alternando sus elementos:
Crear una función que reciba dos arrays y devuelva un nuevo array con los elementos de ambos
arrays combinados alternativamente.
● Ejemplo: Si la entrada fueran los arrays [1, 2, 3] y ['a', 'b', 'c', ‘d’], la salida debería ser [1,
‘a’, 2, ‘b’, 3, ‘c’, ‘d’]*/

function alternarArrays(array1, array2) {
    var array3 = [];
    var k = 0;
    var y = 0;

    for (var i = 0; k < array1.length || y < array2.length; i++) {
        if (k < array1.length && (i % 2 == 0)) {
            array3.push(array1[k]);
            k++;
        } else if (y < array2.length && (i % 2 !== 0)) {
            array3.push(array2[y]);
            y++;
        }
    }

    return array3;
}

console.log(alternarArrays([1, 2, 3, 4, 5, 6, 7], ['a','d']));



/*
10) Resumen de cantidad de likes:
Desarrollar una función que, dada una cantidad numérica de likes, devuelva un texto informativo
de la cantidad de likes en formato de “K” para miles y “M” para millones.

● Ejemplo: Si la entrada fuera 1400, la salida debería ser “1.4K”; o si la entrada fuera “34
567” la salida debería ser “34.5K”*/

function cantDeLikes(numeroLikes){
    var resto;
    if(numeroLikes > 999 && numeroLikes < 1000000){
      
        resto = numeroLikes % 100;
       numeroLikes = numeroLikes - resto;
       numeroLikes = numeroLikes / 1000;
       numeroLikes = numeroLikes+"K";
       return numeroLikes;
    }
    if(numeroLikes > 999999 ){

        resto = numeroLikes%100000;
        numeroLikes = numeroLikes - resto;
        numeroLikes = numeroLikes / 1000000;
        numeroLikes = numeroLikes+"M";
        return numeroLikes;

    }
    else{
        return numeroLikes;
    } 
}

console.log(cantDeLikes(23243300))

