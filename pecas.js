var ListaDePeca = ["filtro de ar","motor","amortecedor"]  

if (ListaDePeca.length < 10) {
    //É possível cadastrar
    console.log("É possível cadastrar mais peças")
} else {
    console.log("Nâo tem mais espaço na lista")
}


let peso = 50
if (peso<100) {
    console.log("A peça deve pesar no mínimo 100g")
}else {
    console.log("A peça possui peso adequado")
}


let NomePeca = "Disco de Freio"
if (NomePeca.length>3){
    console.log("Nome de peça está adequado para o cadastro")
}else{
    console.log("O nome deve ter mais de 3 caracteres")
}

