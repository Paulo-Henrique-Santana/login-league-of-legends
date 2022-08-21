const btnAbrirModalVersao = document.querySelectorAll('.versao-client');
const containerModalVersao = document.querySelector('#container-modal-versao');
const btnFecharModalVersao = document.querySelector('#versao-btn-fechar');
const btnOk = document.querySelector('#btn-ok');

const btnUsuario = document.querySelector('#botao-usuario');
const menuUsuario = document.querySelector('#menu-usuario');
const btnConfigsMenuUsuario = document.querySelector('#botao-configs')

const containerModalConfigs = document.querySelector('#container-modal-configs');
const btnFecharModalConfigs = document.querySelector('#configs-btn-fechar');

function abrirOuFecharElemento(elemento) {
  elemento.classList.toggle('ativo');
}

btnAbrirModalVersao.forEach(element => {
  element.addEventListener('click', ()=>{
    abrirOuFecharElemento(containerModalVersao);
  })
});

btnFecharModalVersao.addEventListener('click', ()=>{
  abrirOuFecharElemento(containerModalVersao);
})
btnOk.addEventListener('click', ()=>{
  abrirOuFecharElemento(containerModalVersao);
})
btnUsuario.addEventListener('click', ()=>{
  abrirOuFecharElemento(menuUsuario);
})
btnConfigsMenuUsuario.addEventListener('click', ()=>{
  abrirOuFecharElemento(containerModalConfigs);
  abrirOuFecharElemento(menuUsuario);
})
btnFecharModalConfigs.addEventListener('click', ()=>{
  abrirOuFecharElemento(containerModalConfigs);
})