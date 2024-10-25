// convertir tiempo de la peliculas
export function convertRuntimeToHoursAndMinutes(runtime) {
    const hours = Math.floor(runtime / 60); // Obtiene las horas
    const minutes = runtime % 60; // Obtiene los minutos restantes
    return `${hours}h ${minutes}m`; // Retorna en formato "Xh Ym"
}