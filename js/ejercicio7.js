document.addEventListener('DOMContentLoaded', function() {
    const longitudInput = document.getElementById('longitud');
    const generarBtn = document.getElementById('generar');
    const passwordSpan = document.getElementById('password');
    
    function generarPassword(longitud) {
        const letrasMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
        const numeros = '0123456789';
        const especiales = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        
        const todosCaracteres = letrasMayusculas + letrasMinusculas + numeros + especiales;
        let password = '';
        
        // Asegurar al menos un carácter de cada tipo
        password += letrasMayusculas[Math.floor(Math.random() * letrasMayusculas.length)];
        password += letrasMinusculas[Math.floor(Math.random() * letrasMinusculas.length)];
        password += numeros[Math.floor(Math.random() * numeros.length)];
        password += especiales[Math.floor(Math.random() * especiales.length)];
        
        // Completar el resto
        for (let i = password.length; i < longitud; i++) {
            password += todosCaracteres[Math.floor(Math.random() * todosCaracteres.length)];
        }
        
        // Mezclar la contraseña
        return password.split('').sort(() => Math.random() - 0.5).join('');
    }
    
    generarBtn.addEventListener('click', function() {
        const longitud = parseInt(longitudInput.value);
        
        if (isNaN(longitud) || longitud < 4) {
            passwordSpan.textContent = 'Error: La longitud debe ser mayor o igual a 4';
            passwordSpan.style.color = '#e74c3c';
        } else {
            const password = generarPassword(longitud);
            passwordSpan.textContent = password;
            passwordSpan.style.color = '#27ae60';
        }
    });
});