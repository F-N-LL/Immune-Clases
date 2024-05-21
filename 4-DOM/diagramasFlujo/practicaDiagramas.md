# EJEMPLOS DE DIAGRAMAS DE FLUJO

Aquí os dejamos una serie de **ejercicios resueltos** (15 en total) y **con su explicación** a modo de ejemplos de construcción de diagramas de flujo de procesos o flujograma de procesos.  
  
Si no tienes claro la teoría te recomendamos primero que veas este enlace: [Diagramas de Flujo](https://www.areatecnologia.com/diagramas-de-flujo.htm "diagramas de flujo").  
  
1. Hacer el [Diagrama de Flujo](https://www.areatecnologia.com/diagramas-de-flujo.htm "Diagramas de Flujo") para sumar dos números leídos por teclado y escribir el resultado.  
  
![ejercicio diagrama de flujo](https://www.areatecnologia.com/informatica/imagenes/ejercicio-diagrama-flujo.jpg)  
  
2. Hacer un diagrama de flujo que permita leer 2 números diferentes y nos diga cual es el mayor de los 2 números.  
  
![diagrama de flujo numero mayor](https://www.areatecnologia.com/informatica/imagenes/ejemplo_diagrama-de_flujo_mayorymenor.jpg)  
  
El pseudocódigo para este diagrama sería:  
  
![pseudocodigo](https://www.areatecnologia.com/informatica/imagenes/pseudocodigo.jpg)  
  
3. Crear un diagrama de flujo de procesos en el que se almacenen 3 números en 3 variables A, B y C. El diagrama debe decidir cual es el mayor y cual es el menor  
  
![ejemplos de diagramas de flujo de procesos](https://www.areatecnologia.com/informatica/imagenes/ejemplos-diagramas-de-flujo2.jpg)  
  
4. Realizar el diagrama de flujo para que nos calcule la hipotenusa de un triángulo rectángulo, conocidos su dos catetos.  
  
![diagrama de flujo hipotenusa triangulo](https://www.areatecnologia.com/informatica/imagenes/diagrama-flujo-hipotenusa.jpg)  
  
5. Diagrama de Flujo para sumar 100 números leídos por teclado.  
  
![ejercicios diagramas de flujo](https://www.areatecnologia.com/informatica/imagenes/ejercicios-diagrama-de-flujo.jpg)  
  
Explicación:  
  
- En I contamos los números que quedan por sumar.  
- En S calculamos la suma.  
- A se emplea para leer temporalmente cada número.  
  
Vamos a ver paso a paso como funciona. Supongamos que los datos son: 7, -1, 8, 5, ...  
  
(1) I=100 (números a sumar)  
(2) S=0 (suma, inicialmente 0) (3) Leer A. El primero es 7, luego A=7 (4) S=S+A=0+7=7  
(5) I=I-1=100-1=99 (6) ¿I=0? ® NO  
(3) Leer A, ahora A=-1  
(4) S=S+A=7-1=6  
(5) I=I-1=99-1=98  
(6) ¿I=0? ® NO  
  
Cuando I=0 habremos sumado los 100 números y pasaremos a: (7) Escribir S que será la suma.  
  
6. Modificar el anterior para que permita sumar N números. El valor de N se debe leer previamente por teclado.  
  
![diagrama de flujo](https://www.areatecnologia.com/informatica/imagenes/diagrama-flujo3.jpg)  
  
  
  
7. Hacer un diagrama de flujo que permita escribir los 100 primeros pares.  
  
![diagrama de flujo numeros pares](https://www.areatecnologia.com/informatica/imagenes/diagrama-flujo-numerospares.jpeg)  
  
Explicación de la solución:  
  
P: Variable para contener el siguiente par que se debe escribir.  
  
I: Contador de pares que quedan por escribir.  
  
El proceso es similar al anterior. Necesitamos un bucle para contar 100 veces y dentro de él escribimos el par e incrementamos para obtener el siguiente.  
  
8. Hacer el diagrama de flujo para sumar los N primeros impares. Realizar después uno que haga lo mismo con los pares y otro con los múltiplos de 3.  
  
![ejercicio diagrama](https://www.areatecnologia.com/informatica/imagenes/diagrama4.jpg)  
  
9. Hacer un diagrama de flujo que simule un reloj.  
  
![diagrama de flujo reloj](https://www.areatecnologia.com/informatica/imagenes/diagrama-flujo-reloj.jpg)  
  
10. Hacer un organigrama que lea N números, calcule y escriba la suma de los pares y el producto de los impares.  
  
![ejemplo diagrama de flujo](https://www.areatecnologia.com/informatica/imagenes/diagrama-flujo-pares-impares.jpg)  
  
11. Calcular el máximo de N números leídos desde teclado.  
  
![ejemplos diagramas de flujo](https://www.areatecnologia.com/informatica/imagenes/ejemplos-diagramas-de-flujo.jpg)  
  
Explicación del Ejemplo de Diagrama:  
  
Vamos a almacenar en M el máximo de los números que se hayan leído, el primero va directamente a M y los N-1 restantes los leemos en A, comparamos con M y si son mayores cambiamos el máximo temporal.  
  
Al final se escribe el resultado.  
  
Vamos a ejecutarlo paso a paso para N=4, empleando como datos: 2, 3, -1, 7.  
  
(1) Leer N ® N=4  
(2) Leer M ® M=2  
(3) I=N-1=3  
(4) Leer A ® A=3 (5) ¿A>M? ® SI (6) M=A=3  
(7) I=I-1=3-I=2  
(8) ¿I=0? ® NO (4) Leer A ® A=-1  
  
12. Un año es bisiesto si es múltiplo de 4, exceptuando los múltiplos de 100, que sólo son bisiestos cuando son múltiplos además de 400, por ejemplo el año 1900 no fue bisiesto, pero el año 2000 si lo será. Hacer un organigrama que dado un año A nos diga si es o no bisiesto.  
  
![ejemplo diagrama de flujo año bisiesto](https://www.areatecnologia.com/informatica/imagenes/ejemplo-diagrama-flujo-bisiesto.jpg)  
  
13. Dados dos números enteros positivos N y D, se dice que D es un divisor de N si el resto de dividir N entre D es 0. Se dice que un número N es perfecto si la suma de sus divisores (excluido el propio N) es N. Por ejemplo 28 es perfecto, pues sus divisores (excluido elv28) son: 1, 2, 4, 7 y 14 y su suma es 1+2+4+7+14=28. Hacer un organigrama que dado un número N nos diga si es o no perfecto.  
  
![ejemplos de diagramas de flujo](https://www.areatecnologia.com/informatica/imagenes/ejemplodiagramadeflujo-numero-perfecto.jpg)  
  
14. Realiza el diagrama de flujo que simule una caja registradora.  
  
![diagrama de flujo caja registradora](https://www.areatecnologia.com/informatica/imagenes/diagrama-de-flujo-caja-registradora.jpg)  
  
El pseudocódigo para esta caja registradora es:  
  
![pseudocodigo caja registradora](https://www.areatecnologia.com/informatica/imagenes/pseudocodigo-caja-registradora.jpg)  
  
  
  
