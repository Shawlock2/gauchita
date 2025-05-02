function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    
    let j = Math.floor(Math.random() * (i + 1));
    
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array;
}




function misteryButtons(){
    let content = document.getElementById("botoesMisterio")
    let arrayButtons = [
        {name: "cuponomia" ,action: ()=>{window.open("https://www.cuponomia.com.br/", "_blank")}},
        {name: "alternativeTo", action: ()=>{window.open("https://alternativeto.net/", "_blank")}},
        {name: "quizlet", action: ()=>{window.open("https://quizlet.com/", "_blank")}},
        {name: "khanAcademi", action: ()=>{window.open("https://pt.khanacademy.org/", "_blank")}},
        {name: "cuponeira", action: ()=>{window.open("https://www.cuponeria.com.br/", "_blank")}},
        {name: "pelando", action: ()=>{window.open("https://www.pelando.com.br/", "_blank")}},
        {name: "driveFilmes1", action: ()=>{window.open("https://drive.google.com/drive/folders/1dLqgWmstRF6k_VTcVFgEd9jigR3207-E", "_blank")}},
        {name: "filmesBarbie", action: ()=>{window.open("https://drive.google.com/drive/folders/1-yFkZrcyph8b1l4yrPpD7oaF5DHD7wss", "_blank")}},
        {name: "Tiago Rodrigo", action: ()=>{window.open("https://thiagorodrigo.com.br/", "_blank")}},
        {name: "spotfy", action: ()=>{window.open("https://open.spotify.com/playlist/0VY9pTbdj8p5vrVggI0cMv", "_blank")}},
    ]

    let arrayFinal = []

    arrayButtons.forEach(data =>{
        let button = document.createElement("button")
        button.classList.add("misteryButton")
        button.addEventListener('click',data.action)
        button.textContent = ">"
        arrayFinal.push(button)
    })

    arrayFinal = shuffle(arrayFinal)

    arrayFinal.forEach(element =>{
        content.appendChild(element)
    })
}

function trilha() {
  let som = document.getElementById("som");

  if (som.paused) {
    som.muted = false;
    som.play().catch((e) => {
      console.warn("Autoplay bloqueado:", e);
    });
  } else {
    som.muted = !som.muted;
  }
}

function main(){
  let nome = prompt("Diz teu nome pra eu ver uma coisa aqui")
  let chaves = ['laura','bruna','gauchinha','esposa','amor','noronha','menininha']
  if(!chaves.includes(nome.toLocaleLowerCase())){
    window.open("https://www.youtube.com/watch?v=WFiprqEleaU","_self")
  }
  else{
    misteryButtons()
  }
}

document.addEventListener('DOMContentLoaded',main)

function aunn(){
  let som = document.getElementById("plankton");

  if (som.paused) {
    som.muted = false;
    som.play().catch((e) => {
      console.warn("Autoplay bloqueado:", e);
    });
  } else {
    som.muted = !som.muted;
  }
}

function laura(){
  window.open('https://translate.google.com.br/?sl=ru&tl=pt&text=%D0%9B%D0%B0%D1%83%D1%80%D0%B0&op=translate','_blank')
}

function muehehe(){
  window.open("https://www.youtube.com/watch?v=a2csXtfHIn4", "_blank")
}