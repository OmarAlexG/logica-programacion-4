function fibonacci(n) {
    let fibSeries = [0, 1];
    
    for (let i = 2; i < n; i++) {
        fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
    }
    
    return fibSeries;
}

function validarNumero(input) {
    const num = Number(input);
    if (isNaN(num)) {
        return false;
    }
    return true;
}

function pedirNumero() {
    let input = document.getElementById("numero").value;
    
    while (!validarNumero(input)) {
        input = prompt("Error: Por favor, ingresa un número válido para generar la serie de Fibonacci:");
    }
    
    return parseInt(input);
}

function imprimirSerieFibonacci() {
    const numero = pedirNumero();
    const serie = fibonacci(numero);
    const resultadoDiv = document.getElementById("resultado");
    
    resultadoDiv.innerHTML = `<p>La serie de Fibonacci para ${numero} términos es: ${serie}</p>`;
}