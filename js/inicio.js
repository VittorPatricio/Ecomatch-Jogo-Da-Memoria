if (document.getElementById("logo").classList.contains("class-logo")) {
    // A classe foi adicionada
  } else {
    // A classe não foi adicionada
  }

function inicar() {
    console.log("imagemaaaaa")
    document.getElementById("logo").classList.add("class-logo");
}

function jogar(){
    window.location.href = "ecoguardia.html";
}

window.onload = function() {
    document.body.classList.add('loaded');
};

const abrirImagem = () => {
    if(form)
    imagem.addEventListener('click', revealCard);
}
