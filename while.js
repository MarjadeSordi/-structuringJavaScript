function getNumeroAleatorio(min,max) {
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}
let opcao = 0
while (opcao != -1) {
    opcao= getNumeroAleatorio(-1,10)
    console.log(`As opções escolhidas foram ${opcao}.`)
}
console.log("Até a próxima")