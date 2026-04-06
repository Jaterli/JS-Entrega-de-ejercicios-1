document.addEventListener('DOMContentLoaded', () => {
    const $ = id => document.getElementById(id);

    const tareaInput = $('tareaInput');
    const agregarBtn = $('agregarBtn');
    const limpiarBtn = $('limpiarBtn');
    const listaTareas = $('listaTareas');

    let tareas = JSON.parse(localStorage.getItem('tareas')) || [];

    const actualizar = () => {
        localStorage.setItem('tareas', JSON.stringify(tareas));
        renderizarTareas();
    };

    const crearElemento = (tag, props = {}) => {
        const el = document.createElement(tag);
        Object.assign(el, props);
        return el;
    };

    function renderizarTareas() {
        listaTareas.innerHTML = '';

        tareas.forEach((tarea, index) => {
            const li = document.createElement('li');

            const checkbox = crearElemento('input', {
                type: 'checkbox',
                checked: tarea.completada
            });

            checkbox.onchange = () => {
                tarea.completada = checkbox.checked;
                actualizar();
            };

            const span = crearElemento('span', {
                textContent: tarea.texto,
                className: 'lista-texto'
            });

            if (tarea.completada) {
                span.style.textDecoration = 'line-through';
                span.style.opacity = '0.6';
            }

            const eliminarBtn = crearElemento('button', {
                textContent: 'X',
                className: 'btn-danger'
            });

            eliminarBtn.onclick = () => {
                tareas.splice(index, 1);
                actualizar();
            };

            li.append(checkbox, span, eliminarBtn);
            listaTareas.appendChild(li);
        });
    }

    function agregarTarea() {
        const texto = tareaInput.value.trim();
        if (!texto) return alert('Por favor, escribe una tarea');

        tareas.push({ texto, completada: false });
        tareaInput.value = '';
        tareaInput.focus();

        actualizar();
    }

    const limpiarCompletadas = () => {
        tareas = tareas.filter(t => !t.completada);
        actualizar();
    };

    agregarBtn.onclick = agregarTarea;
    limpiarBtn.onclick = limpiarCompletadas;

    tareaInput.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
            e.preventDefault();            
            agregarTarea();
        }
    });

    renderizarTareas();
});