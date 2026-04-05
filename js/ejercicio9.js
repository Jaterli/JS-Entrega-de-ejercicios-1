document.addEventListener('DOMContentLoaded', function() {
    const tareaInput = document.getElementById('tareaInput');
    const agregarBtn = document.getElementById('agregarBtn');
    const limpiarBtn = document.getElementById('limpiarBtn');
    const listaTareas = document.getElementById('listaTareas');
    
    let tareas = [];
    
    function cargarTareas() {
        const tareasGuardadas = localStorage.getItem('tareas');
        if (tareasGuardadas) {
            tareas = JSON.parse(tareasGuardadas);
            renderizarTareas();
        }
    }
    
    function guardarTareas() {
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }
    
    function renderizarTareas() {
        listaTareas.innerHTML = '';
        tareas.forEach((tarea, index) => {
            const li = document.createElement('li');
              
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = tarea.completada;
            checkbox.addEventListener('change', () => {
                tarea.completada = checkbox.checked;
                guardarTareas();
                renderizarTareas();
            });
            
            const span = document.createElement('span');
            span.textContent = tarea.texto;
            span.className = 'lista-texto';
            if (tarea.completada) {
                span.style.textDecoration = 'line-through';
                span.style.opacity = '0.6';
            }
            
            const eliminarBtn = document.createElement('button');
            eliminarBtn.textContent = 'X';
            eliminarBtn.className = 'btn-danger';
            eliminarBtn.onclick = () => {
                tareas.splice(index, 1);
                guardarTareas();
                renderizarTareas();
            };
            
            li.appendChild(checkbox);
            li.appendChild(span);
            li.appendChild(eliminarBtn);
            listaTareas.appendChild(li);
        });
    }
    
    function agregarTarea() {
        const texto = tareaInput.value.trim();
        if (texto === '') {
            alert('Por favor, escribe una tarea');
            return;
        }
        
        tareas.push({
            texto: texto,
            completada: false
        });
        
        guardarTareas();
        renderizarTareas();
        tareaInput.value = '';
        tareaInput.focus();
    }
    
    function limpiarCompletadas() {
        tareas = tareas.filter(tarea => !tarea.completada);
        guardarTareas();
        renderizarTareas();
    }
    
    agregarBtn.addEventListener('click', agregarTarea);
    limpiarBtn.addEventListener('click', limpiarCompletadas);
    tareaInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            agregarTarea();
        }
    });
    
    cargarTareas();
});