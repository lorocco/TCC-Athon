
const preenche = (nome, imagem)=>{
    const nomeField = document.querySelector('h2');
    const imagemField = document.querySelector('.profile-image')
    const funcaoField = document.querySelector('.description')
    
    nomeField.innerText = nome
    
    imagemField.src = imagem
    //funcaoField.value = funcao
    console.log(nome, imagemField)
}

const  criaNovaLinha =  (nome, funcao, esporte, id, texto, imagem) =>  { 
    const linhaNovoPost = document.createElement('div')
    const conteudo  = `
          <div class="post">
              <div class="post-header">
                  <div class="profile-info">
                  <img src="${imagem}" alt="Foto de Perfil" class="profile-image post-profile-image">
                  <div class="name-info">
                      <h3>${nome}</h3>
                      <p class="small">${funcao}</p>
                      <p class="small">${esporte}</p>
                  </div>
                  </div>
                  <img src="estrela-black.png" alt="Ícone de Estrela" id=${id} class="star-icon" >
              </div> 
              <div class="contacts">
              <p>${texto}</p>
              </div>
          </div>
      `
      
         
     linhaNovoPost.innerHTML = conteudo
    return linhaNovoPost
  }


export const preencheTelas = { 
    preenche,
    criaNovaLinha
}