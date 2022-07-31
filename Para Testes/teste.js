/*var masc = true
var altura = 1.90
var altura2 = Math.pow(altura, 2)
var peso = 90

var imc = peso/altura2.toFixed(1)

if (imc <= 18.9 && masc){
    console.log('Seu IMC: Abaixo do Peso!')
}
else if (imc <= 23.9 && masc){
    console.log('Seu IMC: Peso Ideal')
}
else if(imc <= 28.9 && masc){
    console.log('Seu IMC: Levemente acima do peso!')
}
else if(imc <= 38.9 && masc){
    console.log('Seu IMC: Obesidade Moderada')
}
else if(imc >= 39 && masc){
    console.log('Seu IMC: Obesidade Morbida')
}*/

function escolher(){

    var op1 = window.document.getElementById("op1")
    //var op2 = window.document.getElementById("op2")
    var resposta = window.document.getElementById('resultado')

    if(op1.checked == true){
        resposta.innerHTML = 'opção 1'
    }
    else{resposta.innerHTML = 'OPÇÃO 2'}

}