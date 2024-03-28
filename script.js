// Selecciona todos los elementos con la clase '.panel'
const panels = document.querySelectorAll('.panel');
const closeButton = document.getElementById('closeButton'); // Selecciona el botón de cierre

// Agrega un evento de clic a cada panel
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        // Remueve la clase 'active' de todos los paneles
        removeActiveClasses();
        // Agrega la clase 'active' al panel actual que ha sido clickeado
        panel.classList.add('active');
    });
});

// Agrega un evento de clic al botón de cierre
closeButton.addEventListener('click', () => {
    // Remueve la clase 'active' de todos los paneles cuando se hace clic en el botón de cierre
    removeActiveClasses();
});

// Definición de la función para remover la clase 'active' de todos los paneles
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}
