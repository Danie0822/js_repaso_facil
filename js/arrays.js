const numeros = [1, 2, 3, 4, 5];

const suma = numeros.reduce((acumulador, numero) => {
    return acumulador + numero;
}, 0);

console.log(suma); 


const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPares = numeros2.filter(numero => {
    return numero % 2 === 0;
});

console.log(numerosPares); 

