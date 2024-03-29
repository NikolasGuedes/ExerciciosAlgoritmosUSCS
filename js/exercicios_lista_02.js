const btnMenuListaExercicios = document.querySelector('#btnMenuLista')
const MenuListaExercicios = document.querySelector('#MenuLista')

const input01_Exercicio01 = document.querySelector('#input_01_exercicio_01')
const btnResultado01 = document.querySelector('#btnResultado_01')
const campoResultado01 = document.querySelector('#campoResultado_01')
const btnLimpar01 = document.querySelector('#btnLimpar_01')

const input01_Exercicio02 = document.querySelector('#input_01_exercicio_02')
const input02_Exercicio02 = document.querySelector('#input_02_exercicio_02')
const btnResultado02 = document.querySelector('#btnResultado_02')
const campoResultado02 = document.querySelector('#campoResultado_02')
const btnLimpar02 = document.querySelector('#btnLimpar_02')

const input01_Exercicio03 = document.querySelector('#input_01_exercicio_03')
const btnResultado03 = document.querySelector('#btnResultado_03')
const campoResultado03 = document.querySelector('#campoResultado_03')
const btnLimpar03 = document.querySelector('#btnLimpar_03')

const input01_Exercicio04 = document.querySelector('#input_01_exercicio_04')
const btnResultado04 = document.querySelector('#btnResultado_04')
const campoResultado04 = document.querySelector('#campoResultado_04')
const btnLimpar04 = document.querySelector('#btnLimpar_04')

const input01_Exercicio05 = document.querySelector('#input_01_exercicio_05')
const btnResultado05 = document.querySelector('#btnResultado_05')
const campoResultado05 = document.querySelector('#campoResultado_05')
const btnLimpar05 = document.querySelector('#btnLimpar_05')


const input01_Exercicio06 = document.querySelector('#input_01_exercicio_06')
const input02_Exercicio06 = document.querySelector('#input_02_exercicio_06')
const input03_Exercicio06 = document.querySelector('#input_03_exercicio_06')
const btnResultado06 = document.querySelector('#btnResultado_06')
const campoResultado06 = document.querySelector('#campoResultado_06')
const btnLimpar06 = document.querySelector('#btnLimpar_06')


const input01_Exercicio07 = document.querySelector('#input_01_exercicio_07')
const input02_Exercicio07 = document.querySelector('#input_02_exercicio_07')
const input03_Exercicio07 = document.querySelector('#input_03_exercicio_07')
const btnResultado07 = document.querySelector('#btnResultado_07')
const campoResultado07 = document.querySelector('#campoResultado_07')
const btnLimpar07 = document.querySelector('#btnLimpar_07')


const input01_Exercicio08 = document.querySelector('#input_01_exercicio_08')
const input02_Exercicio08 = document.querySelector('#input_02_exercicio_08')
const btnResultado08 = document.querySelector('#btnResultado_08')
const campoResultado08 = document.querySelector('#campoResultado_08')
const btnLimpar08 = document.querySelector('#btnLimpar_08')


function nome() {
    console.log("Site feito por Nikolas Guedes da Silva")
}

function chamaMenu() {

    MenuListaExercicios.classList.toggle('esconde_item')

}

btnMenuListaExercicios.addEventListener('click', () => {
    chamaMenu()
})



//EXERCICIO 01 -----------------------------------------------------

function exercicio01(valor01) {

    const valor01Inteiro = parseInt(valor01)

    if (input01_Exercicio01.value === "") {
        campoResultado01.innerHTML = `
       Favor digitar todos os campos e colocar apenas numeros
        `
    } else {

        nome()

        if (valor01Inteiro > 10) {

            console.log(valor01Inteiro + " é maior que 10")

            campoResultado01.innerHTML = `
            <p class="valor_evidencia">${valor01}</p>
            é maior que <p class="valor_evidencia_resposta">10</p>.
            `
        } else if (valor01Inteiro == 10) {

            console.log(valor01Inteiro + " é igual a 10")

            campoResultado01.innerHTML = `
            <p class="valor_evidencia">${valor01}</p>
            é igual a <p class="valor_evidencia_resposta">10</p>.
            `

        }
        else {

            console.log(valor01Inteiro + " é menor que 10")

            campoResultado01.innerHTML = `
            <p class="valor_evidencia">${valor01}</p>
            é menor que <p class="valor_evidencia_resposta">10</p>.
            `
        }
    }

}


btnResultado01.addEventListener('click', () => {

    exercicio01(input01_Exercicio01.value)

})

btnLimpar01.addEventListener('click', () => {
    input01_Exercicio01.value = ""
    campoResultado01.innerHTML = ""

})


//EXERCICIO 02 -----------------------------------------------------

