//encriptar
function encrip(){
   var texResul=document.getElementById("texto").value
      .replace(/e/g, "enter",)
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat")
      
   if(texResul.length === 0 || /^\s+$/.test(texResul)){
      alert("Escriba una palabra")
   }
   else if (/[^a-z ]/.test(texResul)){
         alert("solo letras minusculas y sin acento");

      } else{
         texbox.classList.remove("disabled")
         mensaje.textContent = ""; 
      }
      document.getElementById("resul").innerHTML= texResul;
      texto.value = "";
      texto.focus();
}


// desencriptado 
function desencrip(){
   var texResul2 =document.getElementById("texto").value
   .replace(/enter/g, "e")
   .replace(/imes/g, "i")
   .replace(/ai/g, "a")
   .replace(/ober/g, "o")
   .replace(/ufat/g, "u")
   
   document.getElementById("resul").innerHTML = texResul2;
   
   if (texResul2.length === 0 || /^\s+$/.test(texResul2)){
      alert("escriba una palabra");

   }
   else if(/[^a-z ]/.test(texResul2)){
      alert("solo letras minusculas y sin acento");
   } else{
      texbox.classList.remove("disabled")
      mensaje.textContent = "";
   }
   document.getElementById("resul").innerHTML=texResul2;
   texto.value ="";
   texto.focus();
}

var mensaje= document.querySelector(".mensaje");
var texbox= document.querySelector(".text-box");

function copy(){
   var copiar= document.getElementById("resul").textContent;
   console.log(copy);
   navigator.clipboard.writeText(copiar).then(()=>{
      if (copiar.length===0 || /^\s+$/.test(copiar)){
      } else {
         alert("texto copiado");
      }
   });
}
