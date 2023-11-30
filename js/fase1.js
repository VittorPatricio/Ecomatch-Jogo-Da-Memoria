const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');



grid.addEventListener("click", () => {
  if (grid.classList.contains("reveal-card")) {
    grid.classList.remove("reveal-card");
  }
});

grid.addEventListener("click", () => {
  if (grid.classList.contains("reveal-card")) {
    grid.classList.toggle("reveal-card", false);
  }
});

const animals = [
    'capivara',
    'tucano',
    'arara',
    'onca',
    'mico-leao-dourado',
    'tatu',
    'camaleao',
    'cervo',
    'tamandua',
    'garca',
]

const createElement = (tag, className) =>{
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => { 
  
  const disabledCards = document.querySelectorAll('.disabled-card');

  const fundo = document.getElementById('modal-finalizacao');

  const mensagemfinalizacao = document.getElementById('modal-menor-finalizacao');
  
  if (disabledCards.length == 20) {
    clearInterval(intervalId);



    setTimeout(() => {
      mensagemfinalizacao.style.opacity = 0;
      fundo.style.display = "flex";
      mensagemfinalizacao.style.display = "flex";
      setTimeout(() => {
      mensagemfinalizacao .style.opacity = 1;
      }, 500);
      setTimeout(() =>  {
       
      }, 1500);


      }, 1000);
  }
}


const checkCards = () =>{
    const firstAnimal = firstCard.getAttribute('data-animal');
    const secondAnimal = secondCard.getAttribute('data-animal');

    if(firstAnimal === secondAnimal){
        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = '';
        secondCard = '';

        
        const matchSound = document.getElementById('matchSound');
        matchSound.play();
      
        checkEndGame();
        
    }else{
        setTimeout(() =>  {
        firstCard.classList.remove('reveal-card');
        secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = '';


        }, 800);
 
    }
}



const revealCard = ({ target }) => {
    if (target.parentNode.classList.contains('reveal-card') || target.parentNode.classList.contains('disabled-card')) {
      return;
    }
  
    if (firstCard === '') {
      target.parentNode.classList.add('reveal-card');
      firstCard = target.parentNode;
    } else if (secondCard === '') {
      target.parentNode.classList.add('reveal-card');
      secondCard = target.parentNode;
  
    
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
        card.removeEventListener('click', revealCard);
      });
  
      checkCards();
  
     
      setTimeout(() => {
        cards.forEach(card => {
          card.addEventListener('click', revealCard);
        });
      }, 1000);
    }
  }
  

const createCard = (animal) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');;
    const back = createElement('div', 'face back');;

    
    front.style.backgroundImage = `url('img/fase1/${animal}.svg')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-animal', animal);

    return card;
}

const loadGame = () => {
    
    const duplicatedAnimals = [ ...animals, ...animals];

    const shuffledArray = duplicatedAnimals.sort( () =>     Math.random() - 0.5);


    shuffledArray.forEach((animal) => {

        const card = createCard(animal);
        grid.appendChild(card);

    })
}

const openModal = () => {
  const overlay = document.getElementById('fundo-inicio');
  const modal = document.getElementById('texto-fase-inicio');

  document.body.classList.add('loading');

  setTimeout(() => {
      modal.style.animation = 'fadeOut 1s';
      overlay.style.animation = 'fadeOut 1s';
      setTimeout(() => {
          overlay.style.display = 'none';
          document.body.classList.remove('loading');
          
      }, 1000);
     
  }, 3000);
  
}


window.addEventListener('load', openModal);

var startTime = 0;
var intervalId;

function updateTimer() {
  
  const minutes = Math.floor(startTime / 60);
  const seconds = startTime % 60;

  
  timer.innerHTML = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

 
  localStorage.setItem('startTime', window.startTime);


  window.startTime = startTime;

  
  console.log(startTime);
}

function startTimer() {
  setTimeout(() => {
    intervalId = setInterval(() => { 
      startTime++;
      updateTimer();
    }, 1000);
  }, 3000);
}

window.onload = () =>{

  const playerName = localStorage.getItem('player');

  spanPlayer.innerHTML = playerName;

  startTimer();
  loadGame();
}