function exercicio02(valor01, valor02) {

    const valor01Inteiro = parseInt(valor01)
    const valor02Inteiro = parseInt(valor02)


    if (input01_Exercicio02.value === "" || input02_Exercicio02.value === "") {
        campoResultado02.innerHTML = `
        Favor digitar todos os campos e colocar apenas numeros
        `
    } else {

        nome()

        if (valor01Inteiro > valor02Inteiro) {

            console.log(valor01Inteiro + " é maior que " + valor02Inteiro)

            campoResultado02.innerHTML = `
            <p class="valor_evidencia_resposta">${valor01}</p>
            é maior que <p class="valor_evidencia">${valor02}</p>.
            `
        } else if (valor01Inteiro == valor02Inteiro) {

            console.log(valor01Inteiro + " é igual a " + valor02Inteiro)

            campoResultado02.innerHTML = `
            <p class="valor_evidencia_resposta">${valor01}</p>
            é igual a <p class="valor_evidencia_resposta">${valor02}</p>.
            `

        }
        else {

            console.log(valor01Inteiro + " é menor que" + valor02Inteiro)

            campoResultado02.innerHTML = `
            <p class="valor_evidencia">${valor01}</p>
            é menor que <p class="valor_evidencia_resposta">${valor02}</p>.
            `
        }

    }


}


btnResultado02.addEventListener('click', () => {

    exercicio02(input01_Exercicio02.value, input02_Exercicio02.value)

})

btnLimpar02.addEventListener('click', () => {
    input01_Exercicio02.value = ""
    input02_Exercicio02.value = ""
    campoResultado02.innerHTML = ""

})



//EXERCICIO 03 -----------------------------------------------------

function exercicio03(valor01) {

    const valor01Inteiro = parseInt(valor01)

    const resto = valor01Inteiro % 2

    if (input01_Exercicio03.value === "") {
        campoResultado03.innerHTML = `
        Favor digitar todos os campos e colocar apenas numeros
        `
    } else {

        nome()

        if (resto == 0) {

            console.log(valor01Inteiro + " é PAR")

            campoResultado03.innerHTML = `
            O valor <p class="valor_evidencia">${valor01}</p>
            é: <p class="valor_evidencia_resposta">PAR</p>.
            `

        } else {

            console.log(valor01Inteiro + " é IMPAR")

            campoResultado03.innerHTML = `
            O valor <p class="valor_evidencia">${valor01}</p>
            é: <p class="valor_evidencia_resposta">IMPAR</p>.
            `

        }
    }

}


btnResultado03.addEventListener('click', () => {

    exercicio03(input01_Exercicio03.value)

})

btnLimpar03.addEventListener('click', () => {
    input01_Exercicio03.value = ""
    campoResultado03.innerHTML = ""

})



//EXERCICIO 04 -----------------------------------------------------

function exercicio04(valor01) {

    const valor01Inteiro = parseInt(valor01)
    const valorMultiplo = 7


    if (input01_Exercicio04.value === "") {
        campoResultado04.innerHTML = `
        Favor digitar todos os campos e colocar apenas numeros
        `
    } else {

        nome()

        if (valor01Inteiro % valorMultiplo == 0) {

            console.log(valor01Inteiro + " é multiplo de 7")

            campoResultado04.innerHTML = `
            O valor <p class="valor_evidencia">${valor01}</p>
            é multiplo de <p class="valor_evidencia_resposta">7</p>.
            `

        } else {

            console.log(valor01Inteiro + " não é multiplo de 7")

            campoResultado04.innerHTML = `
            O valor <p class="valor_evidencia">${valor01}</p>
            não é multiplo de <p class="valor_evidencia_resposta">7</p>.
            `

        }

    }


}


btnResultado04.addEventListener('click', () => {

    exercicio04(input01_Exercicio04.value)

})

btnLimpar04.addEventListener('click', () => {
    input01_Exercicio04.value = ""
    campoResultado04.innerHTML = ""

})



//EXERCICIO 05 -----------------------------------------------------

