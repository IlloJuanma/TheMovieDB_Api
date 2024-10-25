import { renderHeader } from "./components/Header";
import { renderFooter } from "./components/Footer";
import { listOptions, apiKey, language } from "./api/moviesUtilities";
import { buttons } from "./components/Buttons";
import { changeViewButton } from "./components/changeView";
import { getLanguageMap } from "./components/languageMap";
import { convertRuntimeToHoursAndMinutes } from "./components/convertTimetoHours";
import { getReleaseDate } from "./components/getReleaseDate";

// Renderizar
renderHeader();
renderFooter();

let currentFilter = null; // Variable para almacenar el filtro
let isViewingDetails = false;
let currentListOption = listOptions.popular;
document.addEventListener("DOMContentLoaded", () => {
  changeViewButton();
  getFetchMovies(listOptions.popular, language.es);
});

// Para conseguir las categorias de las peliculas necesitamos hacer otra llamada poara saber las categorias y sus ids correspondientes
// (lo que tarde en averiguar esto madre mia)
async function fetchGenres(lang = language.es) {
  const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=${lang}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data.genres;
  /* 
  Esto devuelve un array de objetos, tal que asi:
   "genres": [
    {
      "id": 28,
      "name": "Acción"
    },
    {
      "id": 12,
      "name": "Aventura"
    },
  */
}


// Funcion principal para obtener películas
async function getFetchMovies(listOption, lang = language.es) {
  const apiUrl = `https://api.themoviedb.org/3/movie/${listOption}?api_key=${apiKey}&language=${lang}`;
  try {
    const data = await fetchMovies(apiUrl);
    if (data.results) {

      const uniqueGenres = getUniqueCategories(data.results);
      const genresList = await fetchGenres(lang)

      // Creamos un objeto para guardar las id y los nombres de las categorias
      const genreMap = {};
      // Mapear las categorias
      genresList.forEach(genre => {
        // Le asignamos al objeto su id y nombre
        genreMap[genre.id] = genre.name;
      });
      displayMovies(data.results, genreMap);

      // Convertir los IDs de géneros únicos en nombres
      const uniqueGenreNames = uniqueGenres.map(id => genreMap[id]);

      // Limpiar el contenedor del filtro antes de agregar el nuevo select
      const filterContainer = document.querySelector(".filter-container");
      filterContainer.innerHTML = ''; // Limpia el contenedor

      // Crear el select de las categorias dinámicamente
      const categoryFilter = document.createElement("select");
      // Agregamos la opcion no filtrar
      const noFilterOption = document.createElement("option");
      noFilterOption.textContent = "-- No filters --";
      // Quite el value, para no romper el select
      noFilterOption.value = "";
      categoryFilter.appendChild(noFilterOption);

      // Ahora, agregamos las categorias unicas
      uniqueGenreNames.forEach((category, index) => {
        const option = document.createElement("option");
        option.textContent = category;
        option.value = uniqueGenres[index]; // Cambiado para usar el ID
        categoryFilter.appendChild(option);
      });

      categoryFilter.addEventListener("change", async (event) => {
        const selectedGenreId = event.target.value;
        currentFilter = selectedGenreId;
        console.log(currentFilter);

        // Llamar a la funcion para obtener las peliculas
        if (selectedGenreId) {
          await getFetchMoviesByGenre(selectedGenreId, genreMap, lang);
        } else {
          await getFetchMovies(listOptions.popular, lang);
          currentFilter = null; // Reseteamos el filtro
        }

      });
      document.querySelector(".filter-container").appendChild(categoryFilter);
    } else {
      const errorContainer = document.querySelector('.error-container');
      errorContainer.textContent = 'No se encontraron resultados.';
    }
  }
  catch (e) {
    console.log(e);
  }
}

// Funcion para llamar a la Api
async function fetchMovies(url) {
  const response = await fetch(url);
  return await response.json();
}

