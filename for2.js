const notas = [6.1, 5.5, 5.7, 7.5, 8.9]
for (i in notas){
    console.log(i,notas[i])
}

const pessoas = {
    nome: "Ana",
    sobrenome: "Silva",
    idade: 28,
    peso: 100
}

for (let x in pessoas) {
    console.log(`${x}, ${pessoas[x]}`)
}