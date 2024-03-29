const btnMenuListaExercicios = document.querySelector('#btnMenuLista')
const MenuListaExercicios = document.querySelector('#MenuLista')

const input01_Exercicio01 = document.querySelector('#input_01_exercicio_01')
const input02_Exercicio01 = document.querySelector('#input_02_exercicio_01')
const btnResultado01 = document.querySelector('#btnResultado_01')
const campoResultado01 = document.querySelector('#campoResultado_01')
const btnLimpar01 = document.querySelector('#btnLimpar_01')

const input01_Exercicio02 = document.querySelector('#input_01_exercicio_02')
const btnResultado02 = document.querySelector('#btnResultado_02')
const campoResultado02 = document.querySelector('#campoResultado_02')
const btnLimpar02 = document.querySelector('#btnLimpar_02')

const input01_Exercicio03 = document.querySelector('#input_01_exercicio_03')
const input02_Exercicio03 = document.querySelector('#input_02_exercicio_03')
const btnResultado03 = document.querySelector('#btnResultado_03')
const campoResultado03 = document.querySelector('#campoResultado_03')
const btnLimpar03 = document.querySelector('#btnLimpar_03')

const input01_Exercicio04 = document.querySelector('#input_01_exercicio_04')
const input02_Exercicio04 = document.querySelector('#input_02_exercicio_04')
const btnResultado04 = document.querySelector('#btnResultado_04')
const campoResultado04 = document.querySelector('#campoResultado_04')
const btnLimpar04 = document.querySelector('#btnLimpar_04')

const input01_Exercicio05 = document.querySelector('#input_01_exercicio_05')
const btnResultado05 = document.querySelector('#btnResultado_05')
const campoResultado05 = document.querySelector('#campoResultado_05')
const btnLimpar05 = document.querySelector('#btnLimpar_05')


const input01_Exercicio06 = document.querySelector('#input_01_exercicio_06')
const btnResultado06 = document.querySelector('#btnResultado_06')
const campoResultado06 = document.querySelector('#campoResultado_06')
const btnLimpar06 = document.querySelector('#btnLimpar_06')


const input01_Exercicio07 = document.querySelector('#input_01_exercicio_07')
const btnResultado07 = document.querySelector('#btnResultado_07')
const campoResultado07 = document.querySelector('#campoResultado_07')
const btnLimpar07 = document.querySelector('#btnLimpar_07')


const input01_Exercicio08 = document.querySelector('#input_01_exercicio_08')
const btnResultado08 = document.querySelector('#btnResultado_08')
const campoResultado08 = document.querySelector('#campoResultado_08')
const btnLimpar08 = document.querySelector('#btnLimpar_08')


const input01_Exercicio09 = document.querySelector('#input_01_exercicio_09')
const btnResultado09 = document.querySelector('#btnResultado_09')
const campoResultado09 = document.querySelector('#campoResultado_09')
const btnLimpar09 = document.querySelector('#btnLimpar_09')


const input01_Exercicio10 = document.querySelector('#input_01_exercicio_10')
const btnResultado10 = document.querySelector('#btnResultado_10')
const campoResultado10 = document.querySelector('#campoResultado_10')
const btnLimpar10 = document.querySelector('#btnLimpar_10')


const input01_Exercicio11 = document.querySelector('#input_01_exercicio_11')
const btnResultado11 = document.querySelector('#btnResultado_11')
const campoResultado11 = document.querySelector('#campoResultado_11')
const btnLimpar11 = document.querySelector('#btnLimpar_11')


const input01_Exercicio12 = document.querySelector('#input_01_exercicio_12')
const input02_Exercicio12 = document.querySelector('#input_02_exercicio_12')
const input03_Exercicio12 = document.querySelector('#input_03_exercicio_12')
const btnResultado12 = document.querySelector('#btnResultado_12')
const campoResultado12 = document.querySelector('#campoResultado_12')
const btnLimpar12 = document.querySelector('#btnLimpar_12')

function nome() {
    console.log("Site feito por Nikolas Guedes da Silva")
}

function chamaMenu() {

    MenuListaExercicios.classList.toggle('esconde_item')

}

btnMenuListaExercicios.addEventListener('click', ()=> {
    chamaMenu()
})



//EXERCICIO 01 -----------------------------------------------------

