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

    alert(

"📊 CALCULADORA ESCOLAR DIGITAL\n\n" +

"Desenvolvido por Rayssa Santos 📚\n\n" +

"Este aplicativo foi criado com o objetivo de facilitar o cálculo de médias escolares de forma prática, rápida e organizada.\n\n" +

"Foi pensado especialmente para estudantes, responsáveis e professores que desejam acompanhar o desempenho escolar durante o ano letivo.\n\n" +

"✅ INSTRUÇÕES DE USO:\n\n" +

"• Digite o nome do aluno\n" +

"• Escolha o segmento escolar\n" +

"• Selecione a disciplina\n" +

"• Preencha pelo menos as 3 primeiras notas\n" +

"• O sistema calculará automaticamente a média parcial\n" +

"• Para baixar o relatório em PDF, é necessário gerar o relatório primeiro\n\n" +

"✨ Recursos do aplicativo:\n" +

"• Média parcial e final\n" +

"• Cálculo automático\n" +

"• Barra de desempenho\n" +

"• Relatório em PDF\n" +

"• Interface dinâmica por segmento escolar"

    )
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
}




// CORES AUTOMÁTICAS

function atualizarCores() {

    let seg = segmento.value

    let header = document.getElementById("headerApp")



    // FUNDAMENTAL I

    if (seg === "fund1") {

        header.style.background = "#2196f3"

        barra.style.background = "#2196f3"
    }



    // FUNDAMENTAL II

    else if (seg === "fund2") {

        header.style.background = "#ff9800"

        barra.style.background = "#ff9800"
    }



    // ENSINO MÉDIO

    else if (seg === "medio") {

        header.style.background = "#28a745"

        barra.style.background = "#28a745"
    }



    // PADRÃO

    else {

        header.style.background = "#444"

        barra.style.background = "#444"
    }
}




// DISCIPLINAS

function atualizarDisciplinas() {

    let seg = segmento.value

    disciplina.innerHTML = "<option value=''>Selecione</option>"



    // FUNDAMENTAL I

    if (seg === "fund1") {

        let lista = [

            "Português",
            "Matemática",
            "Ciências",
            "História",
            "Geografia",
            "Arte",
            "Educação Física",
            "Inglês",
            "Cultura Maker",
            "Música",
            "Xadrez"

        ]


        lista.forEach(m => {

            let op = document.createElement("option")

            op.text = m
            op.value = m

            disciplina.add(op)
        })
    }




    // FUNDAMENTAL II

    if (seg === "fund2") {

        let lista = [

            "Português",
            "Matemática",
            "Ciências",
            "História",
            "Geografia",
            "Língua Inglesa",
            "Língua Espanhola",
            "Espanhol",
            "Arte",
            "Educação Física",
            "Cultura Maker",
            "Redação",
            "Música"

        ]


        lista.forEach(m => {

            let op = document.createElement("option")

            op.text = m
            op.value = m

            disciplina.add(op)
        })
    }




    // ENSINO MÉDIO

    if (seg === "medio") {

        let lista = [

            "Língua Portuguesa",
            "Língua Inglesa",
            "Língua Espanhola",
            "Matemática",
            "Física",
            "Química",
            "Biologia",
            "História",
            "Geografia",
            "Sociologia",
            "Filosofia",
            "Redação",
            "Literatura",
            "Música"

        ]


        lista.forEach(m => {

            let op = document.createElement("option")

            op.text = m
            op.value = m

            disciplina.add(op)
        })
    }


    atualizarCores()
}




// CALCULAR

