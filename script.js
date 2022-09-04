function abrirOuFecharElemento(elemento) {
  elemento.classList.toggle('ativo');
}

// Modal Versão

const btnToggleVersao = document.querySelectorAll('.toggle-versao');
const modalVersao = document.querySelector('#container-modal-versao');

btnToggleVersao.forEach(element => {
  element.addEventListener('click', ()=>{
    abrirOuFecharElemento(modalVersao);
  });
});

// Menu Usuário

const btnUsuario = document.querySelector('#botao-usuario');
const menuUsuario = document.querySelector('#menu-usuario');

btnUsuario.addEventListener('click', ()=>{
  abrirOuFecharElemento(menuUsuario);
});

// Modal Configurações

const btnToggleConfigs = document.querySelectorAll('.toggle-configs');
const modalConfigs = document.querySelector('#container-modal-configs');

btnToggleConfigs.forEach(element => {
  element.addEventListener('click', ()=>{
    abrirOuFecharElemento(modalConfigs);
    abrirOuFecharOpcoes();
  });
});

// Opções Configurações

const btnOpcaoClient = document.querySelector('#botao-opcao-client');
const btnOpcaoLol = document.querySelector('#botao-opcao-lol');

const opcoesClient = document.querySelector('#configs-opcoes-client');
const opcoesLol = document.querySelector('#configs-opcoes-lol');

function abrirOuFecharOpcoes() {
  if (btnOpcaoClient.checked) {
    opcoesClient.classList.add('ativo');
    opcoesLol.classList.remove('ativo');
  } else {
    opcoesLol.classList.add('ativo');
    opcoesClient.classList.remove('ativo');
  }
}

btnOpcaoClient.addEventListener('click', abrirOuFecharOpcoes);
btnOpcaoLol.addEventListener('click', abrirOuFecharOpcoes);
