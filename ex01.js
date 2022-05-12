function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min} horas.`
    if(hora >= 6 && hora < 12) {
        (`Bom Dia!`)
        img.src = 'manha.jpg'
        document.body.style.backgroundColor = '#F0CF5F'
    } else if(hora >= 12 && hora < 18) {
        console.log(`Boa Tarde!`)
        img.src = 'tarde.jpg'
        document.body.style.backgroundColor = '#44A8C8'
    } else if(hora >= 18 && hora < 24) {
        console.log(`Boa Noite`)
        img.src = 'noite.jpg'
        document.body.style.backgroundColor = '#7F5379'
    } else {
        console.log(`Boa Madrugada`)
        img.src = 'madrugada.jpg'
        document.body.style.backgroundColor = '#161C2C'
    }
}