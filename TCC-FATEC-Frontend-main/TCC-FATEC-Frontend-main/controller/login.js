import { user_service } from '../sevice/user_sevice.js'

const formulario = document.querySelector('[data-form]')


formulario.addEventListener('submit', async (evento) => {
  evento.preventDefault()
  try {
    const email = evento.target.querySelector('[data-email]').value
    const senha = evento.target.querySelector('[data-senha]').value
    const resp = await user_service.login(email, senha)
    const id = resp.Pessoa.id
    criaCookie(resp)
    window.location.href = `../view/index.html`  /// direciona para o feed ?id=${id}
  }
  catch (erro) {
    console.log(erro)
    alert('Login ou senha incorretos!!! Tente novamente.')
    //window.location.href = "../view/erro.html"
  }
})



const criaCookie = (resp) => {
  const token = resp.token
  const id = resp.Pessoa.id
  document.cookie = `session=${token}`
  document.cookie = `user=${id}`
  
  console.log(token)
}