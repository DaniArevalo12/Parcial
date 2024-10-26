function calculate(operacion) {
    const num1 = parseFloat(document.getElementById("num1").value) || 0;
    const num2 = parseFloat(document.getElementById("num2").value) || 0;
    let Resultado;

    switch (operacion) {
        case 'Suma':
            Resultado = num1 + num2;
            break;
        case 'Resta':
            Resultado = num1 - num2;
            break;
        case 'Multiplicacion':
            Resultado = num1 * num2;
            break;
        case 'Division':
            Resultado = num2 !== 0 ? num1 / num2 : "Esta division no es permitida porque el resultado es Infinita";
            break;
    }

    document.getElementById("Resultado").value = Resultado;
}