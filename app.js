var price = document.getElementById("product-price")
var percentual = document.getElementById("product-percentual")
var nomeProduto = document.getElementById("product-name")
var resultado = document.getElementById("resultado")

const contagem = () => {
    var porc =( percentual.value / 100) + 1;
    console.log("porcentagem " + porc)
    var produtoDesconto = price.value * porc
    console.log("Produto preco "+ produtoDesconto)

    if(porc && produtoDesconto){
        resultado.innerHTML =  nomeProduto.value +" de R$" + price.value +  " + "+percentual.value +"%"+ " Ficará " +  "R$" + produtoDesconto.toFixed(2)
    } else {
        resultado.innerHTML = "Nada a calcular"
    }
    
}