function simularMedia(mostrarAlerta = false) {

    let aluno = nome.value.trim()

    let materia = disciplina.value

    let n1 = parseFloat(b1.value)
    let n2 = parseFloat(b2.value)
    let n3 = parseFloat(b3.value)
    let n4 = parseFloat(b4.value)



    // VALIDAÇÕES

    if (!aluno) {

        if (mostrarAlerta) {

            alert("Digite o nome do aluno")
        }

        return
    }



    if (!materia || materia === "Selecione") {

        if (mostrarAlerta) {

            alert("Selecione a disciplina")
        }

        return
    }



    // NÃO MOSTRA ALERTA AUTOMÁTICO

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {

        resultado.innerHTML = ""

        barra.style.width = "0%"

        return
    }



    // MÉDIA PARCIAL

    let soma3 = n1 + n2 + n3

    let mediaParcial = soma3 / 3



    // SEM 4º BIMESTRE

    if (isNaN(n4)) {

        let precisa = (6 * 4) - soma3

        if (precisa < 0) {

            precisa = 0
        }


        resultado.innerHTML =

            "<strong>Aluno:</strong> " + aluno +

            "<br><br><strong>Disciplina:</strong> " + materia +

            "<br><br><strong>Média parcial:</strong> " + mediaParcial.toFixed(2) +

            "<br><br><strong>Situação:</strong> " +

            "<span style='color:#facc15; font-size:22px; font-weight:bold'>" +

            "🟡 EM ANDAMENTO" +

            "</span>" +

            "<br><br><strong>Precisa tirar:</strong> " +

            precisa.toFixed(2) +

            " no 4º bimestre"



        barra.style.width = (mediaParcial * 10) + "%"

        btnPDF.disabled = false

        return
    }




    // MÉDIA FINAL

    let mediaFinal = (soma3 + n4) / 4

    let status = ""

    let cor = ""



    // APROVADO

    if (mediaFinal >= 6) {

        status = "🟢 APROVADO"

        cor = "#22c55e"


        // BARRA COMPLETA

        barra.style.width = "100%"


        // CONFETE

        soltarConfete()
    }



    // RECUPERAÇÃO FINAL

    else {

        status = "🔴 RECUPERAÇÃO FINAL"

        cor = "#ef4444"


        // BARRA PROPORCIONAL

        barra.style.width = (mediaFinal * 10) + "%"
    }



    resultado.innerHTML =

        "<strong>Aluno:</strong> " + aluno +

        "<br><br><strong>Disciplina:</strong> " + materia +

        "<br><br><strong>Média final:</strong> " + mediaFinal.toFixed(2) +

        "<br><br><strong>Situação:</strong> " +

        "<span style='color:" + cor + "; font-size:22px; font-weight:bold'>" +

        status +

        "</span>"



    btnPDF.disabled = false
}




// PDF

function baixarRelatorio() {

    let aluno = nome.value.trim()


    if (!aluno) {

        alert("Digite o nome do aluno")

        return
    }


    const { jsPDF } = window.jspdf

    let doc = new jsPDF()


    doc.setFontSize(18)

    doc.text("RELATÓRIO ESCOLAR DIGITAL", 20, 20)


    doc.setFontSize(12)

    let texto = resultado.innerText

    doc.text(texto, 20, 40)


    doc.save("relatorio-" + aluno + ".pdf")
}




// CÁLCULO AUTOMÁTICO

b1.addEventListener("input", () => simularMedia(false))

b2.addEventListener("input", () => simularMedia(false))

b3.addEventListener("input", () => simularMedia(false))

b4.addEventListener("input", () => simularMedia(false))




// TELA DE CARREGAMENTO

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loading").style.display = "none"

    }, 3000)

})




// CONFETE AO APROVAR

function soltarConfete() {

    for (let i = 0; i < 120; i++) {

        let confete = document.createElement("div")

        confete.classList.add("confete")

        confete.style.left =
            Math.random() * window.innerWidth + "px"

        confete.style.background =
            `hsl(${Math.random() * 360},100%,50%)`

        confete.style.animationDuration =
            (Math.random() * 3 + 2) + "s"

        document.body.appendChild(confete)


        setTimeout(() => {

            confete.remove()

        }, 5000)
    }
}
// DASHBOARD

function atualizarDashboard(n1, n2, n3, n4) {

    document.getElementById("graf1").style.height = (n1 * 18) + "px"

    document.getElementById("graf2").style.height = (n2 * 18) + "px"

    document.getElementById("graf3").style.height = (n3 * 18) + "px"

    
    if (!isNaN(n4)) {

        document.getElementById("graf4").style.height =
            (n4 * 18) + "px"
    }
}
