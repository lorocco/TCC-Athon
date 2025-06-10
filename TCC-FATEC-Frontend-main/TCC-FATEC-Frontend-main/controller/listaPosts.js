
import { user_service } from '../sevice/user_sevice.js'
import { cookies } from '../helpers/cookies.js'
import { preencheTelas } from '../helpers/preencheTelas.js'
import { likes } from '../helpers/likes.js'



const divCentral = document.querySelector("#middle-column")

const formulario = document.querySelector('[data-form]')

const pesquisa = async (pesquisa) => {
    const token = cookies.getCookie("session")
    const idUsuarioPagina = await cookies.pegaId(token)

    try{
        const listaPosts = await user_service.pesquisa(pesquisa)
        listaPosts.forEach(elemento => {
            console.log(elemento.id)
            divCentral.appendChild(preencheTelas.criaNovaLinha(elemento.Pessoa.nomePessoa, elemento.Pessoa.Funcao.nomeFuncao, 
                elemento.Pessoa.Esporte.nomeEporte, elemento.id, elemento.texto, elemento.Pessoa.imagem ))
    })
    likes.criaLikes(idUsuarioPagina)
}
    catch(erro){
        console.log(erro)
    }
}

formulario.addEventListener('submit', async (evento) => {
  evento.preventDefault()
  var lista = document.getElementsByClassName("post");
    for(var i = lista.length - 1; i >= 0; i--)
    {
        lista[i].remove()
    }
    const termo = evento.target.querySelector('[data-pesquisa]').value
   pesquisa(termo)
})




const render = async () =>  {
    var lista = document.getElementsByClassName("post");
    for(var i = lista.length - 1; i >= 0; i--)
    {
        lista[i].remove()
    }
    
    const token = cookies.getCookie("session")
    const idUsuarioPagina = await cookies.pegaId(token)

    try {
        const pessoa = await user_service.pessoaId(token, idUsuarioPagina)
        preencheTelas.preenche(pessoa.nomePessoa, pessoa.imagem)
        const listaPosts = await user_service.posts(token)
        listaPosts.forEach(elemento => {
            divCentral.appendChild(preencheTelas.criaNovaLinha(elemento.Pessoa.nomePessoa, 
                elemento.Pessoa.Funcao.nomeFuncao, elemento.Pessoa.Esporte.nomeEporte, 
                elemento.id, elemento.texto, elemento.Pessoa.imagem))
    })

   
    likes.criaLikes(idUsuarioPagina)

    }
    catch(erro){
        console.log(erro)
        window.location.href = "../view/erro.html"
    }
    
}



render()

export const lista = { 
    render, 
}