function exercicio05(valor01) {

    const valor01Inteiro = parseInt(valor01)

    if (input01_Exercicio05.value === "") {
        campoResultado05.innerHTML = `
        Favor digitar todos os campos e colocar apenas numeros
        `
    } else {

        nome()

        if (valor01Inteiro <= 17 || valor01Inteiro > 67) {

            console.log("A idade fornecida foi de" + valor01Inteiro + " anos, esta pessoa não pode fazer doação de sangue.")

            campoResultado05.innerHTML = `
            A idade fornecida foi de <p class="valor_evidencia">${valor01} anos</p>,
            esta pessoa <p class="valor_evidencia_resposta">não pode fazer doação de sangue</p>
            `

        } else {

            console.log("A idade fornecida foi de" + valor01Inteiro + " anos, esta pessoa pode fazer doação de sangue.")

            campoResultado05.innerHTML = `
            A idade fornecida foi de <p class="valor_evidencia">${valor01} anos</p>,
            esta pessoa <p class="valor_evidencia_resposta">pode fazer doação de sangue</p>
            `

        }

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

function exercicio06(valor01, valor02, valor03) {

    const valor01Float = parseFloat(valor01)
    const valor02Float = parseFloat(valor02)
    const valor03Float = parseFloat(valor03)

    const mediaAluno = parseFloat(valor01Float + valor02Float + valor03Float) / 3


    if (input01_Exercicio06.value === "" || input02_Exercicio06.value === "" || input03_Exercicio06.value === "") {

        campoResultado06.innerHTML = `
        Favor digitar todos os campos e colocar apenas numeros
        `
    } else {

        nome()

        if (mediaAluno >= 6) {

            console.log("A media do aluno é " + mediaAluno + "este aluno esta aprovado")

            campoResultado06.innerHTML = `
            A media do aluno é: <p class="valor_evidencia">${mediaAluno}</p>,
            este aluno está: <p class="valor_evidencia_resposta">Aprovado</p>.
            `

        } else {

            console.log("A media do aluno é " + mediaAluno + "este aluno esta reprovado")

            campoResultado06.innerHTML = `
            A media do aluno é: <p class="valor_evidencia">${mediaAluno}</p>,
            este aluno está: <p class="valor_evidencia_resposta">Reprovado</p>.
            `

        }

    }


}


btnResultado06.addEventListener('click', () => {

    exercicio06(input01_Exercicio06.value, input02_Exercicio06.value, input03_Exercicio06.value)

})

btnLimpar06.addEventListener('click', () => {
    input01_Exercicio06.value = ""
    input02_Exercicio06.value = ""
    input03_Exercicio06.value = ""
    campoResultado06.innerHTML = ""

})



//EXERCICIO 07 -----------------------------------------------------

function exercicio07(valor01, valor02, valor03) {

    const valor01Float = parseFloat(valor01) * 2
    const valor02Float = parseFloat(valor02) * 3
    const valor03Float = parseFloat(valor03) * 4

    const mediaAluno = parseFloat(valor01Float + valor02Float + valor03Float) / (2 + 3 + 4)


    if (input01_Exercicio07.value === "" || input02_Exercicio07.value === "" || input03_Exercicio07.value === "") {

        campoResultado07.innerHTML = `
        Favor digitar todos os campos e colocar apenas numeros
        `
    } else {

        nome()

        if (mediaAluno >= 5) {

            console.log("A media do aluno é " + mediaAluno + "este aluno esta aprovado")

            campoResultado07.innerHTML = `
            A media do aluno é: <p class="valor_evidencia">${mediaAluno}</p>,
            este aluno está: <p class="valor_evidencia_resposta">Aprovado</p>.
            `

        } else {

            console.log("A media do aluno é " + mediaAluno + "este aluno esta reprovado")

            campoResultado07.innerHTML = `
            A media do aluno é: <p class="valor_evidencia">${mediaAluno}</p>,
            este aluno está: <p class="valor_evidencia_resposta">Reprovado</p>.
            `

        }

    }


}


btnResultado07.addEventListener('click', () => {

    exercicio07(input01_Exercicio07.value, input02_Exercicio07.value, input03_Exercicio07.value)

})

btnLimpar07.addEventListener('click', () => {
    input01_Exercicio07.value = ""
    input02_Exercicio07.value = ""
    input03_Exercicio07.value = ""
    campoResultado07.innerHTML = ""

})



//EXERCICIO 08 -----------------------------------------------------

function exercicio08(valor01, valor02) {

    const valor01Inteiro = parseInt(valor01)
    const valor02Inteiro = parseInt(valor02)
   

    if (input01_Exercicio08.value === "" || input02_Exercicio08.value === "") {
        campoResultado08.innerHTML = `
        Favor digitar todos os campos e colocar apenas numeros
        `
    } else {

        nome()

        if(valor01Inteiro == valor02Inteiro){

            console.log(valor01Inteiro + " é igual a " + valor02Inteiro) 

            campoResultado08.innerHTML = `
            <p class="valor_evidencia">${valor01Inteiro}</p>
            é igual a <p class="valor_evidencia_resposta">${valor02Inteiro}</p>.
            `
        }else{

            console.log(valor01Inteiro + " é diferente de " + valor02Inteiro) 

            campoResultado08.innerHTML = `
            <p class="valor_evidencia">${valor01Inteiro}</p>
            é diferente de <p class="valor_evidencia_resposta">${valor02Inteiro}</p>.
            `

        }

    }


}


btnResultado08.addEventListener('click', () => {

    exercicio08(input01_Exercicio08.value, input02_Exercicio08.value)

})

btnLimpar08.addEventListener('click', () => {
    input01_Exercicio08.value = ""
    input02_Exercicio08.value = ""
    campoResultado08.innerHTML = ""

})


