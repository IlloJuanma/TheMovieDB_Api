export function changeViewButton() {
    let isListView = false;
    // Seleccionamos el contenedor del catálogo
    const movieContainer = document.getElementsByClassName('movie-container')[0];

    // Restablecer la vista al cargar películas
    const resetView = () => {
        if (isListView) {
            movieContainer.classList.add('list-view');
        } else {
            movieContainer.classList.remove('list-view');
        }
    };

    // Creamos el boton
    const viewButton = document.createElement('button');
    viewButton.textContent = 'Cambiar vista a lista';
    viewButton.classList.add('toggle-btn');
    document.querySelector('.view-button').appendChild(viewButton);

    viewButton.addEventListener('click', () => {
        isListView = !isListView;
        resetView();
        viewButton.textContent = isListView ? 'Cambiar vista a grilla' : 'Cambiar vista a lista';
    });
}