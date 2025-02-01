// Seleccionar los elementos
const botonSi = document.getElementById('si');
const botonNo = document.getElementById('no');
const container = document.querySelector('.container');

// Acción para el botón "Sí"
botonSi.addEventListener('click', () => {
    // Cambiar el contenido del contenedor
    container.innerHTML = `
        <h1>Te amo mucho Ailyn ¡Gracias por ser mi San Valentín! 💖</h1>
        <p>Sabria que ibas a decir que si Amor</p>
    `;
});

// Acción para el botón "No"
botonNo.addEventListener('mouseover', () => {
    // Generar posiciones aleatorias dentro de la ventana
    const ancho = window.innerWidth - botonNo.offsetWidth;
    const alto = window.innerHeight - botonNo.offsetHeight;
    const x = Math.floor(Math.random() * ancho);
    const y = Math.floor(Math.random() * alto);

    // Mover el botón a la nueva posición
    botonNo.style.position = 'absolute';
    botonNo.style.left = `${x}px`;
    botonNo.style.top = `${y}px`;
});