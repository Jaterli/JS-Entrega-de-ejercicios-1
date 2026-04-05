document.addEventListener('DOMContentLoaded', function() {
    const textoInput = document.getElementById('textoInput');
    const agregarBtn = document.getElementById('agregarBtn');
    const vaciarBtn = document.getElementById('vaciarBtn');
    const lista = document.getElementById('listaDinamica');
    
    function actualizarEstadoBotonVaciar() {
        if (lista.children.length > 0) {
            vaciarBtn.style.display = 'inline-block';
        } else {
            vaciarBtn.style.display = 'none';
        }
    }
    
    function vaciarLista() {
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }
        actualizarEstadoBotonVaciar();
    }
    
    function agregarElemento() {
        const texto = textoInput.value.trim();
        
        if (texto === '') {
            alert('Por favor, escribe algún texto');
            return;
        }
        
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.className = 'lista-texto';
        span.textContent = texto;
        
        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'X';
        eliminarBtn.className = 'btn-danger';
        eliminarBtn.onclick = function() {
            lista.removeChild(li);
            actualizarEstadoBotonVaciar();
        };
        
        li.appendChild(span);
        li.appendChild(eliminarBtn);
        lista.appendChild(li);
        
        textoInput.value = '';
        textoInput.focus();
        
        actualizarEstadoBotonVaciar();
    }
    
    agregarBtn.addEventListener('click', agregarElemento);
    vaciarBtn.addEventListener('click', vaciarLista);
    
    textoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            agregarElemento();
        }
    });
    
    // Inicializar el estado del botón vaciar (deshabilitado al inicio)
    actualizarEstadoBotonVaciar();
});