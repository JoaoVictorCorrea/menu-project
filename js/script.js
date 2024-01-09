function calcular() {
    
    var quantities = document.getElementsByName("quantity");

    for (var input of quantities) {
        console.log(`Prato: Bife com batata - Preço unitário: R$ 25,00 - Quantidade: ${input.value} - Total: R$ ${input.value * 25}`)
    }
}