// Funcion para obtener películas por genero
async function getFetchMoviesByGenre(genreId, genreMap, lang = language.es) {
  const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}&language=${lang}`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data.results) {
      displayMovies(data.results, genreMap); // Mostramos las peliculas filtradas
    } else {
      const errorContainer = document.querySelector('.error-container');
      errorContainer.textContent = 'No se encontraron resultados.';
    }
  } catch (e) {
    console.log(e);
  }
}

// Funcion para obtener a los directores y actores
async function getMovieCredits(movieId, lang = language.es) {
  const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=${lang}`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

async function getMovieDetails(movieId, lang = language.es) {
  const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=${lang}&append_to_response=credits,reviews,recommendations`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;

  } catch (e) {
    console.log(e);
  }
}


// Creamos cada "card" de cada pelicula, recibiendo los datos que necesitamos
function createCard(movie, genreMap, isListView = false) {
  const { id, title, overview, release_date, poster_path, vote_average, genre_ids } = movie;
  const year = release_date.split('-')[0];
  const posterUrl = `https://image.tmdb.org/t/p/w300${poster_path}`;

  const movieCard = document.createElement('div');
  movieCard.classList.add('movie-card');

  const movieImage = document.createElement('img');
  movieImage.src = posterUrl;
  movieImage.addEventListener('click', () => openMovieDetails(movie, genreMap));

  const movieYear = document.createElement('p');
  movieYear.textContent = `Año: ${year}`;

  const movieCategory = document.createElement('p');
  movieCategory.textContent = `Categoría: ${getGenresNames(genre_ids, genreMap)}`;

  const movieTitle = document.createElement('h3');
  movieTitle.textContent = title;
  movieTitle.addEventListener("click", () => openMovieDetails(movie, genreMap));

  const movieOverview = document.createElement('p');
  movieOverview.classList.add('movie-overview');
  movieOverview.textContent = 'Descripción: ' + (overview ? overview : 'No se ha encontrado descripción');

  const readMoreButton = document.createElement('button');
  readMoreButton.textContent = "Leer más";
  readMoreButton.classList.add('read-more-button');

  readMoreButton.addEventListener('click', () => {
    if (movieOverview.classList.contains('expanded')) {
      movieOverview.classList.remove('expanded');
      readMoreButton.textContent = 'Leer más';
    } else {
      movieOverview.classList.add('expanded');
      readMoreButton.textContent = 'Leer menos';
    }
  });

  const movieRating = document.createElement('p');
  movieRating.textContent = `Puntaje: ${vote_average.toFixed(2)}`;

  movieCard.appendChild(movieImage);
  movieCard.appendChild(movieYear);
  movieCard.appendChild(movieCategory);
  movieCard.appendChild(movieTitle);
  movieCard.appendChild(movieOverview);
  movieCard.appendChild(readMoreButton);
  movieCard.appendChild(movieRating);
  return movieCard;
}

async function displayMovies(movies, genreMap) {
  const moviesList = document.querySelector('.movie-container');
  moviesList.innerHTML = '';

  for (const movie of movies) {
    // Obtiene los detalles de la película, incluyendo el runtime
    const movieDetails = await getMovieDetails(movie.id);

    // Asigna el runtime al objeto movie
    movie.runtime = movieDetails.runtime;
    movie.tagline = movieDetails.tagline;

    // Crea la tarjeta de la película
    const movieCard = createCard(movie, genreMap, movie.runtime, movie.tagline);

    // Crea el botón para abrir el modal con los detalles
    const detailsButton = document.createElement('button');
    detailsButton.textContent = "Ver actores / director";
    detailsButton.classList.add('details-button');

    // Al hacer clic, muestra los detalles en el modal
    detailsButton.addEventListener('click', () => {
      openModal(movie, genreMap);
    });

    // Añade el botón
    movieCard.appendChild(detailsButton);

    // Añade la tarjeta de la película al contenedor de películas
    moviesList.appendChild(movieCard);
  }
}

