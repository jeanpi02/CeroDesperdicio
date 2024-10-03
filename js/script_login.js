// Ruta del archivo JSON con los usuarios
const jsonUrl = "https://json.link/tbHgZX863c.json";

const login = () => {
    // Obtener los valores ingresados por el usuario
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    if (username != "" && password != "" && role != "") {
        // Cargar el archivo JSON con los usuarios
        fetch(jsonUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error al cargar el archivo JSON");
                }
                return response.json();
            })
            .then((users) => {
                // Validación con un bucle for
                let userFound = false;

                for (let i = 0; i < users.length; i++) {
                    let user = users[i];

                    // Validar si el usuario, contraseña y rol coinciden
                    if (
                        user.user === username &&
                        user.password === password &&
                        user.role === role
                    ) {
                        userFound = true;
                        // Guardar el nombre del usuario en el Local Storage
                        localStorage.setItem("nombreUsuario", username);
                        if(role==="organizacion"){
                            localStorage.setItem("nombreOrg", user.name);
                        }
                        

                        //Guardar autenticación
                        localStorage.setItem("loged", true);

                        // Redirigir según el rol
                        if (role === "restaurante") {
                            window.location.href = "/html/restaurante.html";
                        } else if (role === "organizacion") {
                            window.location.href = "/html/organizacion.html";
                        } else if (role === "usuario") {
                            window.location.href = "/html/usuario.html";
                        }
                        break;
                    }
                }

                // Si no se encontró ningún usuario, mostrar un mensaje de error
                if (!userFound) {
                    alert("Usuario o contraseña incorrectos, o rol no válido.");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Hubo un problema al cargar los datos de usuario.");
            });
    }else alert("Es necesario llenar todos los campos");
};