const form = document.querySelector(".formCreate");
const submitButton = form.querySelector(".btn");

function create() {
  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Impede o envio do formulário

    const title = document.getElementById("title").value;
    const genre = document.getElementById("genre").value;
    const year = document.getElementById("year").value;

    const newMovie = {
      title,
      genre,
      year,
    };

    try {
      const movie = await createMovie(newMovie);
      console.log("Novo filme cadastrado:", movie);
    } catch (error) {
      console.error("Erro ao cadastrar o filme:", error);
    }
  });
}

create();
