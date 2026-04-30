function mostrarDataAtual(){

let hoje=new Date();

let dia=String(hoje.getDate()).padStart(2,"0");
let mes=String(hoje.getMonth()+1).padStart(2,"0");
let ano=hoje.getFullYear();

dataAtual.innerText="Data: "+dia+"/"+mes+"/"+ano;

}



function atualizarHeaderSegmento(){

let segmento=segmentoSelect.value;


if(segmento==="fund1"){

headerApp.style.background="linear-gradient(90deg,#16a34a,#22c55e)";
iconeSegmento.innerHTML="📘";

}

else if(segmento==="fund2"){

headerApp.style.background="linear-gradient(90deg,#f59e0b,#fbbf24)";
iconeSegmento.innerHTML="📗";

}

else if(segmento==="medio"){

headerApp.style.background="linear-gradient(90deg,#2563eb,#60a5fa)";
iconeSegmento.innerHTML="🎓";

}

else{

headerApp.style.background="linear-gradient(90deg,#1f4e79,#2e75b6)";
iconeSegmento.innerHTML="🧮";

}

}



const segmentoSelect=document.getElementById("segmento");
const disciplinaSelect=document.getElementById("disciplina");



function atualizarDisciplinas(){

let segmento=segmentoSelect.value;

disciplinaSelect.innerHTML="<option value=''>Selecione</option>";

atualizarHeaderSegmento();


if(segmento===""){

disciplinaSelect.disabled=true;
return;

}

disciplinaSelect.disabled=false;


let lista=[];


if(segmento==="fund1"){

lista=["Português","Matemática","Ciências","História"];

}


else if(segmento==="fund2"){

lista=["Português","Matemática","Ciências","História","Geografia","Espanhol"];

}


else{

lista=["Português","Matemática","Física","Química","Biologia"];

}


lista.forEach(materia=>{

let option=document.createElement("option");

option.text=materia;

disciplinaSelect.add(option);

});

}



function simularMedia(){

let disciplina=disciplinaSelect.value;

if(disciplina==="") return;


let n1=parseFloat(b1.value)||0;
let n2=parseFloat(b2.value)||0;
let n3=parseFloat(b3.value)||0;
let n4=parseFloat(b4.value)||0;


let media=(n1+n2+n3+n4)/4;


let status="";
let cor="";


if(media>=6){

status="🟢 APROVADO";
cor="#22c55e";

}

else{

status="🔴 RECUPERAÇÃO FINAL";
cor="#ef4444";

}


resultado.innerHTML=

"Aluno: "+nome.value+

"<br><br>Segmento: "+segmento.options[segmento.selectedIndex].text+

"<br><br>Disciplina: "+disciplina+

"<br><br>Média final: "+media.toFixed(2)+

"<br><br><b>"+status+"</b>";


barra.style.width=(media*10)+"%";

barra.style.background=cor;

}



function gerarRelatorio(){

simularMedia();

btnPDF.disabled=false;

}



function limparCampos(){

document.getElementById("menuInicial").style.display="block";

document.getElementById("appPrincipal").style.display="none";

}



function baixarRelatorio(){

let nomeAluno=nome.value;


if(nomeAluno===""){

alert("Digite o nome do aluno");

return;

}


const { jsPDF } = window.jspdf;

let doc=new jsPDF();

doc.text(resultado.innerText,20,20);

doc.save("relatorio-"+nomeAluno+".pdf");

}



function abrirCalculadora(){

menuInicial.style.display="none";

appPrincipal.style.display="block";

mostrarDataAtual();

}



function mostrarSobre(){

alert("Aplicativo desenvolvido por Rayssa Santos 📚");

}



let deferredPrompt;


window.addEventListener("beforeinstallprompt",(e)=>{

e.preventDefault();

deferredPrompt=e;

btnInstalar.style.display="block";

});


btnInstalar.addEventListener("click",async()=>{

if(deferredPrompt){

deferredPrompt.prompt();

deferredPrompt=null;

}

});



document.addEventListener("DOMContentLoaded",()=>{

disciplinaSelect.disabled=true;

btnPDF.disabled=true;

});
