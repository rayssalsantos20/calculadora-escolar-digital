// ELEMENTOS

const menuInicial = document.getElementById("menuInicial")
const appPrincipal = document.getElementById("appPrincipal")

const nome = document.getElementById("nome")
const segmento = document.getElementById("segmento")
const disciplina = document.getElementById("disciplina")

const b1 = document.getElementById("b1")
const b2 = document.getElementById("b2")
const b3 = document.getElementById("b3")
const b4 = document.getElementById("b4")

const resultado = document.getElementById("resultado")

const barra = document.getElementById("barra")

const btnPDF = document.getElementById("btnPDF")

let relatorioGerado = false




// MENU

function abrirCalculadora() {

    menuInicial.style.display = "none"

    appPrincipal.style.display = "block"

    limparCampos()
}



function voltarMenu() {

    appPrincipal.style.display = "none"

    menuInicial.style.display = "block"
}




// SOBRE

function mostrarSobre() {

    alert("Calculadora Escolar Digital\n\nDesenvolvido por Rayssa Santos 📚")
}




// LIMPAR

function limparCampos() {

    nome.value = ""

    segmento.value = ""

    disciplina.innerHTML = "<option value=''>Selecione</option>"

    b1.value = ""
    b2.value = ""
    b3.value = ""
    b4.value = ""

    resultado.innerHTML = ""

    barra.style.width = "0%"

    btnPDF.disabled = true

    btnPDF.style.opacity = "0.5"

    btnPDF.style.cursor = "not-allowed"

    atualizarDashboard()
}




// DISCIPLINAS

function atualizarDisciplinas() {

    let seg = segmento.value

    disciplina.innerHTML = "<option value=''>Selecione</option>"

    let lista = []



    if (seg === "fund1") {

        lista = [
            "Português",
            "Matemática",
            "Ciências"
        ]
    }



    if (seg === "fund2") {

        lista = [
            "Português",
            "Matemática",
            "História"
        ]
    }



    if (seg === "medio") {

        lista = [
            "Física",
            "Química",
            "Biologia"
        ]
    }



    lista.forEach(m => {

        let op = document.createElement("option")

        op.text = m

        op.value = m

        disciplina.add(op)
    })
}




// GERAR RELATÓRIO

function gerarRelatorio() {

    simularMedia(true)

    btnPDF.disabled = false

    btnPDF.style.opacity = "1"

    btnPDF.style.cursor = "pointer"

    relatorioGerado = true
}




// CALCULAR

function simularMedia(mostrarAlerta = false) {

    let aluno = nome.value.trim()

    let materia = disciplina.value

    let n1 = parseFloat(b1.value)
    let n2 = parseFloat(b2.value)
    let n3 = parseFloat(b3.value)
    let n4 = parseFloat(b4.value)

    atualizarDashboard()



    if (!aluno) {

        if (mostrarAlerta) {

            alert("Digite o nome do aluno")
        }

        return
    }



    if (!materia) {

        if (mostrarAlerta) {

            alert("Selecione a disciplina")
        }

        return
    }



    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {

        resultado.innerHTML = ""

        return
    }



    let soma3 = n1 + n2 + n3

    let mediaParcial = soma3 / 3




    if (isNaN(n4)) {

        resultado.innerHTML =

        "<strong>Aluno:</strong> " + aluno +

        "<br><br><strong>Disciplina:</strong> " + materia +

        "<br><br><strong>Média parcial:</strong> " +

        mediaParcial.toFixed(2)

        barra.style.width = (mediaParcial * 10) + "%"

        return
    }




    let mediaFinal = (soma3 + n4) / 4

    resultado.innerHTML =

    "<strong>Aluno:</strong> " + aluno +

    "<br><br><strong>Disciplina:</strong> " + materia +

    "<br><br><strong>Média final:</strong> " +

    mediaFinal.toFixed(2)

    barra.style.width = (mediaFinal * 10) + "%"
}




// PDF

function baixarRelatorio() {

    if (!relatorioGerado) {

        alert("Clique primeiro em Gerar Relatório")

        return
    }


    const { jsPDF } = window.jspdf

    let doc = new jsPDF()

    doc.setFontSize(18)

    doc.text("RELATÓRIO ESCOLAR DIGITAL", 20, 20)

    doc.setFontSize(12)

    doc.text(resultado.innerText, 20, 40)

    doc.save("relatorio.pdf")
}




// LIMITAR NOTA

function limitarNota(campo) {

    let valor = campo.value

    valor = valor.replace(",", ".")

    valor = valor.replace(/[^0-9.]/g, "")

    const partes = valor.split(".")

    if (partes.length > 2) {

        valor = partes[0] + "." + partes[1]
    }



    if (valor.endsWith(".")) {

        campo.value = valor

        return
    }



    let numero = parseFloat(valor)



    if (isNaN(numero)) {

        campo.value = ""

        return
    }



    if (numero > 10) {

        numero = 10
    }



    if (numero < 0) {

        numero = 0
    }



    campo.value = numero
}




// EVENTOS

b1.addEventListener("input", () => {

    limitarNota(b1)

    simularMedia(false)
})



b2.addEventListener("input", () => {

    limitarNota(b2)

    simularMedia(false)
})



b3.addEventListener("input", () => {

    limitarNota(b3)

    simularMedia(false)
})



b4.addEventListener("input", () => {

    limitarNota(b4)

    simularMedia(false)
})




// DASHBOARD

function atualizarDashboard() {

    const graf1 = document.getElementById("graf1")
    const graf2 = document.getElementById("graf2")
    const graf3 = document.getElementById("graf3")
    const graf4 = document.getElementById("graf4")

    if (!graf1) return

    graf1.style.height = ((parseFloat(b1.value) || 0) * 18) + "px"

    graf2.style.height = ((parseFloat(b2.value) || 0) * 18) + "px"

    graf3.style.height = ((parseFloat(b3.value) || 0) * 18) + "px"

    graf4.style.height = ((parseFloat(b4.value) || 0) * 18) + "px"
}




// TEMA

function alternarTema() {

    document.body.classList.toggle("dark")

    let botao = document.querySelector(".btnTema")

    if(document.body.classList.contains("dark")) {

        botao.innerHTML = "☀️"
    }

    else {

        botao.innerHTML = "🌙"
    }
}
