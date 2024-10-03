// Función para guardar la donación en localStorage
const guardarDonacion = () => {
    // Obtener los valores del formulario
    const organization = document.getElementById('organization').value;
    const donorName = document.getElementById('donor-name').value;
    const contactPhone = document.getElementById('contact-phone').value;
    const neighborhood = document.getElementById('neighborhood').value;
    const address = document.getElementById('address').value;
    const donationType = document.getElementById('donation-type').value;
    const donationQuantity = document.getElementById('donation-quantity').value;
    
    let unit;
    const units = document.getElementsByName('unit');
    for (let i = 0; i < units.length; i++) {
        if (units[i].checked) {
            unit = units[i].value;
            break;
        }
    }

    const expirationDate = document.getElementById('expiration-date').value;

    // Validación: Comprobar si alguno de los campos está vacío
    if (!organization || !donorName || !contactPhone || !neighborhood || !address || 
        !donationType || !donationQuantity || !unit || !expirationDate) {
        alert('Por favor, completa todos los campos antes de continuar.');
        return;
    }

    // Crear un objeto con los datos de la donación
    const donation = {
        organization,
        donorName,
        contactPhone,
        neighborhood,
        address,
        donationType,
        donationQuantity,
        unit,
        expirationDate
    };

    // Obtener las donaciones existentes en localStorage o crear una nueva lista
    let donations = JSON.parse(localStorage.getItem('donations')) || [];

    // Añadir la nueva donación a la lista
    donations.push(donation);

    // Guardar la lista actualizada en localStorage
    localStorage.setItem('donations', JSON.stringify(donations));

    // Confirmación para el usuario
    alert('¡Donación guardada exitosamente!');

    // Limpiar el formulario después de guardar (opcional)
    document.getElementById('donation-form').reset();
}
