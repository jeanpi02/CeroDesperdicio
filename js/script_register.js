const handleRoleChange = () => {
    const role = document.getElementById('role').value;
    const userFields = document.getElementById('user-fields');
    const orgFields = document.getElementById('org-fields');

    if (role === 'usuario') {
        userFields.style.display = 'block';
        orgFields.style.display = 'none';
    } else {
        userFields.style.display = 'none';
        orgFields.style.display = 'block';
    }
};

// Llama la función cuando se cargue la página por primera vez
document.addEventListener('DOMContentLoaded', () => {
    handleRoleChange();
});