// Carregue o startTime do localStorage, se existir, ou use 0 como valor padrão
const storedStartTime = localStorage.getItem('startTime');

// Converta para um número, se necessário
const startTime = (storedStartTime);

// Agora você pode usar o startTime como quiser
console.log(startTime);

const teste = document.getElementById('teste');

const tempofinal = startTime + 10 + " teste";

teste.innerHTML = tempofinal;
