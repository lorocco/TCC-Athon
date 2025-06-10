import { user_service } from '../sevice/user_sevice.js'

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

const like = async (pessoa, post, img) =>{
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

const criaLikes = (idUsuarioPagina) => {
    var estrelas = document.querySelectorAll('.star-icon');
    estrelas.forEach(function(estrela) {
        testaLike(idUsuarioPagina, estrela.id, estrela)
        });
    estrelas.forEach(function(estrela) {
        estrela.addEventListener('click', function() {
        like(idUsuarioPagina, estrela.id, estrela)
        });
    });
}

export const likes = { 
    like,
    testaLike,
    criaLikes
}