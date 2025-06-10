const linkIp = 'http://18.117.141.141:3333'

const login = (email, senha) => { 
    return fetch(`${linkIp}/login`, {
        method: 'POST', 
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            emailPessoa: email,
            senhaPessoa: senha
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível fazer login')
    })
}

const teste = () =>{
    return fetch(`${linkIp}/likes`)
    .then( resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível')
    })
}

const cadastra = (email, senha,data, nome, esporte,funcao, genero) => {
    return fetch(`${linkIp}/pessoas`, {
        method: 'POST', 
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            emailPessoa: email,
            senhaPessoa: senha,
            dataNascPessoa: data,
            nomePessoa: nome,
            esportePessoa: esporte,
            funcaoPessoa: funcao,
            generoPessoa: genero,
            imagem: 'http://18.117.141.141:3333/avatarNull.png' 

        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível cadastrar')
    })
}

const posts = (token) =>{
    return fetch(`${linkIp}/posts`, {
        method: 'GET', 
        headers: {
            'Content-Type' : 'application/json',
            'authorization': `Bearer ${token}` 
        }})
    .then( resposta => {
        
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível')
    })
}

const postPessoa = (token, id) =>{
    return fetch(`${linkIp}/posts/pessoa/${id}`, {
        method: 'GET', 
        headers: {
            'Content-Type' : 'application/json',
            'authorization': `Bearer ${token}` 
        }})
    .then( resposta => {
        
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível')
    })
}

const pesquisa = (pesquisa, token) =>{
    return fetch(`${linkIp}/pesquisa`, {
        method: 'POST', 
        headers: {
            'Content-Type' : 'application/json',
            'authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            texto: pesquisa,

        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível')
    })
}

const welcome = (token) =>{
    return fetch(`${linkIp}/token`, {
        method: 'POST', 
        headers: {
            'Content-Type' : 'application/json',
            'authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            token: token,

        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível')
    })
}

const cadPost = (id, texto, token) =>{
    return fetch(`${linkIp}/posts`, {
        method: 'POST', 
        headers: {
            'Content-Type' : 'application/json',
            'authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            texto: texto,
            pessoaPost: id

        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível')
    })


}

const pessoaId = (token, id) =>{
    return fetch(`${linkIp}/pessoas/${id}`, {
        method: 'GET', 
        headers: {
            'Content-Type' : 'application/json',
            'authorization': `Bearer ${token}` 
        }})
    .then( resposta => {
        
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível')
    })
}

const editaPessoa = (token, id, email, senha,data, nome, esporte, imagem) =>{
    return fetch(`${linkIp}/pessoas/${id}`, {
        method: 'PUT', 
        headers: {
            'Content-Type' : 'application/json',
            'authorization': `Bearer ${token}` 
        },
        body: JSON.stringify({
            emailPessoa: email,
            senhaPessoa: senha,
            dataNascPessoa: data,
            nomePessoa: nome,
            esportePessoa: esporte,
            imagem: imagem

        })
    
    })
    .then( resposta => {
        
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível')
    })
}

const pegaLike = (pessoa, post) =>{
    return fetch(`${linkIp}/Likes/${pessoa}/${post}`, {
        method: 'GET', 
        headers: {
            'Content-Type' : 'application/json'
            // 'authorization': `Bearer ${token}` passar como parametro 
        }})
    .then( resposta => {
        
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível')
    })
}

const daLike = (pessoa, post) => {
    return fetch(`${linkIp}/likes`, {
        method: 'POST', 
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
            pessoaLike: pessoa,
            postLike: post

        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível')
    })


}

const disLike = (pessoa, post) => {
    return fetch(`${linkIp}/likes/${pessoa}/${post}`, {
        method: 'DELETE', 
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
            pessoaLike: pessoa,
            postLike: post

        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível')
    })


}

const likesPessoa = (token, id) =>{
    return fetch(`${linkIp}/likes/${id}`, {
        method: 'GET', 
        headers: {
            'Content-Type' : 'application/json',
            'authorization': `Bearer ${token}` 
        }})
    .then( resposta => {
        
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível')
    })
}

export const user_service = { 
    login,
    teste,
    cadastra,
    posts,
    pesquisa,
    welcome,
    cadPost,
    pessoaId,
    editaPessoa,
    pegaLike,
    daLike,
    disLike,
    likesPessoa,
    postPessoa
}