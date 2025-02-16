var agora = new Date() //capturando hora do sistema
var hora = agora.getHours() // inserindo hora exata na var hora

console.log(`Agora são exatamente ${hora} horas.`)
if (hora > 23 || hora < 6) {
    console.log('Boa Madrugada')
} else if (hora < 12){
    console.log('Bom dia')
} else if(hora >= 12 && hora < 18){
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}