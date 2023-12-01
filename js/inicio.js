const playerName = document.getElementById('player');
const button = document.getElementById('jogar');
const form = document.getElementById('abrirmodal');
const modalbackdrop = document.getElementsByClassName('modal-backdrop');

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
function fechar(){
    form.style.display= 'none';
    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
    abrirmodal.classList.remove('');
    modalbackdrop.style.display = 'none';
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

