
import { user_service } from '../sevice/user_sevice.js'
import { cookies } from '../helpers/cookies.js'
import { preencheTelas } from '../helpers/preencheTelas.js'
import { likes } from '../helpers/likes.js'



const divCentral = document.querySelector(".posts")


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
        const nameField = document.querySelector('.profile-name')
        const dateField = document.querySelector('.profile-date')
        const esporteField = document.querySelector('.profile-esporte')
        const emailField = document.querySelector('.profile-email')
        console.log(pessoa)
        nameField.innerText = pessoa.nomePessoa
        dateField.innerText = pessoa.dataNascPessoa
        esporteField.innerText = pessoa.Esporte.nomeEporte
        emailField.innerText = pessoa.emailPessoa

        const listaPosts = await user_service.postPessoa(token, idUsuarioPagina)
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