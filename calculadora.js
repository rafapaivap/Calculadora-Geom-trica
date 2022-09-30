function triangulo(base = prompt('Insira o valor da base:'), altura = prompt('Insira o valor da altura: ')) {
    alert('O triângulo tem o total de ' + base * altura / 2 + 'm2')
}

function retangulo(base = prompt('Insira o valor da base:'), altura = prompt('Insira o valor da altura: ')) {
    alert('O retângulo tem o total de ' + base * altura + 'm2')
}

function quadrado(lado = prompt('Insira o tamanho de um lado:')) {
    alert('O quadrado tem o total de ' + lado * lado + 'm2')
}

function trapezio(baseMaior = prompt('Insira o valor da base maior:'), baseMenor = prompt('Insira o valor da base menor: '), altura = prompt('Insira o valor da altura: ')) {
    alert('O trapézio tem o total de ' + (baseMaior * baseMenor) * altura / 2 + 'm2')
}

function circulo(tamanho = prompt('Insira o valor do raio do círculo:')) {
    alert('O círculo tem o total de ' + 3.14 * (tamanho * 2) + 'm2')
}

let = opcao = ""
do {
    opcao = prompt(' Calculadora geométrica\n\n' +
    'Insira a opção de calculo desejada:\n' +
    '\n1- Calcular área triangular' +
    '\n2- Calcular área retângular' +
    '\n3- Calcular área do quadrado' + 
    '\n4- Calcular área do trapézio' +
    '\n5- Calcular área do círculo' + 
    '\n6- Sair')

    switch(opcao){
        case "1":
            triangulo()
            break
        case "2":
            retangulo()
            break
        case "3":
            quadrado()
            break
        case "4":
            trapezio()
            break
        case "5":
            circulo()
            break
        case "6":
            alert('Saindo...')
            break
        default:
            alert('Opção inválida')
    }

} while (opcao !== "6")
