document.addEventListener('DOMContentLoaded', function() {
    
    // Estableciendo credenciales locales para testear el código
    user = 'admin'
    pass = 'adminpass123'

    // Localizando el formulario de iniciar sesión
    const loginUser = document.getElementById('form-login-user');
    const userInput = document.getElementById('user-input');
    const passInput = document.getElementById('user-pass');

    function clearInputs() {
        userInput.value = '';
        passInput.value = '';
    }

    loginUser.addEventListener('submit', function(e) {
        e.preventDefault();
        if (userInput.value === user && passInput.value === pass) {
            window.location.href = 'services/catalogo.html'
        } else {
            alert('Usuario y/o contraseña incorrectos, vuelva a intentar.\n(Intenta con Usuario: admin - Contraseña: adminpass123 )');
            clearInputs();
        }
    });

});
