const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');
const matchSound = document.getElementById('matchSound');

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

const seas = [
  'alga',
  'ariranha',
  'baleia',
  'boto-cor-de-rosa',
  'cavalo-marinho',
  'concha',
  'estrela-do-mar',
  'peixe-boi',
  'polvo',
  'tartaruga',
]

const createElement = (tag, className) =>{
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => { //passa de fase aparecendo um modal interativo
  
  const disabledCards = document.querySelectorAll('.disabled-card');

  const fundo = document.getElementById('modal-finalizacao');

  const mensagemfinalizacao = document.getElementById('modal-menor-finalizacao');


  
  if (disabledCards.length == 20) {

    marSegundos = clearInterval(this.loop);
    
    setTimeout(() =>  {
      mensagemfinalizacao .style.opacity = 0;
      fundo.style.display = "flex";
      mensagemfinalizacao.style.display = "flex";


      setTimeout(() => {
      mensagemfinalizacao .style.opacity = 1;
      }, 500);


      setTimeout(() =>  {
        window.location.href = "fase3.html";
      }, 1500);


      }, 1000);
  }
}

const checkCards = () =>{
    const firstSea = firstCard.getAttribute('data-sea');
    const secondSea = secondCard.getAttribute('data-sea');

    if(firstSea === secondSea){
        matchSound.play();

        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = '';
        secondCard = '';

       
        

        checkEndGame();

    }

    else{
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
  

const createCard = (sea) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');;
    const back = createElement('div', 'face back');;

    
    front.style.backgroundImage = `url('img/fase2/${sea}.svg')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-sea', sea);

    return card;
}

const loadGame = () => {
    
    const duplicatedSeas = [ ...seas, ...seas];

    const shuffledArray = duplicatedSeas.sort( () =>     Math.random() - 0.5);


    shuffledArray.forEach((sea) => {

        const card = createCard(sea);
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




const startTime = () => {
  let totalSeconds = 0;

  setTimeout(() => {
    this.loop = setInterval(() => {
      totalSeconds++;

      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;

      
      const formattedMinutes = String(minutes).padStart(2, '0');
      const formattedSeconds = String(seconds).padStart(2, '0');

      
      timer.innerHTML = `${formattedMinutes}:${formattedSeconds}`;

    }, 1000);
  }, 3000);
};

window.onload = () =>{

  const playerName = localStorage.getItem('player');

  spanPlayer.innerHTML = playerName;

  startTime();
  loadGame();
}