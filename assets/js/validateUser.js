document.addEventListener('DOMContentLoaded', function() {
    
    // Estableciendo credenciales locales para testear el código
    admin = 'admin'
    adminpass = 'adminpass123'

    user = 'user'
    userpass = '$userpass'
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
        if (userInput.value === user && passInput.value === userpass) {
            window.location.href = 'services/catalogo.html'
        } else if (userInput.value === admin && passInput.value === adminpass){
            window.location.href = 'services/auth/adminpanel.html'
        } else {
            alert('Usuario y/o contraseña incorrectos, vuelva a intentar.\n(Intenta con Usuario: admin - Contraseña: adminpass123 )');
            clearInputs();
        }
    });

});
