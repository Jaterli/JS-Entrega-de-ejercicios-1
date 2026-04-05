document.addEventListener('DOMContentLoaded', function() {
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const resultadoDiv = document.getElementById('resultado');
    
    function obtenerNumeros() {
        const valor1 = parseFloat(num1.value);
        const valor2 = parseFloat(num2.value);
        
        if (isNaN(valor1) || isNaN(valor2)) {
            resultadoDiv.textContent = 'Error: Por favor ingrese números válidos';
            return null;
        }
        
        return { valor1, valor2 };
    }
    
    function sumar() {
        const nums = obtenerNumeros();
        if (nums) {
            resultadoDiv.textContent = (nums.valor1 + nums.valor2);
        }
    }
    
    function restar() {
        const nums = obtenerNumeros();
        if (nums) {
            resultadoDiv.textContent = (nums.valor1 - nums.valor2);
        }
    }
    
    function multiplicar() {
        const nums = obtenerNumeros();
        if (nums) {
            resultadoDiv.textContent = (nums.valor1 * nums.valor2);
        }
    }
    
    function dividir() {
        const nums = obtenerNumeros();
        if (nums) {
            if (nums.valor2 === 0) {
                resultadoDiv.textContent = 'Error: No se puede dividir por cero';
            } else {
                resultadoDiv.textContent =  (nums.valor1 / nums.valor2);
            }
        }
    }
    
    document.getElementById('sumar').addEventListener('click', sumar);
    document.getElementById('restar').addEventListener('click', restar);
    document.getElementById('multiplicar').addEventListener('click', multiplicar);
    document.getElementById('dividir').addEventListener('click', dividir);
});