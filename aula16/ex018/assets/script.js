// Declaração de variáveis e vetores necessários
let num = document.querySelector('#fnum')
let lista = document.querySelector('#flista')
let res = document.querySelector('#res')
let valores = []

// Função para verificar se o número é válido (entre 1 e 100)
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

// Função para verificar se o número já está na lista
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

// Função para adicionar o número na lista
function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já adicionado na lista.')
    }

    // Limpar o campo de número e focar nele
    num.value = ''
    num.focus ()
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar')
    } else {
        
        // Quantidade de elementros no vetor
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            // Soma dos valores
            soma += valores[pos]
            
            // Verificação do maior e menor valor
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        // Cálculo da média
        media = soma / tot

        // Exibição dos resultados
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p><br> O maior valor informado foi ${maior}.</p/>`
        res.innerHTML += `<p><br> O menor valor informado foi ${menor}.</p/>`
        res.innerHTML += `<p><br> Somando todos os valores, temos ${soma}.</p/>`
        res.innerHTML += `<p><br> A média dos valores digitados é ${media}.</p/>`
    }
}