// Funcion para abrir el modal
async function openModal(movie, genreMap, isViewingDetails) {
  const modal = document.getElementById("movie-modal");
  const modalContent = document.querySelector(".modal-content");
  isViewingDetails = true;

  // Obtener los genres
  const genres = getGenresNames(movie.genre_ids, genreMap);

  // Obtener los créditos
  const credits = await getMovieCredits(movie.id);
  const first4Actors = credits.cast.slice(0, 4).map(actor => actor.name).join(', ');

  // Obtenemos el director y los productores, antes debemos ver que existen
  // Usamos filter, ya que nos devuelve un array de elementos, si usaramos find, nos devolveria el primero
  const director = credits.crew.filter(member => member.job === 'Director').map(director => director.name).join(', ');

  // Obtenemos a los productores
  const producers = credits.crew.filter(member => member.job === 'Producer').map(producer => producer.name).join(', ');

  // Actualizamos los cambios necesarios
  modalContent.innerHTML = `
    <span class="close-btn"></span>
    <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
    <h2>${movie.title}</h2>
    <p><strong>Año: </strong>${movie.release_date.split('-')[0]}</p>
    <p><strong>Géneros:</strong> ${genres}</p>
    <p><strong>Director/a:</strong> ${director || 'No disponible'}</p>
    <p><strong>Productor(es):</strong> ${producers || 'No disponible'}</p>
    <p><strong>Actores principales:</strong> ${first4Actors}</p>
    <p><strong>${movie.overview}</strong></p>
    <p>Puntuación: ${movie.vote_average.toFixed(2)}</p>
  `;

  // Mostrar el modal
  modal.style.display = "flex";


  // Cerrar el modal al hacer clic fuera de la ventana
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
      isViewingDetails = false;
    }
  });
}

// Aqui creamos los botones que nos hemos importado de "buttons.js"
// Usando un forEach
buttons.forEach(buttonInfo => {
  const button = document.createElement("button");
  button.textContent = buttonInfo.text;
  button.classList.add(buttonInfo.class);

  const buttonContainer = document.querySelector('.button-container');
  buttonContainer.appendChild(button);
});

// Ahora vamos a añadirle un evento click a cada boton
// Mapeamos las clases de los botones a sus respectivas opciones en listOptions
const buttonActions = {
  'popular-button': listOptions.popular,
  'upcoming-button': listOptions.upcoming,
  'topRated-button': listOptions.topRated,
  'nowPlaying-button': listOptions.nowPlaying
};

// Iteramos sobre el objeto y agregamos los evetListeners a cada botón
Object.keys(buttonActions).forEach(className => {
  const button = document.querySelector(`.${className}`);
  if (button) {
    button.addEventListener('click', () => {
      currentListOption = buttonActions[className];
      getFetchMovies(currentListOption, language.es);
    });
  }
})

// Creamos una función para seleccionar las categorias de las peliculas
function getUniqueCategories(movies) {
  const genreIds = movies.flatMap(movie => movie.genre_ids);
  // Usando set, evitamos que tenga repetidos
  const uniqueIds = Array.from(new Set(genreIds));
  return uniqueIds;
}

// Para poder mostrar las categorias en las "cards", vamos a crear otra funcion para los nombres
function getGenresNames(genreIds, genreMap) {
  return genreIds.map(id => genreMap[id] || 'Desconocido').join(', ');
}


