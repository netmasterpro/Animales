function sonido(nombreAnimal) {
    // 1. REPRODUCIR EL SONIDO DEL ANIMAL (.mp3)
    // El navegador buscará el archivo en la misma carpeta (ej: leon.mp3, perro.mp3)
    // Se usa .toLowerCase() para asegurar que busque el archivo en minúsculas.
    let archivoAudio = nombreAnimal.toLowerCase() + ".mp3";
    let audio = new Audio(archivoAudio);
    
    audio.play().catch(error => {
        // Este bloque evita que el código falle si aún no tienes el archivo .mp3 en tu carpeta
        console.log("Nota: No se encontró el archivo de sonido: " + archivoAudio);
    });

    // 2. ACTIVAR LA VOZ TIPO GOOGLE TRADUCTOR
    // Creamos la frase que va a decir el navegador
    let textoAVoz = new SpeechSynthesisUtterance(nombreAnimal);
    
    // Configuramos el idioma a español
    textoAVoz.lang = 'es-MX'; // Puedes cambiarlo a 'es-ES' si prefieres acento de España
    
    // Velocidad del habla (1 es normal, 0.9 es un poquito más pausado para niños)
    textoAVoz.rate = 0.9; 
    
    // Tono de la voz (1 es normal)
    textoAVoz.pitch = 1.1; 

    // Ordenamos al navegador que hable
    window.speechSynthesis.speak(textoAVoz);
}
