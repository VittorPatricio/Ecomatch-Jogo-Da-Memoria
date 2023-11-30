const playerName = document.getElementById('player');
const button = document.getElementById('jogar');
const form = document.getElementById('abrirmodal');

const validateInput = ({target}) =>{
    if(target.value.length > 2){
        button.removeAttribute('disabled');
        return;
    }
    button.setAttribute('disabled', '');
}

const handleSubmit = (event) =>{
    event.preventDefault();
    
    localStorage.setItem('player', playerName.value);
}


playerName.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);




//codigo nosso 🥔
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

