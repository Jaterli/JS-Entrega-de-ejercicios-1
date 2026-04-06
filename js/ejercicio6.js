document.addEventListener('DOMContentLoaded', function() {
    let horas = 0, minutos = 0, segundos = 0;
    let intervalo;
    let corriendo = false;
    
    const horasSpan = document.getElementById('horas');
    const minutosSpan = document.getElementById('minutos');
    const segundosSpan = document.getElementById('segundos');
    const estadoTemporizador = document.getElementById('estadoTemporizador');
    
    function actualizarDisplay() {
        horasSpan.textContent = String(horas).padStart(2, '0');
        minutosSpan.textContent = String(minutos).padStart(2, '0');
        segundosSpan.textContent = String(segundos).padStart(2, '0');
    }
    
    function actualizarEstado(estado) {
        estadoTemporizador.textContent = estado;
    }
    
    function incrementarTiempo() {
        segundos++;
        if (segundos === 60) {
            segundos = 0;
            minutos++;
            if (minutos === 60) {
                minutos = 0;
                horas++;
            }
        }
        actualizarDisplay();
    }
    
    function iniciar() {
        if (!corriendo) {
            // Asegurarse de que no haya intervalos previos
            if (intervalo) clearInterval(intervalo);
            intervalo = setInterval(incrementarTiempo, 1000);
            corriendo = true;
            actualizarEstado('▶ En marcha...');
        }
    }
    
    function pausar() {
        if (corriendo) {
            clearInterval(intervalo);
            corriendo = false;
            actualizarEstado('⏸ Pausado...');
        }
    }
    
    function reiniciar() {
        pausar();
        horas = 0;
        minutos = 0;
        segundos = 0;
        actualizarDisplay();
        actualizarEstado('🔄 Reiniciado');
    }
    
    document.getElementById('iniciar').addEventListener('click', iniciar);
    document.getElementById('pausar').addEventListener('click', pausar);
    document.getElementById('reiniciar').addEventListener('click', reiniciar);
    
    actualizarDisplay();
});