function exercicio01(valor01, valor02) {

    const valor01Inteiro = parseInt(valor01)
    const valor02Inteiro = parseInt(valor02)
    const resultadoFormatado = valor01Inteiro + valor02Inteiro

    if (input01_Exercicio01.value === "" || input02_Exercicio01.value === "") {
        campoResultado01.innerHTML = `
       Favor digitar todos os campos e colocar apenas numeros
        `
    } else {

        console.log(resultadoFormatado)
        nome()

        campoResultado01.innerHTML = `
        O primeiro valor foi: <p class="valor_evidencia">${valor01}</p>,
        o segundo valor foi: <p class="valor_evidencia">${valor02}</p>,
        a soma dos dois valores fica: <p class="valor_evidencia_resposta">${resultadoFormatado}</p>
        `

    }


}


btnResultado01.addEventListener('click', () => {

    exercicio01(input01_Exercicio01.value, input02_Exercicio01.value)

})

btnLimpar01.addEventListener('click', () => {
    input01_Exercicio01.value = ""
    input02_Exercicio01.value = ""
    campoResultado01.innerHTML = ""

})


//EXERCICIO 02 -----------------------------------------------------

function exercicio02(valor01) {

    const valor01Inteiro = parseInt(valor01)
    const resultadoFormatado = valor01Inteiro * valor01Inteiro

    if (input01_Exercicio02.value === "") {
        campoResultado02.innerHTML = `
        Favor digitar todos os campos e colocar apenas numeros
        `
    } else {

        console.log(resultadoFormatado)
        nome()

        campoResultado02.innerHTML = `
        O valor passado foi: <p class="valor_evidencia">${valor01}</p>,
        a área deste valor é: <p class="valor_evidencia_resposta">${resultadoFormatado}</p>
        `

    }


}


btnResultado02.addEventListener('click', () => {

    exercicio02(input01_Exercicio02.value)

})

btnLimpar02.addEventListener('click', () => {
    input01_Exercicio02.value = ""
    campoResultado02.innerHTML = ""

})



//EXERCICIO 03 -----------------------------------------------------

function exercicio03(valor01, valor02) {

    const valor01Inteiro = parseInt(valor01)
    const valor02Inteiro = parseInt(valor02)

    const resultadoArea = valor01Inteiro * valor02Inteiro
    const resultadoPerimetro = 2 * (valor01Inteiro + valor02Inteiro)

    if (input01_Exercicio03.value === "" || input02_Exercicio03.value === "") {
        campoResultado03.innerHTML = `
        Favor digitar todos os campos e colocar apenas numeros
        `
    } else {

        console.log("Area do quadrado: " + resultadoArea)
        console.log("Area do perimetro: " + resultadoPerimetro)
        nome()

        campoResultado03.innerHTML = `
        O primeiro valor foi: <p class="valor_evidencia">${valor01}</p>,
        o segundo valor foi: <p class="valor_evidencia">${valor02}</p>,
        O resultado da área fica: <p class="valor_evidencia_resposta">${resultadoArea}</p>,
        O resultado do perímetro fica: <p class="valor_evidencia_resposta">${resultadoPerimetro}</p>
        `
    }


}


btnResultado03.addEventListener('click', () => {

    exercicio03(input01_Exercicio03.value, input02_Exercicio03.value)

})

btnLimpar03.addEventListener('click', () => {
    input01_Exercicio03.value = ""
    input02_Exercicio03.value = ""
    campoResultado03.innerHTML = ""

})



//EXERCICIO 04 -----------------------------------------------------

function exercicio04(valor01, valor02) {

    const valor01Inteiro = parseInt(valor01)
    const valor02Inteiro = parseInt(valor02)

    const valorDoAcrescimo = valor01Inteiro * (valor02Inteiro / 100)
    const valorComAcrescimo = valor01Inteiro + valorDoAcrescimo

    if (input01_Exercicio04.value === "" || input02_Exercicio04.value === "") {
        campoResultado04.innerHTML = `
        Favor digitar todos os campos e colocar apenas numeros
        `
    } else {

        console.log("Salario: " + valor01Inteiro)
        console.log("Porcentagem: " + valor02Inteiro)
        console.log("Salario novo: " + valorComAcrescimo)
        nome()

        campoResultado04.innerHTML = `
        O valor do salário é de: <p class="valor_evidencia">R$ ${valor01},00</p>,
        O acréscimo em porcentagem será de: <p class="valor_evidencia">${valor02}%</p>,
        O salário passará a ser: <p class="valor_evidencia_resposta">R$ ${valorComAcrescimo},00</p>
       
        `
    }


}


btnResultado04.addEventListener('click', () => {

    exercicio04(input01_Exercicio04.value, input02_Exercicio04.value)

})

