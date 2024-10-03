// Recuperar el nombre del usuario desde el Local Storage
const nombreUsuario = localStorage.getItem('nombreUsuario');

// Mostrar el nombre del usuario en la página
if (nombreUsuario) {
    document.getElementById('usuario-nombre').textContent = nombreUsuario;
} else {
    document.getElementById('usuario-nombre').textContent = 'Usuario no identificado';
}

//función para cerrar sesión
const logout = ()=> {
    localStorage.setItem('loged', 0)
    localStorage.setItem('nombreUsuario' , null)
    localStorage.setItem('nombreOrg', null)
    
    window.location.href= "/index.html"
}