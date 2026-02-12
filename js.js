let nomes = ["luiz", "marcelo", "joao"]

function verificarNomes(nome) {
    if(!nomes.includes(nome)) {
        return "acesso negado"
    }

    if(nome === "luiz") {
        return "bem vindo adm"
    }
        return "acesso negado"   
}

const input = document.querySelector("#userName");
const botao = document.querySelector("#botao");
const resultadoEl = document.querySelector("#result");

botao.addEventListener ("click", () => {
    const nomeDigitado = input.value.trim().toLowerCase();
    const resposta = verificarNomes(nomeDigitado);
    resultadoEl.innerText = resposta;
});

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        botao.click();
    }
});