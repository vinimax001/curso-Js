function tabuada(){

//Inicializando variaveis    
    let num = window.document.querySelector('#txtn')
    let tab = window.document.querySelector('#seltab')

//Convertendo para número e verificando valores nulos
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')    
    } else {
        let op = Number(num.value)
        
//Limpando a área do select
        tab.innerHTML = ''

//Gerando tabuada
        for(cont = 1; cont <= 10; cont++) {
            let item = document.createElement('option')
            let res = op * cont
            item.text =`${op} x ${cont} = ${res}`
            tab.appendChild(item)
        }
    }
}