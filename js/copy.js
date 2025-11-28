// function pelisGenero (generoid) {
//  const genero = document.getElementById(`genero-${generoid}`)
//  const pelisFiltradas = peliculas.filter(peli => peli.genre_ids.includes(generoid))
//  const mostrarPelis = pelisFiltradas.map(peli => {
//    const urlBase = "https://image.tmdb.org/t/p/w500"
//    const template = `
//      <div class="card">
//        <img src="${urlBase}${peli.poster_path}" alt="${peli.title}">
//        <h3>${peli.title}</h3>
//      </div>
//    `
//    return template
//  }).join("")
//  genero.innerHTML = mostrarPelis
// }

// pelisGenero(28)
// pelisGenero(53)
// pelisGenero(12)

// const pelisAventura = [];

// for (let i = 0; i < peliculas.length; i++) {
//   if (peliculas[i].genre_ids.includes(12)) {
//     pelisAventura.push(peliculas[i])
//   }
// }

// const pelisAventuraFiltradas = peliculas.filter(peli => peli.genre_ids.includes(12));

// const pelisAventura = pelisAventuraFiltradas.map(peli => {
//   const template = `
//     <div class="card">
//       <img src="https://image.tmdb.org/t/p/w500${peli.poster_path}" alt="${peli.title}">
//       <h2>${peli.title}</h2>
//     </div>
//   `
//   return template;
// }).join("")

// // console.log(pelisAventura);

// aventura.innerHTML = pelisAventura;

/*
.genero {
  display: flex;
  gap: 20px;  
  flex: wrap;
}

.card {
  width: 200px;
}

.card img {
  width: 200px;
}
*/