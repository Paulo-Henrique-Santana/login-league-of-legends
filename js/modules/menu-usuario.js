export default function toggleMenuUsuario() {  
  const btnUsuario = document.querySelector('#botao-usuario');
  const menuUsuario = document.querySelector('#menu-usuario');

  btnUsuario.addEventListener('click', () => {
    menuUsuario.classList.toggle('ativo');
  });

  document.addEventListener('click', event => {
    const elementoClicado = event.target.outerHTML;
    if (!menuUsuario.outerHTML.includes(elementoClicado) && !btnUsuario.outerHTML.includes(elementoClicado)) {
      menuUsuario.classList.remove('ativo');
    }
  });
}