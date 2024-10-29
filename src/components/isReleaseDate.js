// Funcion para saber si se ha estrenado o no la pelicula
export function isReleaseDate(movie) {
  const currentDate = new Date(); // Esto da la fecha actual
  const releaseDate = new Date(movie.release_date); // Convertir la fecha de estreno a un Objeto Date
  return releaseDate <= currentDate;
}