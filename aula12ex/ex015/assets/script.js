function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value > ano)){
        window.alert('[ERRO]Verifique os dados e tente novamente')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = Number(ano) - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'assets/images/crianca-m.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'assets/images/jovem-m.png')
            }else if (idade < 50){
                //homem
                img.setAttribute('src', 'assets/images/adulto-m.png')
            }else {
                //idoso
                img.setAttribute('src', 'assets/images/idoso-m.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //crinça]
                img.setAttribute('src', 'assets/images/crianca-f.png')
            } else if(idade < 21) {
                //jovem
                img.setAttribute('src', 'assets/images/jovem-f.png')
            } else if(idade < 50){
                //adulta
                img.setAttribute('src', 'assets/images/adulto-f.png')
            } else {
                //idosa
                img.setAttribute('src', 'assets/images/idoso-f.png')
            }
        }
        res.innerHTML = `${genero}, com idade de ${idade} anos`
        res.appendChild(img)
    }
}