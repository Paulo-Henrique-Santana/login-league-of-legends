const btnAbrir = document.querySelector('footer')
const containerModal = document.querySelector('#container-modal')
const btnFechar = document.querySelector('#btn-fechar')
const btnOk = document.querySelector('#btn-ok')

btnAbrir.addEventListener('click', ()=>{
  containerModal.classList.add('ativo')
})

btnFechar.addEventListener('click', ()=>{
  containerModal.classList.remove('ativo')
})

btnOk.addEventListener('click', ()=>{
  containerModal.classList.remove('ativo')
})