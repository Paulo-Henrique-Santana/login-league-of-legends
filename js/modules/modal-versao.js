export default function toggleModalVersao() {
  const btnToggleVersao = document.querySelectorAll('.toggle-versao');
  const containerModalVersao = document.querySelector('#container-modal-versao');
  
  btnToggleVersao.forEach(element => {
    element.addEventListener('click', ()=>{
      containerModalVersao.classList.toggle('ativo');
    });
  });

  containerModalVersao.addEventListener('click', (event) => {
    if (!event.target.matches('#container-modal-versao *')){
      containerModalVersao.classList.remove('ativo');
    }
  });
}