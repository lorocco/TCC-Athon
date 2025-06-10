
import { user_service } from '../sevice/user_sevice.js'
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


const criaCookie = (resp) => {
    const token = resp.token
    const id = resp.Pessoa.id
    document.cookie = `session=${token}`
    document.cookie = `user=${id}`
    
    console.log(token)
  }


  
export const cookies = { 
    criaCookie,
    pegaId,
    getCookie
}