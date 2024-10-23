document.addEventListener('DOMContentLoaded', function() {
    const exploreBtn = document.getElementById('explore-btn');
    const cartLink = document.getElementById('cart-link');
    const loginLink = document.getElementById('login-link');
    const cartModal = document.getElementById('cart-modal');
    const loginModal = document.getElementById('login-modal');
    const closeModal = document.querySelectorAll('.close');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');
    let cart = [];

    // Funcionalidad para explorar productos
    exploreBtn.addEventListener('click', function() {
        window.location.href = '#products';
    });

    // Agregar producto al carrito
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = button.closest('.product');
            const name = product.getAttribute('data-name');
            const price = parseFloat(product.getAttribute('data-price'));

            // Añadir al carrito
            cart.push({ name, price });
            updateCart();
        });
    });

    // Actualizar el carrito
    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItems.appendChild(li);
            total += item.price;
        });
        cartTotal.textContent = total.toFixed(2);
        cartCount.textContent = cart.length;
    }

    // Mostrar/ocultar el modal del carrito
    cartLink.addEventListener('click', function() {
        cartModal.style.display = 'block';
    });

    // Mostrar/ocultar el modal de login
    loginLink.addEventListener('click', function() {
        loginModal.style.display = 'block';
    });

    // Cerrar los modales
    closeModal.forEach(close => {
        close.addEventListener('click', function() {
            cartModal.style.display = 'none';
            loginModal.style.display = 'none';
        });
    });

    // Login (simulado)
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'admin' && password === '1234') {
            alert('Login exitoso');
            loginModal.style.display = 'none';
        } else {
            alert('Credenciales incorrectas');
        }
    });
});
