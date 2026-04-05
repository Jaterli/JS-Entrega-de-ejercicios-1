document.addEventListener('DOMContentLoaded', function() {
    let contador = 0;
    const contadorTexto = document.getElementById('contador');
    const contarBtn = document.getElementById('contarBtn');
    const daleTexto = document.getElementById('dale');
    
    const mensajes = [
        "¡Venga!",
        "¡Dale!",
        "¡Uno más!",
        "¡Así me gusta!",
        "¡Tú puedes!",
        "¡Un poquito más!",
        "¡Ufff!",
        "¡Me gusta!",
        "¡Toma Ya!",
        "¡Vamos campeón!",
        "¡Qué grande!",
        "¡Oh Yeah!",         
    ];
    
    contarBtn.addEventListener('click', function() {
        contador++;
        contadorTexto.textContent = contador;
        
        const indiceAleatorio = Math.floor(Math.random() * mensajes.length);
        daleTexto.textContent = mensajes[indiceAleatorio];
    });
});