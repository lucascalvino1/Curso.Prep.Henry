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
  keys=Object.keys(objeto);
  values=Object.values(objeto);

  len = keys.length;
  array=[]
  for (i=0;i<len;i++){
    arr2=[]
    arr2.push(keys[i])
    arr2.push(values[i])
    array.push(arr2)
  }
  

  return array

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  dicc={}
  chars=[]
  //(string.match(/o/g)||[]).length// "this is foso bar".split("s").length-1
  for (i=0;i<string.length;i++){
    char = string[i];
    count=0;
    if (char!=" "){
    
    if (chars.includes(char)){
      continue
    } else {

      count = (string.split(char).length-1);
      dicc[char]=count

    }
    
    chars.push(char)

    


  }}
  return dicc
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  minus = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  mayus=""
  minusc=""
  for (i=0;i<s.length;i++){
  char= s[i]
  if(minus.includes(char)){
    minusc=minusc+char
  }else{mayus=mayus+char}
}
return mayus+minusc
}

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  array_strings = str.split(" ")
  str_fin=""
  pala2=""
  for (i=0;i<array_strings.length;i++){
    pala = array_strings[i];
    pala2="";
    for (j=pala.length-1;j>-1;j=j-1){
      char2=pala[j];
      pala2=pala2+char2;
    }
    if (i!==(array_strings.length-1)){
    str_fin=str_fin+pala2+" ";
    }else{str_fin=str_fin+pala2}
  }
  return str_fin
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var capi=""
  var numero_string = numero.toString();
  for (j=numero_string.length-1;j>-1;j=j-1){
    num=numero_string[j];
    capi=capi+num;
  }

  if (numero==capi){return "Es capicua"}else{return "No es capicua"}

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var letras_no = ["a","A","b","B","c","C"]
  var cadena_def=""
  for (i=0;i<cadena.length;i++){
    if(letras_no.includes(cadena[i])){
      continue
    }else{cadena_def=cadena_def+cadena[i]

    }

  }
  return cadena_def
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort(function(a,b){
    return a.length - b.length
  ;})
  return arr

}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  
  intersec =[]

  for (i=0;i<arreglo1.length;i++){
    if (arreglo2.includes(arreglo1[i])){
      intersec.push(arreglo1[i])
    }
  }

  for (i=0;i<arreglo2.length;i++){
    if (arreglo1.includes(arreglo2[i])){
      intersec.push(arreglo2[i])
    }
  }

  intersec_final=[]
  for (i=0;i<intersec.length;i++){
    if (intersec_final.includes(intersec[i])){
      continue
    } else { intersec_final.push(intersec[i])}
  }

  return intersec_final
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

