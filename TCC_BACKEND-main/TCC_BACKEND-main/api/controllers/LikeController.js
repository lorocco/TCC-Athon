const database = require('../models')

class LikeController {
    static async pegaLikes(req, res){
        try{
            const Likes = await database.Like.findAll()
            return res.status(200).json(Likes)
            
        }
        catch(error){
            return res.status(500).json(error.message)
        }
        }
    static async cadastraLikes(req, res){
        let likes = req.body
        try{
            const novoLikeCriado = await database.Like.create(likes)
            return res.status(200).json(novoLikeCriado)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }
    static async buscaPorUsuario(req, res){  ///usuario que deu o like, vamos mostrar todas as curtidas da pessoa
        const {id} = req.params
        try{
            const likes = await database.Like.findAll( {where: {
                pessoaLike : id},
                include: [
                  {
                    model:  database.Post,
                    required: true,
                    include: [{
                        model: database.Pessoa,
                        required: true,
                        include: [database.Esportes, database.Funcao]
                  
                    }]
                        
                  
                  }
                ]
            })
            return res.status(200).json(likes)
            
        }
        catch(error){
            return res.status(500)//.json(error.message)
        }
        
    }
    
    
    static async removeLike(req,res){
        const {pessoaLike, postLike} = req.params
        try{
            await database.Like.destroy({where:{pessoaLike : pessoaLike,
                postLike : postLike}})
            return res.status(200).json({message: `Like removido com sucesso`})
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    //select like onde post = 1 e pessoa = 2 
    static async buscaUmLike(req, res){  
        const {pessoaLike, postLike} = req.params
        try{
            const likes = await database.Like.findOne( {where: {
                pessoaLike : pessoaLike,
                postLike : postLike}})
            return res.status(200).json(likes)
            
        }
        catch(error){
            return res.status(500)//.json(error.message)
        }
        
    }



}

module.exports = LikeController