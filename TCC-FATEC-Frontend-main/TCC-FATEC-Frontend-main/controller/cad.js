import { user_service } from '../sevice/user_sevice.js'

const formulario = document.querySelector('[data-form]')


formulario.addEventListener('submit', async (evento) => {
  evento.preventDefault()
  try {
    const email = evento.target.querySelector('[data-email]').value
    const senha = evento.target.querySelector('[data-senha]').value
    const nome = evento.target.querySelector('[data-nome]').value
    const esporte = evento.target.querySelector('[data-esporte]').value
    const genero = evento.target.querySelector('[data-genero]').value
    const funcao = evento.target.querySelector('[data-funcao]').value
    const data = evento.target.querySelector('[data-nascimento]').value
    await user_service.cadastra(email, senha,data, nome, esporte,funcao, genero)
    window.location.href = `../view/login.html`  /// direciona para o login
  }
  catch (erro) {
    console.log(erro)
    //window.location.href = "../view/erro.html"
  }
})