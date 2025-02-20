//Criando um array com 5 elementros
let num = [5,8,2,9,3]

//coloca os elementos em ordem crescente
num.sort()

//Acresentendo elemento no arrey
//a posição não existia e foi criada em possição existem o valor é subistituido
num[6] = 6

//Acrescenta um novo elemento no final do arrey
num.push(1)

//Colocando em ordem apos acrescenta novo elemento
num.sort()

//Mostrando o array
console.log(num)
console.log(`Nosso vetor é o ${num}`)

//Usando length para mostra quantos elementso o vetor tem
console.log(`O vetor tem ${num.length} posições`)

//Exibindo o valor do elemento 0
console.log(`O primeiro valor do vetor é ${num[0]}`)

//Exibindo o valor do terceiro elemento
console.log(`O valor do terceiro elemento é ${num[2]}`)

//Buscando valores no array
let pos = num.indexOf(8)
console.log(`O Valor 8 esta na posição ${pos}`)

//Buscando valor inexistente (valores inexistentes recebem posição -1)
pos = num.indexOf(5)
if (pos == -1){
    console.log('Valor inexistente')
} else {
    console.log(`O valor esta na posição ${pos}`)
}
