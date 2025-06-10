const database = require('../models')



class EsporteController {
    static async pegaEsportes(req, res){
        try{
            const todosEsportes = await database.Esportes.findAll()
            return res.status(200).json(todosEsportes)
        }
        catch(error){
            return res.status(500).json(error.message)
        }
        }

}

module.exports = EsporteController