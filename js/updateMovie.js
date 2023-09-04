const movieList = document.getElementById("movieList");
const updateFormContainer = document.getElementById("updateFormContainer");

// Função para buscar e exibir a lista de movie
async function UpdateMovieById() {
  try {
    movies = await getMovie();

    movies.forEach((movie) => {
      const listItem = document.createElement("div");
      listItem.classList.add("movieItem");

      const movieText = document.createElement("p");
      movieText.innerHTML = `<span>Filme:</span> ${movie.title}, <span>Gênero:</span> ${movie.genre}, <span>Ano:</span> ${movie.year}`;

      const SendButton = document.createElement("button");
      SendButton.textContent = "Atualizar";
      SendButton.classList.add("updateButton");
      SendButton.addEventListener("click", () => {
        const modal = document.getElementById("demo-modal"); // Access the first element with the "modal" class
        modal.style.visibility = "visible"; // Set the "visibility" style property to "visible"
        modal.style.opacity = "1"; // Set the "opacity" style property to "1"
        openUpdateForm(movie.id, movie.title, movie.genre, movie.year);
      });

      listItem.appendChild(movieText);
      listItem.appendChild(SendButton);
      movieList.appendChild(listItem);
    });
  } catch (error) {
    console.error("Erro ao obter a lista de Filmes:", error);
  }
}

async function openUpdateForm(movieId, title, genre, year) {
  const updateFormHTML = `
    <form id="updateForm" class="formUpdate">
      <h2>Atualizar Filme</h2>
      <label for="title">Título</label>
      <input type="text" placeholder="Título do filme" autofocus="true" id="title" value="${title}" required />
      <label for="genre">Gênero</label>
      <input type="text" placeholder="Gênero do filme" id="genre" value="${genre}" required />
      <label for="year">Ano</label>
      <input type="text" placeholder="Ano de lançamento do filme" id="year" value="${year}" required />
      <button type="submit" class="btn">Atualizar</button>
    </form>
  `;

  updateFormContainer.innerHTML = updateFormHTML;

  const updateForm = document.getElementById("updateForm");

  updateForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const genre = document.getElementById("genre").value;
    const year = document.getElementById("year").value;

    const newMovie = {
      title,
      genre,
      year,
    };

    await updateMovie(movieId, newMovie);
  });
}

// Chama a função para buscar e exibir os filmes ao carregar a página
UpdateMovieById();
