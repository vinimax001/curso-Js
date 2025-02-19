function contar() {
    let ini = document.querySelector('#txti')
    let fim = document.querySelector('#txtf')
    let passo = document.querySelector('#txtp')
    let res = document.querySelector('#resultado')

    //Conventendo para números e verificando se é NaN
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    
    //Verificando valores nulos
    if(p <= 0) {
        alert('O passo não pode ser 0. Realizando contagem com passo 1.')
        p = 1
    }
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar!'
        alert('[ERRO]Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>' 
        //Contagem Crescente
        /*
        
        //Loop único utilizando operador ternário para contagem
        const direcao = i < f ? 1 : -1;  // 1 para crescente, -1 para decrescente.
        for (let c = i; direcao * c <= direcao * f; c += p * direcao) {
        res.innerHTML += `${c} \u{1F449} `;
    }
        */

        if (i < f) {
            for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c}\u{1F449}   `
            }
        } else {        
            //contagem decrescente
            for(c = i; c >= f; c -= p){
                res.innerHTML += `${c}\u{1F449}`
            }
        }
        res.innerHTML += `${c} \u{1F3C1}`
    }
    
}