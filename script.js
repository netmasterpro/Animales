function sonido(nombreAnimal) {
    // Cancelamos cualquier voz activa para evitar que se encimen si hacen clics rápidos
    window.speechSynthesis.cancel();

    // Reemplazamos guiones o detalles si hiciera falta, dejando el texto limpio
    let textoLimpio = nombreAnimal.trim();

    // Creamos el objeto de voz con el nombre del animal
    let textoAVoz = new SpeechSynthesisUtterance(textoLimpio);
    
    // Configuración de idioma (Español Latino de Google)
    textoAVoz.lang = 'es-MX'; 
    
    // Velocidad (0.9 es ideal para que los niños entiendan cada sílaba)
    textoAVoz.rate = 0.9; 
    
    // Tono (1.1 lo hace sonar un poquito más animado)
    textoAVoz.pitch = 1.1; 

    // Ejecuta la voz
    window.speechSynthesis.speak(textoAVoz);
}
