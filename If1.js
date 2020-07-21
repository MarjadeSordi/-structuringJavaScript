function SoBoasNoticias(nota) { 
    if (nota >=7) {
        console.log("Aprovado com " + nota)
    }
}
SoBoasNoticias(8.1)
SoBoasNoticias(6.1)

function SoSeforVerdade(valor) {
    if (valor) {
        console.log("É verdade.... " + valor)
    }
}

SoSeforVerdade (1===1)
SoSeforVerdade (2==3)
SoSeforVerdade (undefined)
SoSeforVerdade (null)
SoSeforVerdade ('')
SoSeforVerdade (NaN)
SoSeforVerdade (0)
SoSeforVerdade ('  ')
SoSeforVerdade ("?")
SoSeforVerdade ([])
SoSeforVerdade (-1)
SoSeforVerdade ({})
SoSeforVerdade ([1,2])
