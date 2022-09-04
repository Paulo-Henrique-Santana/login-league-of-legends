function ativarOuDesativarElemento(elemento) {
  elemento.classList.toggle('ativo');
}

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

