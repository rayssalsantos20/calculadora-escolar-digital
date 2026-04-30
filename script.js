// =============================
// MENU / NAVEGAÇÃO
// =============================

function abrirCalculadora() {

document.getElementById("menuInicial").style.display="none";
document.getElementById("appPrincipal").style.display="block";

limparCampos();

}


function voltarMenu(){

document.getElementById("appPrincipal").style.display="none";
document.getElementById("menuInicial").style.display="block";

}


function mostrarSobre(){

alert("Aplicativo desenvolvido por Rayssa Santos 📚");

}



// =============================
// LIMPAR CAMPOS
// =============================

function limparCampos(){

document.getElementById("nome").value="";

document.getElementById("segmento").value="";

document.getElementById("disciplina").innerHTML=
"<option value=''>Selecione</option>";

document.getElementById("b1").value="";
document.getElementById("b2").value="";
document.getElementById("b3").value="";
document.getElementById("b4").value="";

document.getElementById("resultado").innerHTML="";

document.getElementById("barra").style.width="0%";

document.getElementById("btnPDF").disabled=true;

}



// =============================
// DISCIPLINAS POR SEGMENTO
// =============================

function atualizarDisciplinas(){

let segmento=document.getElementById("segmento").value;

let disciplina=document.getElementById("disciplina");

disciplina.innerHTML="<option value=''>Selecione</option>";


if(segmento==="fund1"){

let lista=[
"Língua Portuguesa",
"Matemática",
"Ciências",
"História",
"Geografia",
"Arte",
"Educação Física",
"Cultura Maker",
"Xadrez",
"Música",
"Língua Inglesa"
];

lista.forEach(materia=>{
let option=document.createElement("option");
option.text=materia;
disciplina.add(option);
});

}


else if(segmento==="fund2"){

let lista=[
"Língua Portuguesa",
"Matemática",
"Ciências",
"História",
"Geografia",
"Inglês",
"Arte",
"Educação Física",
"Língua Espanhola",
"Música",
"Cultura Maker"
];

lista.forEach(materia=>{
let option=document.createElement("option");
option.text=materia;
disciplina.add(option);
});

}


else if(segmento==="medio"){

let lista=[
"Língua Portuguesa",
"Matemática",
"Física",
"Química",
"Biologia",
"História",
"Geografia",
"Língua Inglesa",
"Filosofia",
"Sociologia",
"Redação",
"Literatura",
"Língua Espanhola",
"Arte",
"Educação Física",
"Música"
];

lista.forEach(materia=>{
let option=document.createElement("option");
option.text=materia;
disciplina.add(option);
});

}

}



// =============================
// CÁLCULO AUTOMÁTICO
// =============================

document.addEventListener("DOMContentLoaded",function(){

document.getElementById("b1").addEventListener("input",simularMedia);
document.getElementById("b2").addEventListener("input",simularMedia);
document.getElementById("b3").addEventListener("input",simularMedia);
document.getElementById("b4").addEventListener("input",simularMedia);

document.getElementById("disciplina").addEventListener("change",simularMedia);

});



// =============================
// FUNÇÃO MÉDIA
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



// SEM 4º BIMESTRE

if(isNaN(n4)){

let notaNecessaria=(mediaMinima*4-soma3);

if(notaNecessaria<0) notaNecessaria=0;


let progresso=(mediaParcial/mediaMinima)*100;

if(progresso>100) progresso=100;


barra.style.width=progresso+"%";


resultado.innerHTML=

"Disciplina: "+disciplina+

"<br><br>Média parcial: "+mediaParcial.toFixed(2)+

"<br><br>Precisa tirar "+notaNecessaria.toFixed(2)+" no 4º bimestre";


return;

}



// COM 4º BIMESTRE

let somaTotal=soma3+n4;

let mediaFinal=somaTotal/4;

let progresso=(mediaFinal/mediaMinima)*100;

if(progresso>100) progresso=100;


barra.style.width=progresso+"%";


if(mediaFinal>=6){

resultado.innerHTML=

"Disciplina: "+disciplina+

"<br><br>Média final: "+mediaFinal.toFixed(2)+

"<br><br>🟢 ATINGIU A MÉDIA";

}


else{

resultado.innerHTML=

"Disciplina: "+disciplina+

"<br><br>Média final: "+mediaFinal.toFixed(2)+

"<br><br>🔴 RECUPERAÇÃO FINAL";

}


document.getElementById("btnPDF").disabled=false;

}



// =============================
// PDF
// =============================

function baixarRelatorio(){

let nomeAluno=document.getElementById("nome").value;

if(nomeAluno===""){

alert("Digite o nome do aluno");

return;

}


let texto=resultado.innerText;


if(texto===""){

alert("Gere o relatório primeiro");

return;

}


const { jsPDF }=window.jspdf;

let doc=new jsPDF();

doc.text("RELATÓRIO ESCOLAR DIGITAL",20,20);

doc.text(texto,20,40);

doc.save("relatorio-"+nomeAluno+".pdf");

}



// =============================
// BOTÃO INSTALAR APP
// =============================

let deferredPrompt;

window.addEventListener("beforeinstallprompt",(e)=>{

e.preventDefault();

deferredPrompt=e;

document.getElementById("btnInstalar").style.display="block";

});


document.getElementById("btnInstalar").addEventListener("click",async()=>{

if(deferredPrompt){

deferredPrompt.prompt();

deferredPrompt=null;

}

});
