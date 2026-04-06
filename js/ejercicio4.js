 
const inputBusqueda = document.getElementById('busqueda');
const listaElementos = document.getElementById('listaElementos');
const noResultadosDiv = document.getElementById('noResultados');

const elementos = [
    "React",
    "Angular",
    "Vue.js",
    "Django",
    "Spring Boot",
    "Laravel",
    "Flask",
    "Express.js",
    "ASP.NET Core",
    "Ruby on Rails"
];  

function renderizarLista(filtro = '') {
    const filtroLower = filtro.toLowerCase();
    const elementosFiltrados = elementos.filter(elemento => 
        elemento.toLowerCase().includes(filtroLower)
    );
    
    listaElementos.innerHTML = '';
    
    // Mostrar mensaje si no hay resultados
    if (elementosFiltrados.length === 0) {
        if (noResultadosDiv) {
            noResultadosDiv.style.display = 'block';
        }
        return;
    }
    
    if (noResultadosDiv) {
        noResultadosDiv.style.display = 'none';
    }
    
    // Renderizar elementos filtrados
    elementosFiltrados.forEach(elemento => {
        const li = document.createElement('li');
        li.textContent = elemento;
        listaElementos.appendChild(li);
    });
}

inputBusqueda.addEventListener('input', (e) => {
    renderizarLista(e.target.value);
});


renderizarLista();