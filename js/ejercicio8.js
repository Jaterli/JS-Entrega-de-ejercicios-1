document.addEventListener('DOMContentLoaded', function() {
    const textoArea = document.getElementById('texto');
    const contadorCaracteres = document.getElementById('contadorCaracteres');
    const contadorPalabras = document.getElementById('contadorPalabras');
    
    function actualizarContadores() {
        const texto = textoArea.value;
        
        // Contar caracteres sin espacios ni saltos de línea
        const caracteres = texto.replace(/[\s\n\r]/g, '').length;
        
        // Contar palabras
        let palabras = 0;
        if (texto.trim() !== '') {
            palabras = texto.trim().split(/\s+/).length;
        }
        
        contadorCaracteres.textContent = caracteres;
        contadorPalabras.textContent = palabras;
    }
    
    textoArea.addEventListener('input', actualizarContadores);
    actualizarContadores();
});