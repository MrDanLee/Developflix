import peliculas from './peliculas.js'

function mostrarPelis (generoId) {
  const genero = document.getElementById(`genero-${generoId}`)
  const pelisFiltradas = peliculas.filter(peli => peli.genre_ids.includes(generoId))
  const pelisDisplay = pelisFiltradas.map(peli => {
    const urlBase = "https://image.tmdb.org/t/p/w500"
    const template = `
      <div class="card">
        <img src="${urlBase}${peli.poster_path}" alt="${peli.title}">
        <h3>${peli.title}</h3>
      </div>
    `
    return template
  }).join("")
  genero.innerHTML = pelisDisplay
}

mostrarPelis(28)
mostrarPelis(53)
mostrarPelis(12)