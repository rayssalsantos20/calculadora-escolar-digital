// =============================
// DATA AUTOMÁTICA
// =============================

function mostrarDataAtual(){

let hoje=new Date();

let dia=String(hoje.getDate()).padStart(2,"0");
let mes=String(hoje.getMonth()+1).padStart(2,"0");
let ano=hoje.getFullYear();

document.getElementById("dataAtual").innerText=
"Data: "+dia+"/"+mes+"/"+ano;

}


// =============================
// HEADER DINÂMICO
// =============================

function atualizarHeaderSegmento(){

let segmento=document.getElementById("segmento").value;

let header=document.getElementById("headerApp");

let icone=document.getElementById("iconeSegmento");


if(segmento==="fund1"){

header.style.background="linear-gradient(90deg,#16a34a,#22c55e)";
icone.innerHTML="📘";

}

else if(segmento==="fund2"){

header.style.background="linear-gradient(90deg,#f59e0b,#fbbf24)";
icone.innerHTML="📗";

}

else if(segmento==="medio"){

header.style.background="linear-gradient(90deg,#2563eb,#60a5fa)";
icone.innerHTML="🎓";

}

else{

header.style.background="linear-gradient(90deg,#1f4e79,#2e75b6)";
icone.innerHTML="🧮";

}

}


// =============================
// DISCIPLINAS
// =============================

function atualizarDisciplinas(){

let segmento=document.getElementById("segmento").value;

let disciplina=document.getElementById("disciplina");

disciplina.innerHTML="<option value=''>Selecione</option>";

atualizarHeaderSegmento();


if(segmento===""){

disciplina.disabled=true;
return;

}

disciplina.disabled=false;


let lista=[];


if(segmento==="fund1"){

lista=[
"Língua Portuguesa","Matemática","Ciências",
"História","Geografia","Arte",
"Educação Física","Cultura Maker",
"Xadrez","Música","Língua Inglesa"
];

}


else if(segmento==="fund2"){

lista=[
"Língua Portuguesa","Matemática","Ciências",
"História","Geografia","Inglês",
"Arte","Educação Física",
"Língua Inglesa","Música",
"Língua Espanhola","Cultura Maker"
];

}


else{

lista=[
"Língua Portuguesa","Matemática",
"Física","Química","Biologia",
"História","Geografia","Língua Inglesa",
"Filosofia","Sociologia","Redação",
"Literatura","Língua Espanhola",
"Arte","Educação Física","Música"
];

}


lista.forEach(materia=>{

let option=document.createElement("option");

option.text=materia;

option.value=materia;

disciplina.add(option);

});

}


// =============================
// CÁLCULO DA MÉDIA
// =============================

function simularMedia(){

let disciplina=document.getElementById("disciplina").value;

if(disciplina==="") return;


let n1=parseFloat(b1.value);
let n2=parseFloat(b2.value);
let n3=parseFloat(b3.value);
let n4=parseFloat(b4.value);

let resultado=document.getElementById("resultado");

let barra=document.getElementById("barra");

let mediaMinima=6;


if(isNaN(n1)||isNaN(n2)||isNaN(n3)){

resultado.innerHTML="";

barra.style.width="0%";

return;

}


let soma3=n1+n2+n3;

let mediaParcial=soma3/3;


// APROVAÇÃO ANTECIPADA

if(mediaParcial>=6 && isNaN(n4)){

resultado.innerHTML=

"Aluno: "+nome.value+

"<br><br>Disciplina: "+disciplina+

"<br><br>Média parcial: "+mediaParcial.toFixed(2)+

"<br><br>🎉 Já atingiu a média anual";

barra.style.width="100%";

barra.style.background="#22c55e";

return;

}


// COM 4º BIMESTRE

if(!isNaN(n4)){

let somaTotal=soma3+n4;

let mediaFinal=somaTotal/4;

let progresso=Math.min((mediaFinal/6)*100,100);

barra.style.width=progresso+"%";


let status="";
let cor="";


if(mediaFinal>=6){

status="🟢 ATINGIU A MÉDIA";

cor="#22c55e";

}

else{

status="🔴 RECUPERAÇÃO FINAL";

cor="#ef4444";

}


barra.style.background=cor;


resultado.innerHTML=

"Aluno: "+nome.value+

"<br><br>Segmento: "+segmento.options[segmento.selectedIndex].text+

"<br><br>Disciplina: "+disciplina+

"<br><br>Média final: "+mediaFinal.toFixed(2)+

"<br><br>Progresso: "+Math.round(progresso)+"%"+

"<br><br><b style='color:"+cor+"'>"+status+"</b>";

}

}


// =============================
// GERAR RELATÓRIO
// =============================

function gerarRelatorio(){

simularMedia();

document.getElementById("btnPDF").disabled=false;

}


// =============================
// LIMPAR CAMPOS
// =============================

function limparCampos(){

nome.value="";

segmento.value="";

disciplina.innerHTML="<option value=''>Selecione</option>";

disciplina.disabled=true;

b1.value="";

b2.value="";

b3.value="";

b4.value="";

resultado.innerHTML="";


barra.style.width="0%";

barra.style.background="#d1d5db";


document.getElementById("headerApp").style.background=

"linear-gradient(90deg,#1f4e79,#2e75b6)";


document.getElementById("iconeSegmento").innerHTML="🧮";


document.getElementById("btnPDF").disabled=true;

}


// =============================
// PDF
// =============================

function baixarRelatorio(){

let texto=resultado.innerText;


if(texto===""){

alert("Gere o relatório primeiro");

return;

}


const { jsPDF }=window.jspdf;

let doc=new jsPDF();

doc.setFontSize(18);

doc.text("RELATÓRIO ESCOLAR DIGITAL",20,20);

doc.setFontSize(12);

doc.text(document.getElementById("dataAtual").innerText,20,30);

doc.text(texto,20,45);

doc.save("relatorio-"+nome.value+".pdf");

}


// =============================
// INICIALIZAÇÃO
// =============================

document.addEventListener("DOMContentLoaded",function(){

mostrarDataAtual();

document.getElementById("disciplina").disabled=true;

document.getElementById("btnPDF").disabled=true;

atualizarHeaderSegmento();

});

// =============================
// ATUALIZA AUTOMATICAMENTE AO DIGITAR
// =============================

document.addEventListener("DOMContentLoaded", function(){

mostrarDataAtual();

document.getElementById("disciplina").disabled = true;

document.getElementById("btnPDF").disabled = true;

atualizarHeaderSegmento();


// ATIVA CÁLCULO AUTOMÁTICO

document.getElementById("b1").addEventListener("input", simularMedia);
document.getElementById("b2").addEventListener("input", simularMedia);
document.getElementById("b3").addEventListener("input", simularMedia);
document.getElementById("b4").addEventListener("input", simularMedia);

document.getElementById("disciplina").addEventListener("change", simularMedia);

});