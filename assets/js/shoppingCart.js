let cart = [];
const cartCounters = document.querySelectorAll(".cart-counter");
const cartItems = document.getElementById("cart-items");
const num = document.getElementById('cart-count');

// Detectar los botones "Reservar"
document.querySelectorAll(".reservar-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        const card = e.target.closest(".card");
        const title = card.querySelector(".book-title").innerText.replace("Título:", "").trim();
        const author = card.querySelector(".author").innerText.replace("Autor/(es)", "").trim();
        const type = card.querySelector(".book-type").innerText.replace("Tipo:", "").trim();
        const year = card.querySelector(".book-year").innerText.replace("Año:", "").trim();

        cart.push({ title, author, type, year });
        updateCart();
    });
});






// Actualizar el carrito en el modal
function updateCart() {
    cartCounters.forEach(counter => counter.textContent = cart.length);
    cartItems.innerHTML = "";
    
    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.innerHTML = `
        <span><b>${item.title}</b> - ${item.author} (${item.year}) [${item.type}]</span>
        <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})"><i class="fa-solid fa-xmark"></i></button>
        `;
        cartItems.appendChild(li);
    });


    // // No mostrar el '0' del carrito
    //  if (num.textContent == '0') {
    //      num.style.display = 'none';
    //  } else {
    //      num.style.display = 'block';
    //  }
}

// Quitar un libro del carrito
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}