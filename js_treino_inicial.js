// ==================== nomes ================================================

// let nomes = ["luiz", "joao"] 

// for (i = 0; i < nomes.length; i++) {
//     console.log(`nomes: ${nomes[i]}`)
// }

// =================== verificar idade ========================================

// function verificarIdade(idade){
//     if (idade >= 18) {
//         return "Você é maior de idade"
//     }else {
//         return "Você é menor de idade"
//     }
// }

// let resultado = verificarIdade(17)

// console.log(resultado)

// ============================== testando novemente ============================

// function nomes(nome){
//     if (nome === "Luiz"){
//         return "Ola Luiz"
//     }else {
//         return "Você não é o Luiz"
//     }
// }

// let resultado = nomes("amanda")
// console.log(resultado)

// ============================ funções mais arrays ===============================

// let listaNomes = ["Luiz", "ana", "joão", "maria"]

// function verificarNome(nome) {
//     for (let i = 0; i < listaNomes.length; i++) {
//         if (listaNomes[i] === nome) {
//             return "nome encontrado"
//         }
//     }
//     return "Nome não encontrado"
// }


// console.log(verificarNome("joão"))

// ============================= outro teste =====================================

// let nomes = ["luiz", "joao", "pedro", "maria", "vitória"]

// function listarNomes(nome) {
//     for (let i = 0; i < nomes.length; i++) {
//         if (nome === "luiz") {
//             return "Ola Luiz"
//         } else if (nomes[i] === nome) {
//             return "Nome Encontrado"
//         }
//     }
//     return "Nome não encontrado"
// }

// console.log(listarNomes("luiz"))


// ===============================montando com html =======================================

// let nomes = ["luiz", "joão", "pedro", "matheus", "gabriel", "maria"];

// function verificarNomes(nome) {
//     let i = 0

//     while (i < nomes.length) {
//         if (nomes[i] === nome && nome === "maria") {
//             return "Ola maria, Welcome!"
//         } else if (nomes[i] === nome && nome === "luiz") {
//             return "Luiz não é penetra kkkk"
//         } else if (nomes[i] === nome) {
//             return "nome na lista"
//         }
//         i++
//     }
//     return "Nome não encontrado"
// }

// const input = document.querySelector("#nomeInput");
// const botao = document.querySelector("#btnBuscar")
// const resultadoEl = document.querySelector("#resultado")

// botao.addEventListener("click", () => {
//     const nomeDigitado = input.value.trim().toLowerCase();
//     const resposta = verificarNomes(nomeDigitado);
//     resultadoEl.innerText = resposta;
// });

// ============================== while contador

// let i = 1

// while (i <= 10) {
//     console.log(`contador: ${i}`);
//     i++

// }

// console.log("===================================================")


// // ============================= while mais validação

// let tentativas = 3

// while (tentativas > 0) {
//     console.log(`Tentativas restantes: ${tentativas}`);
//     tentativas--

// }

// console.log("acesso bloqueado")

// console.log("======================================================")

// // ============================= while mais array 

// let nomes = ["luiz", "joão", "pedro", "matheus", "gabriel", "maria"]

// let j = 0

// while (j < nomes.length) {
//     console.log(nomes[j])

//     if (nomes[j] === "joão") {
//         console.log("achou o joão");
//         break
//     }

//     j++
// }

// =================================refazendo esses 3 ===================================

let nomes = ["luiz", "joão", "pedro", "matheus", "maria"]

function verificarNomes(nome) {
    if(!nomes.includes(nome)) {
        return "acesso negado"
    }

    if(nome === "luiz") {
        return "admin"
    } else if (nome === "maria") {
        return "moderador"
    }

    return "usuario"
}

console.log (verificarNomes("maria"))
console.log (verificarNomes("luiz"))
console.log (verificarNomes("joão"))
console.log (verificarNomes("humberto"))

//=============================== encerramos aqui vamos fazer a tela de login agora