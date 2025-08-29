// Espera que el DOM cargue completamente antes de inicializar el script
document.addEventListener('DOMContentLoaded', function(){
    
    // Localizando el formulario de iniciar sesión
    loginUser = document.getElementById('form-login-user');

    // Expresiones de validación
    const regex = {
        nombre: /^[a-zA-ZáéíóúÁÉÍÓÚ\s]{2,50}$/,
        rut: /^\d{7,8}([-]?[0-9Kk])?$/,
        telefono: /^(?:\+56-?)?(?:2|9)\d{8}$/,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        direccion: /^.{10,200}$/
    };

    const messageError = {
        nombre: 'El nombre de tener entre 2 y 50 carácteres (solo letras y espacios)',
        rut: 'El rut debe contener entre 9 y 10 dígitos'
    }
});

