// *****************************************************
//  3. Control de flujo: bucles for, while, do while...
//  Lun. 29/04/2024
// *****************************************************


// 🔁 BUCLES 🔁

// ✅ While y do while

// While con operador incremento++ al final
let a = 1;

while (a < 10) {
    console.log(a);
    a++
}

// While con operador de incremento++ antes de la llamada consola
let p = 1;

while (p < 10) {
    p++
    console.log(p);
}


// While con condición de cierre dependiente de booleano
let valor = 0;
let fin = false;
while(!fin) {
    valor = prompt("introduce un numero mayor que 100: ")
    if(valor > 100){
        fin = true;
    }else {
        console.log("El valor es menor que 100.")
    }
}
console.log("fin de la ejecucion")


// ✅ Bucles for 🔁

// Imprime todos los valores que toma i 10 veces (de 0 a 9)
for (let i = 0; i < 10; i++) {
    console.log(i);
}


// Imprime todos los valores que toma i (de 0 a 3 x5 x3) y que toma j (de 0 a 4 x3)
for(let i = 0; i < 3; i++){
    for(let j = 0; j < 5; j++){
        console.log("item1 = %s, item2 = %s",i, j);
    }
}

//A veces es conveniente, como vemos en el ejemplo colocar el tipo de valor que queremos que se muestre en salida, en JS:
// %s for a String
// %d or %i for Number
// %f for Floating points
// %o for an Object
// %j for an JSON

// Otra forma de hace lo mismo que antes con while:

let i = 0;
let j = 0;
while (i < 3)
{
    j = 0;
    while(j<5)
    {
        console.log("item1 = %s, item2 = %s", i, j);
        j++;
    }
    i++;
}
