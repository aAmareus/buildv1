// Esperara que cargue todo el DOM
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll("'card");

    // Estado actual de los filtros
    let activeFilters = {
        year: null,
        type: null,
        search: ""
    }

    // Aplicar los filtros
    function applyFilters() {
        cards.forEach(card => {
            const cardYear = card.querySelector(".book-year").textContent.trim();
            const cardType = card.querySelector('.book-type').textContent.trim();
        });
    }
});