import { user_service } from '../sevice/user_sevice.js'

const email = document.querySelector('[data-email]')
const senha = document.querySelector('[data-senha]')
const data = document.querySelector('[data-nascimento]')
const nome = document.querySelector('[data-nome]')
const esporte = document.querySelector('[data-esporte]')
const img = document.querySelector('#profile-picture')
const titulo = document.querySelector('h2')

const render = async () =>  {
    const token = getCookie("session")
    const id = await pegaId(token)
    
    try {
        const pessoa = await user_service.pessoaId(token, id)
        console.log(pessoa)
        titulo.innerText = pessoa.nomePessoa
        data.value = pessoa.dataNascPessoa
        esporte.value = pessoa.esportePessoa
        nome.value = pessoa.nomePessoa 
        email.value = pessoa.emailPessoa
        senha.value = pessoa.senhaPessoa
        img.src = pessoa.imagem
        
    }
    
    catch(erro){
        console.log(erro)
        window.location.href = "../view/erro.html"
    }
    
}


const form = document.querySelector('[data-form]')


form.addEventListener('submit', async (evento) => {
    evento.preventDefault()
    try{
        const token = await getCookie("session")
        const id = await pegaId(token)
        console.log(data.value)
        await user_service.editaPessoa(token, id, email.value, senha.value, data.value, nome.value, esporte.value, img.src)
        render()
        
    }

    catch(erro){
        console.log(erro)
    }
 

})



function getCookie(name) {

    let cookie = {};
    
    document.cookie.split(';').forEach(function(el) {
      let [k,v] = el.split('=');
      cookie[k.trim()] = v;
    })
    
    return cookie[name];
    
  }

const pegaId = async (token) => {
    
    try{
        const id = await user_service.welcome(token)
        return id
}
    catch(erro){
        console.log(erro)
    }
}  

render()
