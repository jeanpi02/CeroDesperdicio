let json_url = "https://json.link/d99yPOL21P.json";

// Función para cargar las organizaciones desde el archivo JSON
const cargarOrganizaciones = () => {
    const container = document.getElementById('organizaciones-list');

    // Vaciar el contenedor antes de generar nuevas tarjetas
    container.innerHTML = '';

    // Usar fetch para obtener el archivo JSON
    fetch(json_url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el archivo JSON');
            }
            return response.json();  // Parsear a JSON
        })
        .then(organizaciones => {
            // Generar las tarjetas de cada organización
            organizaciones.forEach(org => {
                // Crear el elemento de tarjeta
                const card = document.createElement('div');
                card.classList.add('card');

                // Añadir contenido a la tarjeta
                card.innerHTML = `
                    <h3>${org.name}</h3>
                    <p><strong>Descripción:</strong> ${org.description}</p>
                    <p><strong>Dirección:</strong> ${org.address}</p>
                    <p><strong>Teléfono:</strong> ${org.phone}</p>
                    <p><strong>Contacto:</strong> ${org.contactPerson}</p>
                    <p><strong>Horario:</strong> ${org.hours}</p>
                    <p><strong>Donaciones Aceptadas:</strong></p>
                    <ul>
                        ${org.acceptedDonations.map(donation => `<li>${donation}</li>`).join('')}
                    </ul>
                    <button class="donar-btn" onclick="redirigirFormulario('${org.name}')">Donar</button>
                `;

                // Añadir la tarjeta al contenedor
                container.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error:', error);
            container.innerHTML = '<p>Hubo un error al cargar las organizaciones.</p>';
        });
}

// Función para redirigir al formulario con el nombre de la fundación
const redirigirFormulario = (nombreOrganizacion) => {
    // Guardar el nombre de la organización en localStorage
    localStorage.setItem('organizationName', nombreOrganizacion);

    // Redirigir al formulario de donación
    window.location.href = '/html/formulario_donacion.html';  // Ruta del formulario de donación
}

// Ejecutar la función al cargar la página
document.addEventListener('DOMContentLoaded', cargarOrganizaciones);
