// Obtener el nombre de la organización desde localStorage
const organizationName = localStorage.getItem('organizationName');
if (organizationName) {
    document.getElementById('organization').value = organizationName;
}