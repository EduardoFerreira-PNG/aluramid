function tocaSom(seletorAudio){

    const elemento = document.querySelector(seletorAudio);

    if(elemento === null){
        throw new Error ("Elemento não encontrado ou seletor invalido");

    }
    if(elemento && elemento.localName === "audio"){ 

        elemento.play();
    }else{
        throw new Error ("Elemento não encontrado ou seletor invalido");
    }
}


 const listaDeTeclas = document.querySelectorAll(".tecla")

 for(let contador = 0; contador < listaDeTeclas.length; contador ++){

     const tecla = listaDeTeclas[contador];
     const instrumento = tecla.classList[1];
     const idAudioIndividual = `#som_${instrumento}`

      tecla.onclick = function (){
          tocaSom(idAudioIndividual);

      } 

      tecla.onkeydown = function(event){
            if(event.code === 'Space' || event.code === 'Enter')
          tecla.classList.add('ativa')
      }
            tecla.onkeyup = function(){
          tecla.classList.remove('ativa')
      }
      
      
     }

