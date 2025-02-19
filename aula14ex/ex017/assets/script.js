function calcular(){
var operador = window.document.getElementById('operador')
var op = Number(operador.value)
var res = window.document.querySelector('div#res')
for(cont = 1; cont <= 10; cont ++) {
    var resultado = op * cont
    res.innerHTML += `${op} X ${cont} = ${resultado}<br>`
} 
}