btnLimpar04.addEventListener('click', () => {
    input01_Exercicio04.value = ""
    input02_Exercicio04.value = ""
    campoResultado04.innerHTML = ""

})



//EXERCICIO 05 -----------------------------------------------------

function exercicio05(valor01) {

    const valor01Inteiro = parseInt(valor01)
    const valorEmGrausCentigrados = (valor01Inteiro - 32) * 5 / 9

    if (input01_Exercicio05.value === "") {
        campoResultado05.innerHTML = `
        Favor digitar todos os campos e colocar apenas numeros
        `
    } else {

        console.log("Fahrenheit: " + valor01Inteiro)
        console.log("Graus Celsius: " + valorEmGrausCentigrados)
        nome()

        campoResultado05.innerHTML = `
        O valor de: <p class="valor_evidencia">${valor01}°F</p>,
        em Celsius é: <p class="valor_evidencia_resposta">${valorEmGrausCentigrados}°C</p>
        `
    }


}


btnResultado05.addEventListener('click', () => {

    exercicio05(input01_Exercicio05.value)

})

btnLimpar05.addEventListener('click', () => {
    input01_Exercicio05.value = ""
    campoResultado05.innerHTML = ""

})



//EXERCICIO 06 -----------------------------------------------------

function exercicio06(valor01) {

    const valor01Inteiro = parseInt(valor01)
    const valorEmGrausFahrenheit = (1, 8 * valor01Inteiro) + 32

    if (input01_Exercicio06.value === "") {
        campoResultado06.innerHTML = `
        Favor digitar todos os campos e colocar apenas numeros
        `
    } else {

        console.log("Graus Celsius: " + valor01Inteiro)
        console.log("Fahrenheit: " + valorEmGrausFahrenheit)
        nome()

        campoResultado06.innerHTML = `
        O valor de: <p class="valor_evidencia">${valor01}°C</p>,
        em Fahrenheit é: <p class="valor_evidencia_resposta">${valorEmGrausFahrenheit}°F</p>
        `
    }


}


btnResultado06.addEventListener('click', () => {

    exercicio06(input01_Exercicio06.value)

})

btnLimpar06.addEventListener('click', () => {
    input01_Exercicio06.value = ""
    campoResultado06.innerHTML = ""

})



//EXERCICIO 07 -----------------------------------------------------

function exercicio07(valor01) {

    const valor01Inteiro = parseInt(valor01)
    const valorComAcrescimoDe20 = (valor01Inteiro * 1.20)

    if (input01_Exercicio07.value === "") {
        campoResultado07.innerHTML = `
        Favor digitar todos os campos e colocar apenas numeros
        `
    } else {

        console.log("Valor Original: " + valor01Inteiro)
        console.log("Valor com 20% de Acrescimo: " + valorComAcrescimoDe20)
        nome()

        campoResultado07.innerHTML = `
        O valor passado foi <p class="valor_evidencia">${valor01}</p>,
        com 20% de acrescimo o mesmo passará a valer: <p class="valor_evidencia_resposta">${valorComAcrescimoDe20}</p>
        `
    }


}


btnResultado07.addEventListener('click', () => {

    exercicio07(input01_Exercicio07.value)

})

btnLimpar07.addEventListener('click', () => {
    input01_Exercicio07.value = ""
    campoResultado07.innerHTML = ""

})



//EXERCICIO 08 -----------------------------------------------------

function exercicio08(valor01) {

    const valor01Inteiro = parseInt(valor01)
    const valorTempoEmMinutos = (valor01Inteiro * 60)

    if (input01_Exercicio08.value === "") {
        campoResultado08.innerHTML = `
        Favor digitar todos os campos e colocar apenas numeros
        `
    } else {

        console.log("Valor em horas: " + valor01Inteiro)
        console.log("Valor em minutos: " + valorTempoEmMinutos)

        nome()

        campoResultado08.innerHTML = `
        O valor passado em horas foi: <p class="valor_evidencia">${valor01Inteiro}</p>,
        este valor equivale a: <p class="valor_evidencia_resposta">${valorTempoEmMinutos} minutos</p>
        `
    }


}


btnResultado08.addEventListener('click', () => {

    exercicio08(input01_Exercicio08.value)

})

btnLimpar08.addEventListener('click', () => {
    input01_Exercicio08.value = ""
    campoResultado08.innerHTML = ""

})



//EXERCICIO 09 -----------------------------------------------------