// -------------------------------- DISPLAY -------------------------------------------------
async function backgroundFilm(movie, genreMap) {
  const genres = getGenresNames(movie.genre_ids, genreMap);
  const convertedTime = convertRuntimeToHoursAndMinutes(movie.runtime);

  const credits = await getMovieCredits(movie.id);
  const directorInfo = credits.crew.filter(member => member.job === 'Director');

  const genresItems = `<li class="info_date--genre">${genres}</li>
  `;

  return `
    <section class="backgroundFilm layout-box2">
  <div class="backgroundFilm__container">
    <div class="backgroundImage">
      <img class="back-backdrop" src="https://image.tmdb.org/t/p/w1280${movie.backdrop_path}" alt="${movie.title} backdrop">
    </div>
    <div class="backgroundFilm__container--info">
      <img class="back-poster" src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title} poster">
      <div class="info__data">
        <h1 class="info__title">${movie.title} (${movie.release_date.split('-')[0]})</h1>
        <div class="info_date--complete">
          <p class="info_date">${movie.release_date}</p>
          <ul class="info_date--genre">
            ${genresItems}
            <li>${convertedTime}</li>
          </ul>
        </div>
        <div class="info-summary">
          <p>${movie.tagline}</p>
          <h2>Vista General</h2>
          <p>${movie.overview ? movie.overview : "Descripción: No se ha encontrado descripción"}</p>
        </div>
        <div class="info-director">
          <h3>${directorInfo[0].name}</h3>
          <p>${directorInfo[0].job}</p>
        </div>
      </div>
    </div>
  </div>
</section>

    `
};

async function infoFilmMovie(movie) {
  //Detalles de la pelicula y creditos
  const details = await getMovieDetails(movie.id);
  const first4Actors = details.credits.cast.slice(0, 6);

  // Presupuesto
  const budget = details.budget ? `$${details.budget.toLocaleString()}` : "Presupuesto no disponible";
  const earnings = details.revenue ? `$${details.revenue.toLocaleString()}` : "Ganancias no disponible";

  // Iterar sobre los actores y generar el HTML
  const castItems = first4Actors.map(actor => {
    return `
      <div class="cast__data--info">
        <img src="https://image.tmdb.org/t/p/w200${actor.profile_path ? actor.profile_path : ''}" alt="${actor.name}">
        <p class ="actor--name" >${actor.name}</p>
        <p class ="actor--character">${actor.character}</p>
      </div>
    `;
  }).join(''); // Combinar todos los elementos en una sola cadena

  return `
    <section class="movie-cast layout-box">
      <div class="movie__cast--container">
        <h2>Reparto Principal</h2>
        <div class="cast__data--container">
          ${castItems} <!-- Aquí se insertan los actores -->
        </div>
      </div>
      <div class = "movie__cast--infoContainer">
        <div class = "movie__cast--state">
        <h4>Estado</h4>
        <p>${getReleaseDate(movie)}</p>
        </div>
        <div class = "movie__cast--language">
        <h4>Idioma Original</h4>
        <p>${getLanguageMap(movie.original_language)}</p>
        </div>
        <div class = "movie__cast--budget">
        <h4>Presupuesto</h4>
        <p>${budget}</p>
        </div>
        <div class = "movie__cast-earnings">
        <h4>Ingresos</h4>
        <p>${earnings}</p>
        </div>
      </div>
    </section>
  `;
}

// Funcion de las reseñas de las peliculas
async function getReviewsMovies(movie) {
  try {
    const details = await getMovieDetails(movie.id);
    const reviews = details.reviews.results;

    // Creamos una variable para almacenar las reseñas
    let reviewsHTML = '';

    // Iterar sobre el array de reseñas, antes comprobar
    if (reviews.length > 0) {
      reviews.forEach(review => {
        const username = review.author_details.username;
        const text = review.content;

        // Añadimos los datos a la variable
        reviewsHTML += `
        <div class="review">
          <h3>Username</h3>
          <p class= "username">${username}</p>
          <h3>Reseña</h3>
          <p class = "text">${text}</p> 
        </div>
        `;

      });
    } else {
      reviewsHTML = "<p>No hay reseñas disponibles.</p>";
    }

    return `
    <section class="reviews layout-box">
      <div class = "reviews__container">
        <h2>Reviews de la película</h2>
        ${reviewsHTML}
      </div>
    </section>   
    `
  } catch (e) {
    console.error("Error: ", e);
  }
}

