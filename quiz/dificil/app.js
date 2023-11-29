document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("myModal");
  const modalText = document.getElementById("modalText");
  const acertosSpan = document.querySelector(".acertos");

  const animais = [
    {
      nome: "Capivara",
      pergunta: "QUE ANIMAL É ESSE?",
      opcoes: ["CAPIVARA", "CACHORRO", "CAPIXABA", "CAPITUVAL"],
    },
    {
      nome: "Tucano",
      pergunta: "QUAL O NOME DESSE ANIMAL?",
      opcoes: ["TUCANO", "TAMANDUÁ", "TATUAGEM", "TRATOR"],
    },
    {
      nome: "Onça",
      pergunta: "QUAL O NOME DESSE ANIMAL?",
      opcoes: ["ONÇA", "ORCA", "OURIÇO", "ONTEM"],
    },

    {
      nome: "Garça",
      pergunta: "QUAL O NOME DESSE ANIMAL?",
      opcoes: ["GARÇA", "GATO", "GABRIEL", "GABI"],
    },
    {
      nome: "Cervo",
      pergunta: "QUAL O NOME DESSE ANIMAL?",
      opcoes: ["CERVO", "CORUJA", "COBRA", "CAMELO"],
    },
    {
      nome: "Tatu",
      pergunta: "QUAL O NOME DESSE ANIMAL?",
      opcoes: ["TATU", "TUCANO", "TARTARUGA", "TIGRE"],
    },
    {
      nome: "Arara",
      pergunta: "QUAL O NOME DESSE ANIMAL?",
      opcoes: ["ARARA", "ABELHA", "ANTA", "AVESTRUZ"],
    },
    {
      nome: "Camaleão",
      pergunta: "QUAL O NOME DESSE ANIMAL?",
      opcoes: ["CAMALEÃO", "GATO", "CAMELO", "CAVALO"],
    },
  ];

  const imagensAnimais = {
    Capivara: "../img/Capivara.svg",
    Tucano: "../img/tucano.svg",
    Onça: "../img/onça.svg",
    Garça: "../img/garça.svg",
    Cervo: "../img/cervo.svg",
    Tatu: "../img/tatu.svg",
    Arara: "../img/arara.svg",
    Camaleão: "../img/camaleão.svg",
    // Adicione mais caminhos de imagem conforme necessário
  };

  // Função para embaralhar array usando o algoritmo de Fisher-Yates (shuffle)
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Escolha um animal aleatório
  const animalAtual = animais[Math.floor(Math.random() * animais.length)];

  // Embaralhe as opções do animal atual (incluindo a resposta correta)
  const opcoesEmbaralhadas = [...animalAtual.opcoes];
  shuffleArray(opcoesEmbaralhadas);

  // Substitua as informações no HTML
  document.querySelector(".imagem img").src = imagensAnimais[animalAtual.nome];
  document.querySelector(
    ".quiz h1"
  ).innerHTML = `<span>1/8</span> ${animalAtual.pergunta}`;
  document.querySelectorAll(".quiz p").forEach((opcao, index) => {
    opcao.innerHTML = `<span>${String.fromCharCode(65 + index)}</span> ${
      opcoesEmbaralhadas[index]
    }`;
    opcao.classList.remove("correta", "resposta-certa", "resposta-errada");
    if (opcoesEmbaralhadas[index] === animalAtual.opcoes[0]) {
      opcao.classList.add("correta");
    }
  });

  const opcoes = document.querySelectorAll(".quiz p");
  let opcoesBloqueadas = false;
  let perguntaAtual = 0;
  let respostasCorretas = 0; // Contador de respostas corretas

  opcoes.forEach((opcao) => {
    opcao.addEventListener("click", function () {
      const respostaCorreta = this.classList.contains("correta");

      // Verifica se as opções estão bloqueadas
      if (!opcoesBloqueadas) {
        // Remove qualquer estilo anterior
        opcoes.forEach((op) =>
          op.classList.remove(
            "resposta-certa",
            "resposta-errada",
            "selecionada"
          )
        );

        if (respostaCorreta) {
          // Adiciona estilo à resposta certa
          this.classList.add("resposta-certa");
          const matchSound = document.getElementById('matchSound');
          matchSound.play();
        } else {
          // Adiciona estilo à resposta errada
          this.classList.add("resposta-errada");
        }

        // Adiciona classe para a opção selecionada
        this.classList.add("selecionada");

        // Bloqueia as opções
        bloquearOpcoes();

        // Aguarde 3 segundos antes de exibir a próxima pergunta (opcional)
        setTimeout(() => {
          // Desbloqueia as opções para a nova pergunta
          desbloquearOpcoes();
          // Avança para a próxima pergunta
          proximaPergunta();
        }, 1000);
      }
    });
  });

  function bloquearOpcoes() {
    opcoesBloqueadas = true;
    opcoes.forEach((opcao) => {
      if (!opcao.classList.contains("selecionada")) {
        opcao.classList.add("bloqueada");
      }
    });
  }

  function desbloquearOpcoes() {
    opcoesBloqueadas = false;
    opcoes.forEach((opcao) => {
      opcao.classList.remove("bloqueada");
    });
  }

  function proximaPergunta() {
    perguntaAtual++;

    if (perguntaAtual < animais.length) {
      const animalAtual = animais[perguntaAtual];
      const opcoesEmbaralhadas = [...animalAtual.opcoes];
      shuffleArray(opcoesEmbaralhadas);

      document.querySelector(".imagem img").src =
        imagensAnimais[animalAtual.nome];
      document.querySelector(".quiz h1").innerHTML = `<span>${
        perguntaAtual + 1
      }/8</span> ${animalAtual.pergunta}`;

      opcoes.forEach((opcao, index) => {
        opcao.innerHTML = `<span>${String.fromCharCode(65 + index)}</span> ${
          opcoesEmbaralhadas[index]
        }`;
        opcao.classList.remove(
          "correta",
          "resposta-certa",
          "resposta-errada",
          "selecionada",
          "bloqueada"
        );


        if (opcoesEmbaralhadas[index] === animalAtual.opcoes[0]) {
          opcao.classList.add("correta");


      
      
        }
      });
    } else {
      acertosSpan.textContent = `${respostasCorretas}/8`;
      modal.style.display = "block";
    }
  }
});




