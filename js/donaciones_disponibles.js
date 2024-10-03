// Función para mostrar las donaciones filtradas
const mostrarDonaciones = () => {
    // Obtener el nombre de la organización logueada 
    const loggedOrganization = localStorage.getItem('nombreOrg');

    // Obtener las donaciones desde localStorage
    const donations = JSON.parse(localStorage.getItem('donations')) || [];

    // Filtrar las donaciones que corresponden a la organización logueada
    const donationsForOrg = donations.filter(donation => donation.organization === loggedOrganization);

    // Obtener el cuerpo de la tabla
    const tableBody = document.getElementById('donaciones-body');

    // Limpiar cualquier contenido previo en la tabla
    tableBody.innerHTML = '';

    // Si no hay donaciones para esta organización
    if (donationsForOrg.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="8">No hay donaciones registradas.</td></tr>';
        return;
    }

    // Añadir las donaciones a la tabla
    donationsForOrg.forEach(donation => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${donation.donorName}</td>
            <td>${donation.contactPhone}</td>
            <td>${donation.neighborhood}</td>
            <td>${donation.address}</td>
            <td>${donation.donationType}</td>
            <td>${donation.donationQuantity}</td>
            <td>${donation.unit}</td>
            <td>${donation.expirationDate}</td>
        `;

        tableBody.appendChild(row);
    });
};

// Ejecutar la función cuando se cargue la página
document.addEventListener('DOMContentLoaded', mostrarDonaciones);
