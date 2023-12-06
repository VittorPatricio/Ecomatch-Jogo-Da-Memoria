const button = document.getElementById('jogar');
const form = document.getElementById('abrirmodal');
const modalbackdrop = document.getElementsByClassName('modal-backdrop');
const playerName = document.getElementById('PlayerName');
const NomeEscola = document.getElementById('escola');
const RAaluno = document.getElementById('ra');


const validateInput = () => {
    const isAllFilled =
    playerName.value.length > 2 &&
    NomeEscola.value.length > 5 &&
    RAaluno.value.length > 8;
  
    button.disabled = !isAllFilled;
};


playerName.addEventListener('input', validateInput);
RAaluno.addEventListener('input', validateInput);
NomeEscola.addEventListener('input', validateInput);

const handleSubmit = (event) =>{
    event.preventDefault();
    
    localStorage.setItem('player', playerName.value);
}


form.addEventListener('submit', handleSubmit);




//codigo nosso 🥔
function fechar(){
    window.location.href = "inicio.html";
}

function iniciarJogo(){
    window.location.href = "ecoguardia.html";
}

window.onload = function() {
    document.body.classList.add('loaded');
};

const abrirImagem = () => {
    if(form)
    imagem.addEventListener('click', revealCard);
}

