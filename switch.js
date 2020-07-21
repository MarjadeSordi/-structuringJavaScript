const ImprimirResultado = function(nota) {
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log("Quadro de Honra")
            break // para parar de executar o case, se não o case continua sendo executado
        case 7: case 8:
            console.log ("Aprovado")
            break 
        case 6: case 5: case 4:
            console.log("Recuperação")
            break
        case 3: case 2: case 1: case 0:
            console.log("Reprovado")
            break
        default: console.log("Nota inválida")
    }
    console.log("FIM")
}
ImprimirResultado (9.8)
ImprimirResultado (8.5)
ImprimirResultado (5.2)
ImprimirResultado (2.1)
ImprimirResultado (-2)