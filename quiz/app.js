document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("myModal");
  const acertosSpan = document.querySelector(".acertos");
  const temporizador = document.querySelector('.temporizador');
  const voltarParaInicio = document.getElementById("inicio");
  const confirmationModal = document.getElementById("confirmationModal");
  const confirmYes = document.getElementById("confirmYes");
  const confirmNo = document.getElementById("confirmNo");

  const TempoFloresta = parseInt(localStorage.getItem('TimeFloresta')) || 0;
  const TempoMar = parseInt(localStorage.getItem('TimeMar')) || 0;
  const TempoCidade = parseInt(localStorage.getItem('TimeCidade')) || 0;
  const tempoJogo = (TempoCidade + TempoFloresta + TempoMar) / 3;
  const tempoJogoFinal = parseInt(Math.trunc(tempoJogo));
  const minutes = Math.floor(tempoJogoFinal / 60);
  const seconds = tempoJogoFinal % 60;
  temporizador.innerHTML = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds} ${minutes < 10 ? 'Segundos' : 'Minutos'}`;



  const animais = [
    
    {
      id: 1,
      nome: "Alga",
      pergunta: "QUAL É O NOME DESSA PLANTA?",
      opcoes: ["ARRAIA", "ÁGUA", "ALGA", "AREIA"],
    },
    
    {
      id: 2,
      nome: "Arara",
      pergunta: "QUAL É O NOME DESSE ANIMAL?",
      opcoes: ["ARARA", "ABELHA", "ANTA", "AVESTRUZ"],
    },

    {
      id: 3,
      nome: "Ariranha",
      pergunta: "QUAL É O NOME DESSE ANIMAL?",
      opcoes: ["ARIRANHA", "ÁGUIA", "ARANHA", "AVESTRUZ"],
    },

    {
      id: 4,
      nome: "Baleia",
      pergunta: "QUAL É O NOME DESSE ANIMAL?",
      opcoes: ["BALEIA", "BODE", "BESOURO", "BORBOLETA"],
    },

    {
      id: 5,
      nome: "Biblioteca",
      pergunta: "QUAL É O NOME DESSE LUGAR?",
      opcoes: ["BIBLIOTECA", "BANCO", "BOSQUE", "BAR"],
    },

    {
      id: 6,
      nome: "Bombeiro",
      pergunta: "QUAL É O NOME DESSA PROFISSÃO?",
      opcoes: ["BOMBEIRO", "BARBEIRO", "BIÓLOGO", "BABÁ"],
    },

    {
      id: 7,
      nome: "Camaleão",
      pergunta: "QUAL É O NOME DESSE ANIMAL?",
      opcoes: ["CAMALEÃO", "GATO", "CAMELO", "CAVALO"],
    },

    {
      id: 8,
      nome: "Cervo",
      pergunta: "QUAL É O NOME DESSE ANIMAL?",
      opcoes: ["CERVO", "CORUJA", "COBRA", "CAMELO"],
    },

    {
      id: 9,
      nome: "Capivara",
      pergunta: "QUAL É O NOME DESSE ANIMAL?",
      opcoes: ["CAPIVARA", "CACHORRO", "CAPIXABA", "CAPITUVAL"],
    },

    {
      id: 11,
      nome: "Casa",
      pergunta: "QUAL É O NOME DESSE LUGAR?",
      opcoes: ["CASA", "CIRCO", "CAMPO", "CINEMA"],
    },


    {
      id: 12,
      nome: "Cinema",
      pergunta: "QUAL É O NOME DESSE LUGAR?",
      opcoes: ["CINEMA", "CAFETERIA", "CLUBE", "CATEDRAL"],
    },

    {
      id: 13,
      nome: "Concha",
      pergunta: "QUAL É O NOME DESSE OBJETO?",
      opcoes: ["CONCHA", "CORAL", "CARDUME", "CAMARÃO"],
    },

    {
      id: 14,
      nome: "Escola",
      pergunta: "QUAL É O NOME DESSE LUGAR?",
      opcoes: ["ESCOLA", "ESTÚDIO", "ESTÁDIO", "ESCRITÓRIO"],
    },

    {
      id: 15,
      nome: "Fazendeira",
      pergunta: "QUAL É O NOME DESSA PROFISSÃO?",
      opcoes: ["FAZENDEIRA", "FISCAL", "FOTÓGRAFO", "FERREIRO"],
    },
    
     {
      id: 16,
      nome: "Garça",
      pergunta: "QUAL É O NOME DESSE ANIMAL?",
      opcoes: ["GARÇA", "GATO", "GABRIEL", "GABI"],
     },

     {
      id: 17,
      nome: "Médica",
      pergunta: "QUAL É O NOME DESSA PROFISSÃO? ",
      opcoes: ["MÉDICA", "MATEMÁTICO", "MÚSICO", "MOTORISTA"],
     },

     {
      id: 18,
       nome: "Onça",
       pergunta: "QUAL É O NOME DESSE ANIMAL?",
       opcoes: ["ONÇA", "ORCA", "OURIÇO", "ONTEM"],
     },

     {
      id: 19,
      nome: "Parquinho",
      pergunta: "QUAL É O NOME DESSE LUGAR?",
      opcoes: ["PARQUINHO", "PRAÇA", "PRAIA", "POUSADA"],
    },

    {
      id: 20,
      nome: "Policial",
      pergunta: "QUAL É O NOME DESSA PROFISSÃO?",
      opcoes: ["POLICIAL", "PILOTO", "PORTEIRO", "PROGRAMADOR"],
    },

    
    {
      id: 21,
      nome: "Polvo",
      pergunta: "QUAL É O NOME DESSE ANIMAL?",
      opcoes: ["POLVO", "PEIXE", "PINGUIM", "PIRANHA"],
    },

    {
      id: 22,
      nome: "Restaurante",
      pergunta: "QUAL É O NOME DESSE LUGAR?",
      opcoes: ["RESTAURANTE", "RODOVIÁRIA", "RUA", "RESIDÊNCIA"],
    },

    {
      id: 23,
      nome: "Tucano",
      pergunta: "QUAL É O NOME DESSE ANIMAL?",
      opcoes: ["TUCANO", "TAMANDUÁ", "TATUAGEM", "TRATOR"],
    },


    {
      id: 24,
      nome: "Tatu",
      pergunta: "QUAL É O NOME DESSE ANIMAL?",
      opcoes: ["TATU", "TUCANO", "TARTARUGA", "TIGRE"],
    },

    {
      id: 25,
      nome: "Tamanduá",
      pergunta: "QUAL É O NOME DESSE ANIMAL?",
      opcoes: ["TAMANDUÁ", "TARTARUGA", "TATU", "TUCANO"],
    },

    {
      id: 26,
      nome: "Tartaruga",
      pergunta: "QUAL É O NOME DESSE ANIMAL?",
      opcoes: ["TARTARUGA", "TUBARÃO", "TATU", "TUCANO"],
    },

  ];

  const imagensAnimais = {
    Alga: "./img/alga.svg",
    Arara: "./img/arara.svg",
    Ariranha: "./img/ariranha.svg",
    Baleia: "./img/baleia.svg",
    Biblioteca: "./img/biblioteca.svg",
    Bombeiro: "./img/bombeiro.svg",
    Camaleão: "./img/camaleão.svg",
    Cervo: "./img/cervo.svg",
    Capivara: "./img/Capivara.svg",
    Casa: "./img/casa.svg",
    Cinema: "./img/cinema.svg",
    Concha: "./img/concha.svg",
    Escola: "./img/escola.svg",
    Fazendeira: "./img/fazendeira.svg",
    Garça: "./img/garça.svg",
    Médica: "./img/médica.svg",
    Onça: "./img/onça.svg",
    Parquinho: "./img/parquinho.svg",
    Policial: "./img/policial.svg",
    Polvo: "./img/polvo.svg",
    Restaurante: "./img/restaurante.svg",
    Tucano: "./img/tucano.svg",
    Tatu: "./img/tatu.svg",
    Tamanduá: "./img/tamanduá.svg",
    Tartaruga: "./img/tartaruga.svg",
  };
  
  const todasPerguntas = [...animais];
  shuffleArray(todasPerguntas);

  let perguntaAtual = 0;
  let respostasCorretas = 0;

  exibirPergunta();

  function exibirPergunta() {
    const animalAtual = todasPerguntas[perguntaAtual];
    const opcoesEmbaralhadas = [...animalAtual.opcoes];
    shuffleArray(opcoesEmbaralhadas);

    document.querySelector(".imagem img").src = imagensAnimais[animalAtual.nome];
    document.querySelector(".quiz h1").innerHTML = `<span>${perguntaAtual + 1}/10</span> ${animalAtual.pergunta}`;

    const opcoes = document.querySelectorAll(".quiz p");
    opcoes.forEach((opcao, index) => {
      opcao.innerHTML = `<span>${String.fromCharCode(65 + index)}</span> ${opcoesEmbaralhadas[index]}`;
      opcao.classList.remove("correta", "resposta-certa", "resposta-errada", "selecionada", "bloqueada");
      if (opcoesEmbaralhadas[index] === animalAtual.opcoes[0]) {
        opcao.classList.add("correta");
      }
    });

    opcoes.forEach((opcao) => {
      opcao.addEventListener("click", verificarResposta);
    });
  }

  function verificarResposta() {
    const respostaCorreta = this.classList.contains("correta");

    if (respostaCorreta) {
      this.classList.add("resposta-certa");
      respostasCorretas++;
      const matchSound = document.getElementById('matchSound');
      matchSound.play();

    } else {
      this.classList.add("resposta-errada");
      const matchSound = document.getElementById('matchSound2');
      matchSound.play();
    }

    perguntaAtual++;

    if (perguntaAtual < 10) {
      setTimeout(() => {
        exibirPergunta();
      }, 1000);
    } else {
      acertosSpan.textContent = `${respostasCorretas}/10`;
      modal.style.display = "block";
    }
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  voltarParaInicio.addEventListener("click", () => {
    confirmationModal.style.display = "flex";
  });

  confirmYes.addEventListener("click", () => {
    window.location.href = "../inicio.html";
  });

  confirmNo.addEventListener("click", () => {
    confirmationModal.style.display = "none";
  });
});