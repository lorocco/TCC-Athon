const database = require('../models')
const {Op} = require('sequelize')

class PostController {
    static async pegaPosts(req, res){
        try{
            const Posts = await database.Post.findAll({include: [{
                model:  database.Pessoa,
                required: true,
                include: [database.Esportes, database.Funcao]
              }
            ]})
            return res.status(200).json(Posts)
            
        }
        catch(error){
            return res.status(500).json(error.message)
        }
        }
    static async cadastraPosts(req, res){
        let posts = req.body
        try{
            const novapostsCriada = await database.Post.create(posts)
            return res.status(200).json(novapostsCriada)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }
    static async buscaPorId(req, res){
        const idPost = req.body.idPost
        try{
            const posts = await database.Post.findOne( {where: {
                idPost : idPost}})
            return res.status(200).json(posts)
            
        }
        catch(error){
            return res.status(500)//.json(error.message)
        }
        
    }

    static async buscaPorAssunto(req, res){
        const pesquisa = req.body.texto
        try{
            const posts = await database.Post.findAll({
                where: { texto: { [Op.like]: `%${pesquisa}%` } },
                limit: 10,
                include: [{
                    model:  database.Pessoa,
                    required: true,
                    include: [database.Esportes, database.Funcao]
                  }
                ]
        });
            return res.status(200).json(posts)
        }
        catch(error){
            return res.status(500).json(error.message)
        }
        
    }
    
    static async buscaPorId(req, res){
        const {id} = req.params
        try{
            const posts = await database.Post.findOne( {where: {
                id : id}})
            return res.status(200).json(posts)
            
        }
        catch(error){
            return res.status(500)//.json(error.message)
        }
        
    }
    static async postPessoa(req, res){
        const {id} = req.params
        try{
            const posts = await database.Post.findAll( {where: {
                pessoaPost : id},
                include: [{
                    model:  database.Pessoa,
                    required: true,
                    include: [database.Esportes, database.Funcao]
                  }
                ]
            })
            return res.status(200).json(posts)
            
        }
        catch(error){
            return res.status(500)//.json(error.message)
        }
        
    }
       static async alterarposts(req,res){
        const {id} = req.params
        const Novasinfos = req.body
        try{
            await database.Post.update(Novasinfos, {where: {idPost: Number(id)}})
            const postsAtualizado = await database.Post.findOne({where:{ 
                idPost:Number(id)}})
                return res.status(200).json(postsAtualizado)
        }catch(error){
            return res.status(500).json(error.message)
        }

    }
    static async removePost(req,res){
        const {id} = req.params
        try{
            await database.Post.destroy({where: {id: Number(id)}})
            return res.status(200).json({message: `Post removido com sucesso`})
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = PostController