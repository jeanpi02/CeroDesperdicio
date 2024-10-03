let json_url = "https://json.link/ZwRxUJ2w98.json";

// Función para cargar los intercambios de alimentos desde el archivo JSON
const cargarIntercambios = () => {
    const container = document.getElementById('intercambios-list');

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
        .then(intercambios => {
            // Generar las tarjetas de cada intercambio de alimentos
            intercambios.forEach(exchange => {
                // Crear el elemento de tarjeta
                const card = document.createElement('div');
                card.classList.add('card');

                // Añadir contenido a la tarjeta
                card.innerHTML = `
                    <h3>${exchange.itemName}</h3>
                    <p><strong>Cantidad:</strong> ${exchange.quantity}</p>
                    <p><strong>Descripción:</strong> ${exchange.description}</p>
                    <p><strong>Fecha de Vencimiento:</strong> ${exchange.expirationDate}</p>
                    <p><strong>Ofrecido por:</strong> ${exchange.personName}</p>
                    <p><strong>Teléfono:</strong> <a href="tel:${exchange.contactPhone}">${exchange.contactPhone}</a></p>
                    <p><strong>Ubicación:</strong> ${exchange.location}</p>
                    <p><strong>Estado:</strong> ${exchange.status}</p>
                    <button class="intercambiar-btn" onclick="contactarUsuario('${exchange.contactPhone}')">Contactar</button>
                `;

                // Añadir la tarjeta al contenedor
                container.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error:', error);
            container.innerHTML = '<p>Hubo un error al cargar los intercambios de alimentos.</p>';
        });
}

const contactarUsuario = (telefono) => {
    alert(`Contacta al usuario al número: ${telefono}`);
}

// Ejecutar la función al cargar la página
document.addEventListener('DOMContentLoaded', cargarIntercambios);
