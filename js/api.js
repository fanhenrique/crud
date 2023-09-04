const BASE_URL = "http://localhost:5000";

// Função para realizar uma requisição GET para a API
async function getMovie() {
  const response = await fetch(`${BASE_URL}/movies`);
  const data = await response.json();
  return data;
}

// Função para realizar uma requisição POST para a API
async function createMovie(movie) {
  const response = await fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  });
  const data = await response.json();
  alert(`Filme ${data.title} cadastrado com sucesso`);
  return data;
}

// Função para realizar uma requisição PUT para a API
async function updateMovie(id, movie) {
  const response = await fetch(`${BASE_URL}/movies/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  });
  const data = await response.json();
  alert(`Filme ${data.title} atualizado com sucesso`);
  return data;
}

async function deleteMovie(id) {
  const response = await fetch(`${BASE_URL}/movies/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
}
