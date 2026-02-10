let nomes = ["luiz", "joao", "nesk", "sorah", "polloh"]

function verificarNome(nome) {
    if (!nomes.includes(nome)) {
        return "acesso negado"
    }

    if (nome === "luiz") {
        return "bem vindo adm"
    } else if (nome === "nesk") {
        return "bem vindo streammer"
    }

    return "Bem-vindo, usuario"

}

// pegar elementos do html
const input = document.querySelector("#nomeInput");
const botao = document.querySelector("#btnBuscar");
const resultadoEl = document.querySelector("#resultado");


// 4) Quando clicar no botão, pegar o nome e mostrar o resultado

botao.addEventListener("click", () => {
    const nomeDigitado = input.value.trim().toLowerCase();
    const resposta = verificarNome(nomeDigitado);
    resultadoEl.innerText = resposta;
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const nomeDigitado = input.value.trim().toLowerCase();
    const resposta = verificarNome(nomeDigitado);
    resultadoEl.innerText = resposta;
  }
});
