function parimpar(n){ //parametro
    if (n % 2 == 0) {  //ação
        return 'Par'
    } else {
        return 'Ímpar' //retorno
    }
}
let res = parimpar(11) //chamada
console.log(res)

//Resultado resumido sem variavel
console.log(parimpar(5))
