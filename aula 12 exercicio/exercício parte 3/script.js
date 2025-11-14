const { createElement } = require("react")

function verificador () {
    var data = new Date
    var ano = data.getFullYear()

    var resultado = document.getElementById('resultado')
    var nascimento = Number(document.getElementsByName('nascimento')[0].value)
    var idade = ano-nascimento
    var sexo = document.getElementsByName('sexo')

    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (nascimento <= 0 || nascimento >= ano ) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var genero = ''

        if (sexo[0].checked) {
            genero = 'uma mulher'

            if (idade >=0 && idade < 12) {
                img.setAttribute('src', './assets/mulherbebe.jpg')
            } 
            else if (idade >= 12 && idade < 18) {
                img.setAttribute('src', './assets/mulheradolescente.avif')
            }
            else if (idade >= 18 && idade < 50) {
                img.setAttribute('src', './assets/mulheradulta.png')
            }
            else if (idade >= 50) {
                img.setAttribute('src', './assets/mulhervelha.webp')
            }
        }
        else {
            genero = 'um homem'

            if (idade >=0 && idade < 12) {
                img.setAttribute('src', './assets/homembebe.jpg')
            } 
            else if (idade >= 12 && idade < 18) {
                img.setAttribute('src', './assets/homemadolescente.webp')
            }
            else if (idade >= 18 && idade < 50) {
                img.setAttribute('src', './assets/homemadulto.webp')
            }
            else if (idade >= 50) {
                img.setAttribute('src', './assets/homemvelho.webp')
            }
        }
        
        img.style.height = '30vh'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos<br><br>`
        resultado.appendChild(img)
    }

    //resultado.innerHTML = `Detectamos  com ${idade} anos`
}