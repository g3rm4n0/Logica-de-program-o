/*Crie um programa que exiba em uma tabela e destaque todos os números primos que estão entre 0 e 200.*/

function isPrime(num) {
    if (num <= 1) return false; // Números menores ou iguais a 1 não são primos
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Se for divisível por qualquer número além de 1 e ele mesmo, não é primo
    }
    return true; // Se passar por todos os testes, é primo
}

// Exemplo de uso
console.log(isPrime(7)); // true
console.log(isPrime(10)); // false