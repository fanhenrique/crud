const movieList = document.getElementById("movieList");

// Função para buscar e exibir a lista de filmes
async function deleteMovieById() {
  try {
    movies = await getMovie();

    movies.forEach((movie) => {
      const listItem = document.createElement("div");
      listItem.classList.add("movieItem");

      const movieText = document.createElement("p");
      movieText.innerHTML = `<span>Filme:</span> ${movie.title}, <span>Gênero:</span> ${movie.genre}, <span>Ano:</span> ${movie.year}`;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Deletar";
      deleteButton.classList.add("deleteButton");
      deleteButton.addEventListener("click", () => deleteMovie(movie.id));

      listItem.appendChild(movieText);
      listItem.appendChild(deleteButton);
      movieList.appendChild(listItem);
    });
  } catch (error) {
    console.error("Erro ao obter a lista de filmes:", error);
  }
}

// Chama a função para buscar e exibir os filmes ao carregar a página
deleteMovieById();
