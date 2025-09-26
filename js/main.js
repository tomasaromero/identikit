// main.js

        // Obtener el elemento del enlace de inicio
        const enlaceInicio = document.getElementById('enlaceInicio');
        // Obtener el elemento de audio
        const audioFondo = document.getElementById('audioFondo');

        // Añadir un "escuchador de eventos" al enlace de inicio
        enlaceInicio.addEventListener('click', function(event) {
            // Prevenir la navegación normal a "index.html" inmediatamente
            // Esto es importante para que nos dé tiempo a reproducir el audio antes de recargar si ya estamos en inicio
            event.preventDefault(); 
            
            // Si el audio está pausado o ya terminó, lo reproducimos
            if (audioFondo.paused || audioFondo.ended) {
                audioFondo.play()
                    .then(() => {
                        console.log("Audio reproducido con éxito.");
                        // Una vez que el audio ha comenzado a reproducirse, navegamos a la página
                        window.location.href = enlaceInicio.href;
                    })
                    .catch(error => {
                        console.error("Error al intentar reproducir el audio:", error);
                        // Si falla la reproducción (ej. por políticas de navegador), navegamos de todas formas
                        window.location.href = enlaceInicio.href;
                    });
            } else {
                // Si el audio ya está sonando, simplemente navegamos
                window.location.href = enlaceInicio.href;
            }
        });

        // Opcional: Para controlar el audio si se está navegando DESDE otra página HACIA la de inicio
        // Esto es más complejo y generalmente se maneja mejor si el audio está en una "single page application"
        // o si usas almacenamiento local para recordar el estado del audio.
        // Para este nivel, con el click en el enlace de la misma página es suficiente.
    
