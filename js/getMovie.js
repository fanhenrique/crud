const movieList = document.getElementById("movieList");

// Função para buscar e exibir a lista de filmes
async function getAllMovie() {
  movies = await getMovie();
  try {
    movies.forEach((movie) => {
      const listItem = document.createElement("div");
      listItem.classList.add("movieItem");

      const movieText = document.createElement("p");
      movieText.innerHTML = `<span>Filme:</span> ${movie.title}, <span>Gênero:</span> ${movie.genre}, <span>Ano:</span> ${movie.year}`;

      listItem.appendChild(movieText);
      movieList.appendChild(listItem);
    });
  } catch (error) {
    console.error("Erro ao obter a lista de filmes:", error);
  }
}
getAllMovie();
