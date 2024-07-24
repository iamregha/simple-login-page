// Example: Simple input focus effect
document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('input');

    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.borderColor = '#00416A';
        });

        input.addEventListener('blur', () => {
            input.style.borderColor = '#ccc';
        });
    });
});
