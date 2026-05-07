function calcularMedia(){

    let nome = document.getElementById("nome").value;

    let n1 = parseFloat(document.getElementById("nota1").value) || 0;
    let n2 = parseFloat(document.getElementById("nota2").value) || 0;
    let n3 = parseFloat(document.getElementById("nota3").value) || 0;
    let n4 = parseFloat(document.getElementById("nota4").value) || 0;

    let media = (n1 + n2 + n3 + n4) / 4;

    document.getElementById("resultado").style.display = "block";

    document.getElementById("nomeAluno").innerHTML =
    "<strong>Aluno:</strong> " + nome;

    document.getElementById("mediaFinal").innerHTML =
    "<strong>Média:</strong> " + media.toFixed(1);

    let situacao = document.getElementById("situacao");

    if(media >= 7){
        situacao.innerHTML = "✅ APROVADO";
        situacao.className = "status aprovado";
    }

    else if(media >= 5){
        situacao.innerHTML = "⚠️ RECUPERAÇÃO";
        situacao.className = "status recuperacao";
    }

    else{
        situacao.innerHTML = "❌ REPROVADO";
        situacao.className = "status reprovado";
    }
}

function novaMedia(){

    document.getElementById("nome").value = "";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";
    document.getElementById("nota4").value = "";

    document.getElementById("resultado").style.display = "none";
}

function sobreApp(){

    alert(
        "📚 Calculadora Escolar Digital\n\n" +
        "Aplicativo desenvolvido para auxiliar estudantes no cálculo de médias escolares.\n\n" +
        "Desenvolvido por Rayssa Santos 💙"
    );
}
deferredPrompt=null;

}

});
