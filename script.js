function ativarOuDesativarElemento(elemento) {
  elemento.classList.toggle('ativo');
}

// Login - Ativar botão do login

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

// Modal Versão

const btnToggleVersao = document.querySelectorAll('.toggle-versao');
const containerModalVersao = document.querySelector('#container-modal-versao');
const modalVersao = document.querySelector('#modal-versao');

btnToggleVersao.forEach(element => {
  element.addEventListener('click', ()=>{
    ativarOuDesativarElemento(containerModalVersao);
  });
});

containerModalVersao.addEventListener('click', (event) => {
  if (!event.target.matches('#container-modal-versao *')){
    containerModalVersao.classList.remove('ativo');
  }
});

// Menu Usuário

const btnUsuario = document.querySelector('#botao-usuario');
const menuUsuario = document.querySelector('#menu-usuario');
const btnConfigs = document.querySelector('#botao-configs');

btnUsuario.addEventListener('click', (event)=>{
  ativarOuDesativarElemento(menuUsuario);
});

document.addEventListener('click', event => {
  const elementoClicado = event.target.outerHTML;
  if (!menuUsuario.outerHTML.includes(elementoClicado) && !btnUsuario.outerHTML.includes(elementoClicado)) {
    menuUsuario.classList.remove('ativo');
  }
});

// Modal Configurações

const btnToggleConfigs = document.querySelectorAll('.toggle-configs');
const containerModalConfigs = document.querySelector('#container-modal-configs');

btnToggleConfigs.forEach(element => {
  element.addEventListener('click', ()=>{
    ativarOuDesativarElemento(containerModalConfigs);
    alternarOpcoes();
  });
});

containerModalConfigs.addEventListener('click', event => {
  if (!event.target.matches('#container-modal-configs *')) {
    containerModalConfigs.classList.remove('ativo');
  }
})

// Opções Configurações

const btnOpcaoClient = document.querySelector('#botao-opcao-client');
const btnOpcaoLol = document.querySelector('#botao-opcao-lol');

const opcoesClient = document.querySelector('#configs-opcoes-client');
const opcoesLol = document.querySelector('#configs-opcoes-lol');

function alternarOpcoes() {
  if (btnOpcaoClient.checked) {
    opcoesClient.classList.add('ativo');
    opcoesLol.classList.remove('ativo');
  } else {
    opcoesLol.classList.add('ativo');
    opcoesClient.classList.remove('ativo');
  }
}

btnOpcaoClient.addEventListener('click', alternarOpcoes);
btnOpcaoLol.addEventListener('click', alternarOpcoes);

