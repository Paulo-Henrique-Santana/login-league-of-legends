export default function toggleOpcoesConfigs() {
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
}