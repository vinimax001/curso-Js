var idade = 65
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade >= 65){
    console.log(`Sua idade é ${idade} seu voto é opcional.`)
} else {
    console.log(`Sua idade é ${idade} seu voto é OBRIGATÓRIO`)
}