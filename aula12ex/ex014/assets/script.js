function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    data = new Date()
    hora = data.getHours()
    //hora = 18    
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        //Bom Dia 
        img.src = 'assets/images/manha.png'
        window.document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        //Boa Tarde
        img.src = 'assets/images/tarde.png'
        window.document.body.style.background = '#b9846f'
    } else {
        //Boa Noite
        img.src = 'assets/images/noite.png'
        window.document.body.style.background = '#515154'        
    }

}