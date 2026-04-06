document.addEventListener('DOMContentLoaded', function() {
    const longitudInput = document.getElementById('longitud');
    const generarBtn = document.getElementById('generar');
    const passwordSpan = document.getElementById('password');
    
    // Función para generar números aleatorios criptográficamente seguros
    function getRandomInt(max) {
        const randomArray = new Uint32Array(1);
        crypto.getRandomValues(randomArray);
        return randomArray[0] % max;
    }
    
    // Función para mezclar array usando Fisher-Yates con crypto
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = getRandomInt(i + 1);
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    function generarPassword(longitud) {
        const letrasMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
        const numeros = '0123456789';
        const especiales = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        
        const todosCaracteres = letrasMayusculas + letrasMinusculas + numeros + especiales;
        let passwordChars = [];
        
        // Asegurar al menos un carácter de cada tipo usando crypto
        passwordChars.push(letrasMayusculas[getRandomInt(letrasMayusculas.length)]);
        passwordChars.push(letrasMinusculas[getRandomInt(letrasMinusculas.length)]);
        passwordChars.push(numeros[getRandomInt(numeros.length)]);
        passwordChars.push(especiales[getRandomInt(especiales.length)]);
        
        // Completar el resto
        for (let i = passwordChars.length; i < longitud; i++) {
            passwordChars.push(todosCaracteres[getRandomInt(todosCaracteres.length)]);
        }
        
        passwordChars = shuffleArray(passwordChars);
        
        return passwordChars.join('');
    }
    
    generarBtn.addEventListener('click', function() {
        const longitud = parseInt(longitudInput.value);
        
        if (isNaN(longitud) || longitud < 4 || longitud > 20) {
            passwordSpan.textContent = 'Error: La longitud debe ser mayor o igual a 4 y menor o igual a 20';
            passwordSpan.style.color = '#e74c3c';
        } else {
            const password = generarPassword(longitud);
            passwordSpan.textContent = password;
            passwordSpan.style.color = '#27ae60';
        }
    });
});