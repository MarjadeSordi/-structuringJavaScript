function getNumeroAleatorio(min,max) {
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}
let opcao = 0

do {
    opcao= getNumeroAleatorio(-1,10)
    console.log(`As opções escolhidas foram ${opcao}.`)
} while (opcao != -1) //está é a única fez que a estrutura vai após a ordem da função

console.log("Até a próxima")