async function getRecommendedMovies(movie) {
  const details = await getMovieDetails(movie.id);
  const recommendations = details.recommendations.results;

  // Guardar peliculas con "vote_average" > 6.5
  const moviesRecommended = recommendations.filter(movie => movie.vote_average > 6.5);

  let moviesRecommendedHTML = '';

  if (moviesRecommended.length > 0) {
    moviesRecommended.forEach(movie => {
      const title = movie.title;
      const poster = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;

      moviesRecommendedHTML += `
      <div class="recommended__info">  
          <img src="${poster}" alt="${title}" class="recommended-image">
          <h3>${title}</h3>
        </div>
      `
    });
  } else {
    moviesRecommendedHTML = "<p>No hay peliculas recomendadas.</p>";
  }

  return `
  <section class="recommended">
    <h2>Peliculas recomendadas</h2>
    <div class="recommended__container">
    ${moviesRecommendedHTML}
    </div>
  </section>
  `
}

// Parte de la vista detallada de cada pelicula
async function openMovieDetails(movie, genreMap) {
  let isListView = false;
  const root = document.getElementById('root');
  const filterContainer = document.querySelector('.filter-container');
  const viewButton = document.querySelector('.view-button');
  const popularButton = document.querySelector('.popular-button');
  const upcomingButton = document.querySelector('.upcoming-button');
  const topRatedButton = document.querySelector('.topRated-button');
  const nowPlayingButton = document.querySelector('.nowPlaying-button');
  const errorContainer = document.querySelector('.error-container');
  const movieContainer = document.querySelector('.movie-container');

  // Aplicar la clase 'hidden' a los demás elementos
  filterContainer.classList.add('hidden');
  viewButton.classList.add('hidden');
  popularButton.classList.add('hidden');
  upcomingButton.classList.add('hidden');
  topRatedButton.classList.add('hidden');
  nowPlayingButton.classList.add('hidden');
  errorContainer.classList.add('hidden');
  movieContainer.classList.add('hidden');
  if (movieContainer.classList.contains('list-view')) {
    isListView = true;
    movieContainer.classList.remove('list-view');
  }

  // Guardamos las categorias de la pelicula
  const credits = await getMovieCredits(movie.id);

  const backgroundFilmHtml = backgroundFilm(movie, genreMap);
  const infoFilmMovieHtml = infoFilmMovie(movie);
  const getReviews = getReviewsMovies(movie);
  const recommendedMoviesHtml = getRecommendedMovies(movie);
  // Aquí vamos a renderizar la nueva vista de los detalles, para eso vamos a usar una funcion
  root.innerHTML = `
    ${await backgroundFilmHtml}
    ${await infoFilmMovieHtml}
    ${await getReviews}
    ${await recommendedMoviesHtml}
    <div class = "layout-box">
    <button id="back-catalog">Volver al catálogo</button>
    </div>
  `;

  // Funcionalidad del boton de volver
  document.getElementById('back-catalog').addEventListener('click', () => {
    filterContainer.classList.remove('hidden');
    viewButton.classList.remove('hidden');
    popularButton.classList.remove('hidden');
    upcomingButton.classList.remove('hidden');
    topRatedButton.classList.remove('hidden');
    nowPlayingButton.classList.remove('hidden');
    errorContainer.classList.remove('hidden');
    movieContainer.classList.remove('hidden');
    if (isListView) {
      movieContainer.classList.add('list-view');
    }

    // Limpiar el contenido de la vista detallada
    root.innerHTML = '';

    // Volver a cargar el catálogo de películas
    if (currentFilter) {
      getFetchMoviesByGenre(currentFilter, genreMap, language.es); // Cargar películas según el filtro actual
    } else {
      getFetchMovies(currentListOption, language.es); // Cargar películas populares si no hay filtro
    }
  });
}