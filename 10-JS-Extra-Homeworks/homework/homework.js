// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
var newArray = [];
for ( var key in objeto) {
  newArray.push([key,objeto[key]]);
}
return newArray;

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí
    var objeto = {};
    for(var i = 0; i < string.length; i++) {
      if (!objeto[string[i]]){
        objeto[string[i]] = 0;
      }
      objeto[string[i]] +=1;
    }
    return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
var may = "";
var min = "";
for (var i = 0; i < s.length; i++){
  if (s[i].toUpperCase()===s[i]){
    may+=s[i]
  }else{
    min+=s[i];
  }
}
return may+min;
}

function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
var mirror = "";
for (let i = str.length-1; i >= 0; i-- ){
  mirror+=str[i]
}
var array = mirror.split(" ")
return array.reverse().join(" ");
}


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
var num = numero.toString();
for ( let i = 0; i < num.length/2; i++){
  if (num[i] !== num [num.length-1-[i]])
  return "No es capicua"
}
  return "Es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var exclude = ["a","b","c"];
  var newstring = ""
  for ( let i = 0; i < cadena.length; i++){
    if (!exclude.includes(cadena[i])){
      newstring += cadena[i]
    }
  }
    return newstring;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  for (let i = 0; i < arr.length; i++) {
    var temp = arr[i];
    var j = i -1;
    while (j >= 0 && temp.length < arr[j].length){
      arr[j+1] = arr[j];
      j--
    }
    arr [j+1] = temp
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var newarray = [];
  for (let i = 0; i < arreglo2.length; i++){
    if (arreglo1.includes(arreglo2[i])){
    newarray.push(arreglo2[i])
  }
}
  return newarray;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
