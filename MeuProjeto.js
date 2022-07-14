function calcular(){
    var Peso = window.document.getElementById('peso')
    var altura = window.document.getElementById('altura')
    var resposta = window.document.getElementById('resultado')

    var P1 = Number(Peso.value)
    var A1 = Number(altura.value)
    var A2 = Math.pow(A1, 2)
    var s = P1/A2

    //resposta.innerHTML = `Seu IMC é de ${s.toFixed(1)}`
    
    if (s <= 18.5){
        resposta.innerHTML = 'Seu IMC: Abaixo do Peso!'
    }
    else if (s <= 24.9){
        resposta.innerHTML = 'Seu IMC: Peso Ideal'
    }
    else if(s <= 29.9){
        resposta.innerHTML = 'Seu IMC: Levemente acima do peso!'
    }
    else if(s <= 34.9){
        resposta.innerHTML = 'Seu IMC: Obesidade grau 1'
    }
    else if(s <= 39.9){
        resposta.innerHTML = 'Seu IMC: Obesidade grau 2 (severa)'
    }
    else if(s >= 40){
        resposta.innerHTML = 'Seu IMC: Obesidade Morbida!'
    }

    
}