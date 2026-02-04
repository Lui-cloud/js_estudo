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

let nomes = ["luiz", "joao", "pedro", "maria", "vitória"]

function listarNomes(nome) {
    for (let i = 0; i < nomes.length; i++) {
        if (nome === "luiz") {
            return "Ola Luiz"
        } else if (nomes[i] === nome) {
            return "Nome Encontrado"
        }
    }
    return "Nome não encontrado"
}

console.log(listarNomes("luiz"))