function exercicio09(valor01) {

    const valor01Inteiro = parseInt(valor01)
    const valorAnterior = valor01Inteiro - 1
    const valorPosterior = valor01Inteiro + 1

    if (input01_Exercicio09.value === "") {
        campoResultado09.innerHTML = `
        Favor digitar todos os campos e colocar apenas numeros
        `
    } else {

        console.log("Valor original: " + valor01Inteiro)
        console.log("Valor Anterior: " + valorAnterior)
        console.log("Valor Posterior: " + valorPosterior)

        nome()

        campoResultado09.innerHTML = `
        O valor passado foi: <p class="valor_evidencia">${valor01Inteiro}</p>,
        o numero anterior a este valor é: <p class="valor_evidencia_resposta">${valorAnterior}</p>,
        e o numero posterior a este valor é: <p class="valor_evidencia_resposta">${valorPosterior}</p>
        `
    }


}


btnResultado09.addEventListener('click', () => {

    exercicio09(input01_Exercicio09.value)

})

btnLimpar09.addEventListener('click', () => {
    input01_Exercicio09.value = ""
    campoResultado09.innerHTML = ""

})



//EXERCICIO 10 -----------------------------------------------------

function exercicio10(valor01) {

    const valor01Inteiro = parseInt(valor01)
    const valorParcelas = valor01Inteiro / 4

    if (input01_Exercicio10.value === "") {
        campoResultado10.innerHTML = `
        Favor digitar todos os campos e colocar apenas numeros
        `
    } else {

        console.log("Valor original: " + valor01Inteiro)
        console.log("Valor da parcela: " + valorParcelas)

        nome()

        campoResultado10.innerHTML = `
        O valor passado foi de: <p class="valor_evidencia">R$ ${valor01Inteiro},00</p>,
        ao parcelar este valor em 4 vezes sem juros a parcela irá ficar: <p class="valor_evidencia_resposta">R$ ${valorParcelas},00</p>
        `
    }


}


btnResultado10.addEventListener('click', () => {

    exercicio10(input01_Exercicio10.value)

})

btnLimpar10.addEventListener('click', () => {
    input01_Exercicio10.value = ""
    campoResultado10.innerHTML = ""

})



//EXERCICIO 11 -----------------------------------------------------

function exercicio11(valor01) {

    const valor01Inteiro = parseInt(valor01)
    const valorDesconto = valor01Inteiro * 0.9

    if (input01_Exercicio11.value === "") {
        campoResultado11.innerHTML = `
        Favor digitar todos os campos e colocar apenas numeros
        `
    } else {

        console.log("Valor original: " + valor01Inteiro)
        console.log("Valor com desconto: " + valorDesconto)

        nome()

        campoResultado11.innerHTML = `
        O valor passado foi de: <p class="valor_evidencia">R$ ${valor01Inteiro},00</p>,
        este valor com 10% de desconto passará a valer: <p class="valor_evidencia_resposta">R$ ${valorDesconto},00</p>
        `
    }


}


btnResultado11.addEventListener('click', () => {

    exercicio11(input01_Exercicio11.value)

})

btnLimpar11.addEventListener('click', () => {
    input01_Exercicio11.value = ""
    campoResultado11.innerHTML = ""

})



//EXERCICIO 12 -----------------------------------------------------

function exercicio12(valor01, valor02, valor03) {

    const valor01Inteiro = parseInt(valor01)
    const valor02Inteiro = parseInt(valor02)
    const valor03Inteiro = parseInt(valor03)
    const valorMedia = (valor01Inteiro + valor02Inteiro + valor03Inteiro) / 3

    if (input01_Exercicio12.value === "") {
        campoResultado12.innerHTML = `
        Favor digitar todos os campos e colocar apenas numeros
        `
    } else {

        console.log("Primeira Nota: " + valor01Inteiro)
        console.log("Segunda Nota: " + valor02Inteiro)
        console.log("Terceira Nota: " + valor03Inteiro)
        console.log("Media: " + valorMedia)

        nome()

        campoResultado12.innerHTML = `
        A primeira nota foi: <p class="valor_evidencia">${valor01Inteiro}</p>,
        a segunda nota foi: <p class="valor_evidencia">${valor02Inteiro}</p>,
        a terceira nota foi: <p class="valor_evidencia">${valor03Inteiro}</p>,
        A média deste aluno será de: <p class="valor_evidencia_resposta">${valorMedia}</p>
        `
    }


}


btnResultado12.addEventListener('click', () => {

    exercicio12(input01_Exercicio12.value, input02_Exercicio12.value, input03_Exercicio12.value)

})

btnLimpar12.addEventListener('click', () => {
    input01_Exercicio12.value = ""
    campoResultado12.innerHTML = ""

})










