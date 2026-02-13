let nomes = [
    {nome:"luiz", cargo:"admin"},
    {nome: "maria", cargo:"moderador"},
    {nome: "joão", cargo:"usuario"}
]

function verificarNomes(nome){
    const usuario = nomes.find(u => u.nome === nome);

    if(!usuario) {
        return "acesso negado"
    }

    if (usuario.cargo === "admin"){
        return "Bem vindo, admin"
    }

    if (usuario.cargo === "moderador"){
        return "Bem vindo moderador"
    }

    return "Bem vindo usuario"
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