const spanPlayer = document.querySelector('.player');
console.log('TempoCidade');
window.onload = () => {
  const TempoFloresta = parseInt(localStorage.getItem('TimeFloresta'));
  const TempoMar = parseInt(localStorage.getItem('TimeMar'));
  const TempoCidade = parseInt(localStorage.getItem('TimeCidade'));
  

  const tempoJogo = (TempoCidade + TempoFloresta + TempoMar) / 3;


  const tempoJogoFinal = parseInt(Math.trunc(tempoJogo));
 
    
  const minutes = Math.floor(tempoJogoFinal/ 60);
  console.log(minutes + 'minuto')
  const seconds = tempoJogoFinal % 60;
  console.log(seconds + 'segundos')



  spanPlayer.innerHTML = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds} ${minutes < 10 ? 'Segundos' : 'Minutos'}`;

}
