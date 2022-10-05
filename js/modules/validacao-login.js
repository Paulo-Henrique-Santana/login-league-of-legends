export default function validarLogin(){
  const usuario = document.querySelector('#campo-usuario');
  const senha = document.querySelector('#campo-senha');
  const botaoLogin = document.querySelector('#botao-login');
  const imgbotaoLogin = document.querySelector('#botao-login img');

  function verificarCampos() {
    if (usuario.value.length >= 2 && senha.value !== '') {
      imgbotaoLogin.src = './img/seta-branca.png';
      botaoLogin.classList.add('ativo');
    } else {
      imgbotaoLogin.src = './img/seta.png';
      botaoLogin.classList.remove('ativo');
    }
  }

  function erroCampoUsuario() {
    if (usuario.value.length === 1) {
      usuario.classList.add('erro');
    } else {
      usuario.classList.remove('erro');
    }
  }

  usuario.addEventListener('keyup', verificarCampos);
  usuario.addEventListener('focusout', erroCampoUsuario);
  senha.addEventListener('keyup', verificarCampos);
}