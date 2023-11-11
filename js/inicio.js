const form = document.getElementById("exampleModal");
const imagem = document.getElementById("logo");

function jogar(){
    console.log("oiii")
    window.location.href = "fase1.html";
}

function fechar() {
    form.style.display = "none";
}

window.onload = function() {
    document.body.classList.add('loaded');
};

const abrirImagem = () => {
    if(form)
    imagem.addEventListener('click', revealCard);
}