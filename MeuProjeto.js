function calcular(){
    var fem = window.document.getElementById('feminino')
    var Peso = window.document.getElementById('peso')
    var altura = window.document.getElementById('altura')
    var respostaMul = window.document.getElementById('resultado')

    var P1 = Number(Peso.value)
    var A1 = Number(altura.value)
    var A2 = Math.pow(A1, 2)
    var imc = P1/A2.toFixed(1)
    
    if (imc <= 18.9 && fem.checked == true){
        respostaMul.innerHTML = 'Seu IMC: Abaixo do Peso!'
    }
    else if (imc <= 23.9 && fem.checked == true){
        respostaMul.innerHTML = 'Seu IMC: Peso Ideal'
    }
    else if(imc <= 28.9 && fem.checked == true){
        respostaMul.innerHTML = 'Seu IMC: Levemente acima do peso!'
    }
    else if(imc <= 38.9 && fem.checked == true){
        respostaMul.innerHTML = 'Seu IMC: Obesidade Moderada'
    }
    else if(imc >= 39 && fem.checked == true){
        respostaMul.innerHTML = 'Seu IMC: Obesidade Morbida'
    }
    else if (imc <= 24.9 && fem.checked == !true){
        respostaMul.innerHTML = 'Seu IMC: Peso Ideal'
    }
    else if(imc <= 29.9 && fem.checked == !true){
        respostaMul.innerHTML = 'Seu IMC: Levemente acima do peso!'
    }
    else if(imc <= 39.9 && fem.checked == !true){
        respostaMul.innerHTML = 'Seu IMC: Obesidade Moderada'
    }
    else if(imc >= 40 && fem.checked == !true){
        respostaMul.innerHTML = 'Seu IMC: Obesidade Morbida'
    }
     
}
