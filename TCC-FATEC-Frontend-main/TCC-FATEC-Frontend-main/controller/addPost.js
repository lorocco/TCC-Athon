import { user_service } from '../sevice/user_sevice.js'
import {lista} from './listaPosts.js'
const novoPost = document.querySelector('[data-post]')


novoPost.addEventListener('submit', async (evento) => {
    evento.preventDefault()
    try{
        const token = await getCookie("session")
        const id = await pegaId(token)
        const texto = document.querySelector('[data-texto]').value
        console.log(id, token, texto)
        await user_service.cadPost(id, texto, token)
        lista.render()
        
    }

    catch(erro){
        console.log(erro)
    }
 

})



const getCookie = async(name) =>{

    let cookie = {};
    
    document.cookie.split(';').forEach(function(el) {
      let [k,v] = el.split('=');
      cookie[k.trim()] = v;
    })
    
    return await cookie[name];
    
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