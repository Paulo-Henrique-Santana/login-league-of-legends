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
const modalVersao = document.querySelector('#container-modal-versao');

btnToggleVersao.forEach(element => {
  element.addEventListener('click', ()=>{
    ativarOuDesativarElemento(modalVersao);
  });
});

// Menu Usuário

const btnUsuario = document.querySelector('#botao-usuario');
const menuUsuario = document.querySelector('#menu-usuario');

btnUsuario.addEventListener('click', ()=>{
  ativarOuDesativarElemento(menuUsuario);
});

// Modal Configurações

const btnToggleConfigs = document.querySelectorAll('.toggle-configs');
const modalConfigs = document.querySelector('#container-modal-configs');

btnToggleConfigs.forEach(element => {
  element.addEventListener('click', ()=>{
    ativarOuDesativarElemento(modalConfigs);
    alternarOpcoes();
  });
});

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

