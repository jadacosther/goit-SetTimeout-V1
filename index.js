let interval = null;

function activarReloj(){

  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if(minutes < 10){
    minutes = '0' + minutes
  }

  if(seconds < 10){
    seconds = '0' + seconds
  }

  document.getElementById('reloj').value = `${hour}:${minutes}:${seconds}`
}




let btnActivar = document.getElementById('activar');
let btnDesactivar = document.getElementById('desactivar');

btnActivar.addEventListener('click',()=>{ interval = setInterval(activarReloj, 1000)});

btnDesactivar.addEventListener('click', 
function desactivarReloj(){
  clearInterval(interval)
});