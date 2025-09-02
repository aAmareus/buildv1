// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado, inicializando filtros...');
    
    // Filtros activos
    let activeFilters = {
        year : null,
        type: null,
        text: ''
    }

    // Elementos
    const cards = document.querySelectorAll('.card');
    const yearItems = document.querySelectorAll('.dropdown-menu .dropdown-item[id^="src"]');
    const typeItems = document.querySelectorAll('.dropdown-menu .dropdown-item[id^="filter"]');
    const searchInput = document.getElementById('book-title-finder');
    const resetBtn = document.getElementById('resetFilters');

    // Filtrar tarjetas
    function filterCards() {
        console.log('Filtros activos:', activeFilters);
        
        cards.forEach((card, index) => {
            let matches = true;

            // Filtrar por año
            if (activeFilters.year) {
                const yearElement = card.querySelector('.book-year');
                if (yearElement) {
                    const yearText = yearElement.textContent;
                    matches = yearText.includes(activeFilters.year);
                    console.log(`Tarjeta ${index + 1} - Año: "${yearText}" incluye "${activeFilters.year}"? ${matches}`);
                } else {
                    matches = false;
                    console.log(`Tarjeta ${index + 1} - No se encontró elemento de año`);
                }
            }

            // Filtrar por tipo
            if (matches && activeFilters.type) {
                const typeElement = card.querySelector('.book-type');
                if (typeElement) {
                    const typeText = typeElement.textContent.toLowerCase();
                    matches = typeText.includes(activeFilters.type.toLowerCase());
                } else {
                    matches = false;
                    console.log(`Tarjeta ${index + 1} - No se encontró elemento de tipo`);
                }
            }

            // Filtrar por texto
            if (matches && activeFilters.text) {
                const titleElement = card.querySelector('.book-title');
                if (titleElement) {
                    const titleText = titleElement.textContent.toLowerCase();
                    matches = titleText.includes(activeFilters.text.toLowerCase());
                } else {
                    matches = false;
                    console.log(`Tarjeta ${index + 1} - No se encontró elemento de título`);
                }
            }

            // Mostrar u ocultar la tarjeta
            if (matches) {
                card.classList.remove('filtered-hidden');
                card.style.cssText = ''; // Limpiar estilos inline
            } else {
                card.classList.add('filtered-hidden');
                card.style.cssText = 'display: none !important; visibility: hidden !important; opacity: 0 !important; height: 0 !important; width: 0 !important; margin: 0 !important; padding: 0 !important; overflow: hidden !important; position: absolute !important; left: -9999px !important; top: -9999px !important; z-index: -9999 !important; pointer-events: none !important;';
            }
        });
    }

    // Eventos
    // - por año -
    yearItems.forEach(item => {
        item.addEventListener('click', e => {
            activeFilters.year = item.textContent.trim();
            console.log('Filtro de año seleccionado:', activeFilters.year);
            filterCards();
        })
    })

    // - por tipo -
    typeItems.forEach(item => {
        item.addEventListener('click', e => {
            activeFilters.type = item.textContent.trim();
            filterCards();
        })
    })

    // - por texto -
    searchInput.addEventListener('input', e => {
        activeFilters.text = e.target.value.trim();
        filterCards();
    })

    // - reset -
    resetBtn.addEventListener('click', () => {
        activeFilters = {year: null, type: null, text: ''};
        searchInput.value = '';
        console.log('Filtros reseteados');
        filterCards();
    })
});