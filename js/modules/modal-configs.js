export default function toggleModalConfigs() {
  const btnToggleConfigs = document.querySelectorAll('.toggle-configs');
  const containerModalConfigs = document.querySelector('#container-modal-configs');

  btnToggleConfigs.forEach(element => {
    element.addEventListener('click', ()=>{
      containerModalConfigs.classList.toggle('ativo');
    });
  });

  containerModalConfigs.addEventListener('click', event => {
    if (!event.target.matches('#container-modal-configs *')) {
      containerModalConfigs.classList.remove('ativo');
    }
  });
}