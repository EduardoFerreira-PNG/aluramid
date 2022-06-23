function tocaSom(idAudio){

     document.querySelector(idAudio).play();
}


 const listaDeTeclas = document.querySelectorAll(".tecla")

 for(let contador = 0; contador < listaDeTeclas.length; contador ++){

     const tecla = listaDeTeclas[contador];
     const instrumento = tecla.classList[1];
     const idAudioIndividual = `#som_${instrumento}`

      tecla.onclick = function (){
          tocaSom(idAudioIndividual);
      } 
      
     }

