var agora = new Date()
var diasemana = agora.getDay()

/*
    0 Domingo
    1 Segunda
    2 Terça
    3 Quarta
    4 Quinta
    5 Sexta
    6 Sábado 
*/

switch(diasemana){
    case 0:
        console.log('Domingo')
        break
    
    case 1:
        console.log('Segunda')
        break
    
    case 2:
        console.log ('Terça')
        break

    case 3:
        console.log('Quarta')
        break

    case 4:
        console.log('Quinta')
        break

    case 5:
        console.log ('Sexta')
        break
    
    case 6:
        console.log ('Sábado')

    default:
        console.log ('[Erro] Dia Inválido')
        break
}gi 