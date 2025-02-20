//Criando vetor valores com 6(0 a 5) elementos
let valores = [8,1,7,4,2,9]

//Exibindo elementos de valores
console.log(valores)

//Exibindo quantos elementos o vetor tem
console.log(`O vetor tem ${valores.length} posições`)

/*
Percurso no vetor utilizando laço de repetição

Exibindo cada elemento e seu valor utilizando repetição for
pos = 0(Criação da variavel pos com valor 0)

pos < valores.lenght (Teste logico para conta os elementos enquanto
o valor de pos for menor que o length)

pos ++ somando pos + 1 para cada laço que for repetido
ate o teste logico ser negativo
*/

for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}



//Colocando elementos em ordem com o sort()
valores.sort()

/*Percurso no vetor utilizando for in

let posicao (Inicialização da variavel pos)
in num (Identificando o vetor a ser percorrido)

Para cada posição na no vetor num mostre o num[posicao]
*/

for(let pos in valores){
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}