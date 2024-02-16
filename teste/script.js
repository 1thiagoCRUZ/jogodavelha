let jogadorAtual = "img/x.png";

document.querySelectorAll('.mybutton').forEach(mybutton => {
  mybutton.addEventListener('click', () => {
    if (!mybutton.innerHTML) {
      mybutton.innerHTML = `<img src="${jogadorAtual}" alt="X" width='20px'>`;
      jogadorAtual = jogadorAtual === 'img/x.png' ? 'img/bolinha.png' : 'img/x.png';
    }
  });
});

function resetando() {
  document.querySelectorAll('.mybutton').forEach(mybutton => {
    mybutton.innerHTML = '';
  });
}
