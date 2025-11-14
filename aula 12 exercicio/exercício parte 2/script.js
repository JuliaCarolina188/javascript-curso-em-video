function carregar () {
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var section = document.getElementsByTagName('section')[0]
    var body = document.getElementsByTagName('body')[0]


    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    msg.innerHTML = `Agora são ${hora} horas, ${minutos} minutos e ${segundos} segundos`

    if (hora >= 0 && hora < 6) {
        // magrudaga
        imagem.src = './assets/madrugada.webp'
        section.style.background = 'white'
        body.style.background = 'black'

    } else if (hora >= 6 && hora < 12) {
        // manhã
        imagem.src = './assets/manhã.jpg'
        section.style.background = ''
        body.style.backgroundImage = 'linear-gradient(orange, pink)'
        body.style.backgroundSize = '100%'

    } else if (hora >= 12 && hora < 18) {
        // tarde
        imagem.src = "./assets/tarde.jpg"
        section.style.background = 'white'
        body.style.backgroundImage = 'linear-gradient(rgba(20, 129, 197, 1), white)'

    } else if (hora >= 18) {
        //noite
        imagem.src = './assets/noite.jpg'
        section.style.background = ''
        body.style.backgroundImage = 'linear-gradient(black, rgba(24, 0, 86, 1))'

    }
}

setInterval(carregar, 1000);