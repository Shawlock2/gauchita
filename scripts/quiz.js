const KEY = 'muahahaha'

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    
    let j = Math.floor(Math.random() * (i + 1));
    
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array;
}


class Player{
  constructor(name,score){
    this.name = name
    this.score = score
  }
}

async function getAsk(path) {
  try {
    const resposta = await fetch(path);
    if (!resposta.ok) throw new Error("Erro ao carregar o arquivo JSON");
    const dados = await resposta.json();

    if (!Array.isArray(dados)) throw new Error("O JSON não é um array");

    return dados;
  } catch (erro) {
    console.error(erro);
    return [];
  }
}

function showScore(){
  let main = document.getElementById('mainTag')
  main.innerHTML = ""
  let players = getPlayers()
  players.forEach(p =>{
    let div = document.createElement('div')
    let name = document.createElement('span')
    name.innerText = p.name

    let scorePlayer = document.createElement('span')
    scorePlayer.innerText = p.score

    div.appendChild(name)
    div.appendChild(scorePlayer)
    main.appendChild(div)
  })
  let reload = document.createElement("button")
  reload.textContent = "Refazer"
  reload.addEventListener("click",()=>{
    window.location.reload()
  })

  let home = document.createElement("button")
  home.textContent = "Voltar"
  home.addEventListener("click",()=>{
    window.location.href= "../main.html"
  })
  main.appendChild(reload)
  main.appendChild(home)
}

function getPlayers(){
  const data = JSON.parse(localStorage.getItem(KEY))
  if(!data)return [];
  else return data;
}

function setPlayer(player){
  let playerArray = getPlayers()
  for(let i = 0; i < playerArray.length; i++){
    if(playerArray[i].name == player.name){
      playerArray[i].score = player.score
      localStorage.setItem(KEY,JSON.stringify(playerArray))
      return
    }
  }
  playerArray.push(player)
  localStorage.setItem(KEY,JSON.stringify(playerArray))
}

async function startQuiz(player) {
  const sectAsk = document.getElementById("perguntas");
  const sectResponse = document.getElementById("respostas");
  const visor = document.getElementById("visor");
  let score = 0;

  const askList = await getAsk("../assets/perguntas.json");
  const questions = shuffle(askList).slice(0, 10);

  let index = 0;

  function showNextQuestion() {
    if (index >= questions.length) {
      player.score = score;
      visor.innerText = "Placares"
      setPlayer(player)
      showScore()
      return
    }

    sectAsk.innerHTML = "";
    sectResponse.innerHTML = "";
    visor.innerText = `Pergunta ${index + 1}/${questions.length}`;

    const current = questions[index];

    const text = document.createElement("p");
    text.innerText = current.ask;
    sectAsk.appendChild(text);

    const options = shuffle([
      { text: current.response, isCorrect: true },
      { text: current.error[0], isCorrect: false },
      { text: current.error[1], isCorrect: false }
    ]);

    options.forEach(opt => {
      const btn = document.createElement("button");
      btn.textContent = opt.text;
      btn.addEventListener("click", () => {
        if (opt.isCorrect) score += 10;
        index++;
        showNextQuestion();
      });
      sectResponse.appendChild(btn);
    });
  }

  showNextQuestion();
}

function main(){
  let name = document.getElementById("jogador")
  if(name.value.trim().length == 0){
    return alert("Informe um nome ai colega")
  }
  let player = new Player(name.value,0)
  document.getElementById("formulario").remove()
  startQuiz(player)
}
