//3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.



let arrayNuevo = [10,40,30,20,15,5];

let nueva = arrayNuevo.sort(function(a,b){return a-b});

console.log(nueva);

let maximo = Math.max(...arrayNuevo);
let minimo = Math.min(...arrayNuevo);


console.log(maximo);
console.log(minimo);


