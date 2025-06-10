import { user_service } from '../sevice/user_sevice.js'

const  criaNovaLinha =  (nome, funcao, esporte, idPost, texto, imagem) =>  { 
  const linhaNovoPost = document.createElement('div')
  const conteudo  = `
            <div class="post">
            <div class="post-header">
                <!-- Informações do perfil e ícone de favorito aqui -->
                <div class="profile-info">
                    <img src="${imagem}" alt="Foto de Perfil" class="profile-image post-profile-image">
                    <div class="name-info">
                        <h3>${nome}</h3>
                        <p class="small">${funcao}</p>
                        <p class="small">${esporte}</p>
                    </div>
                </div>
                <img src="estrela.png" alt="Ícone de Estrela" id=${idPost} class="star-icon">
            </div>
            <p>${texto}</p>

            </div>
            </div>
    `
    
        
   linhaNovoPost.innerHTML = conteudo
  return linhaNovoPost
}

const preenche = (nome, imagem)=>{
    //função = document.querySelector('.description')
    // imagem = document.querySelector('.profile-image')
    // nome = document.querySelector('h2')
    const nomeField = document.querySelector('h2');
    const imagemField = document.querySelector('.profile-image')
    const funcaoField = document.querySelector('.description')

    nomeField.innerText = nome
    imagemField.src = imagem
    //funcaoField.value = funcao
    console.log(nome, imagemField)
}



const favoritos = document.querySelector("#favorites")

const render = async () =>  {
    const token = getCookie("session")
    const idUsuarioPagina = await pegaId(token)

   
    try {
        const pessoa = await user_service.pessoaId(token, idUsuarioPagina)
        preenche(pessoa.nomePessoa, pessoa.imagem)
        const listaLikes = await user_service.likesPessoa(token, idUsuarioPagina)
        listaLikes.forEach(elemento => {
            console.log(elemento.Post.Pessoa.imagem)
            favoritos.appendChild(criaNovaLinha(elemento.Post.Pessoa.nomePessoa, elemento.Post.Pessoa.Funcao.nomeFuncao, 
            elemento.Post.Pessoa.Esporte.nomeEporte, elemento.Post.id, elemento.Post.texto, elemento.Post.Pessoa.imagem))
    })
    var estrelas = document.querySelectorAll('.star-icon');
    estrelas.forEach(function(estrela) {
        testaLike(idUsuarioPagina, estrela.id, estrela)
        // estrela.addEventListener('load', function() {
        //     //testaLike(idUsuarioPagina, estrela.id, estrela)
        // });
    });
    estrelas.forEach(function(estrela) {
        estrela.addEventListener('click', function() {
            
            Like(idUsuarioPagina, estrela.id, estrela)
           
        });
    });

    }
    catch(erro){
        console.log(erro)
        window.location.href = "../view/erro.html"
    }
    
}
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

const testaLike = async (pessoa, post, img) =>{
    try{
        
        const like = await user_service.pegaLike(pessoa, post)
        if(like===null){
            img.setAttribute('src', 'estrela-black.png');
        }
        else{
            img.setAttribute('src', 'estrela-laranja.png');
        }
}
    catch(erro){
        console.log(erro)
    }

}

const Like = async (pessoa, post, img) =>{
    try{
        
        const like = await user_service.pegaLike(pessoa, post)
        if(like===null){
            console.log("Like")
            await user_service.daLike(pessoa, post)// aqui vai chamar o metodo que cria like
            img.setAttribute('src', 'estrela-laranja.png');
            
        }
        else{
            console.log("deslike")
            await user_service.disLike(pessoa, post)// aqui vai chamar o metodo que exclui like
            img.setAttribute('src', 'estrela-black.png');
            
        }
}
    catch(erro){
        console.log(erro)
    }

}


render()


  



// const like = document.querySelectorAll('.star-icon')
// console.log(like)
export const lista = { 
    render, 
}