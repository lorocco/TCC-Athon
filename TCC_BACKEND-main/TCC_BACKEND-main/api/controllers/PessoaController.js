const database = require('../models')
//const sequelize = require('sequelize')

const jwt = require('jsonwebtoken')
const { promisify } = require('util');
//const Generos = require('../models/genero.js')
//const genero = require('../models/genero.js')

class PessoaController {
    static async pegaPessoas(req, res){
        try{
            //const todasPessoas = await sequelize.query("select pessoa.IdPessoa, pessoa.emailPessoa, pessoa.dataNascPessoa, funcao.nomeFuncao, genero.nome, esporte.nomeEsporte, pessoa.NomeUsuario  from pessoa inner join esporte  on pessoa.esportePessoa = esporte.IdEsporte inner join genero on pessoa.generoPessoa = genero.idGenero inner join funcao on pessoa.funcaoPessoa = funcao.idFuncao", {type: sequelize.QueryTypes.SELECT});
            const todasPessoas = await database.Pessoa.findAll({include: [{
                model:  database.Generos,
                required: true
              },
              {
                model:  database.Esportes,
                required: true
              },
              {
                model:  database.Funcao,
                required: true
              }
            ]})
            return res.status(200).json(todasPessoas)
            
        }
        catch(error){
            return res.status(500).json(error.message)
        }
        }
    static async cadastraPessoas(req, res){
        let pessoa = req.body
        try{
            const novaPessoaCriada = await database.Pessoa.create(pessoa)
            return res.status(200).json(novaPessoaCriada)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }
    static async buscaPorId(req, res){
        const {id} = req.params
        try{
            const Pessoa = await database.Pessoa.findOne({
                where: {id : id},
                include: [
                  {
                    model:  database.Esportes,
                    required: true
                  }
                ]}
                
                
                )
            return res.status(200).json(Pessoa)
            
        }
        catch(error){
            return res.status(500)//.json(error.message)
        }
        
    }

    static async login(req, res){
            const email = req.body.emailPessoa
            const senha = req.body.senhaPessoa
        try{    
            const Pessoa = await database.Pessoa.findOne( {where: {
                    emailPessoa : email}})
            
            if(!(Pessoa)){
                return res.status(400).json({
                    erro: true,
                    mensagem: "Erro: Usuário ou a senha incorreta! E-mail incorreto!"
                });
            }
            
            if(!(Pessoa.senhaPessoa == senha)){
                return res.status(400).json({
                    erro: true,
                    mensagem: "Erro: Usuário ou a senha incorreta! Senha incorreta!"
                });
            }
            var token = jwt.sign({id: Pessoa.id}, "D62ST92Y7A6V7K5C6W9ZU6W8KS3", {
                //expiresIn: 600 //10 min
                expiresIn: 36000 //1 min
                //expiresIn: 3600
            });
           // res.set('Autorization', 'Bearer', token)
        //    res.cookie('token', 'Bearer '+token,{
        //         signed: true,
        //         maxAge:60000*60*8,
        //         secure:false,
        //         httpOnly:false
        //     })
            return res.send({Pessoa, token,})//.json({
                // erro: false,
                // mensagem: "Login realizado com sucesso!",
                // token
            
        }
        catch(erro){
            return res.status(500).json(erro.message)
        }
    
    }

    static async logout(req, res){
      	res.json({ auth: false, token: null });
    }
    
    static async alterarPessoa(req,res){
        const {id} = req.params
        const Novasinfos = req.body
        try{
            await database.Pessoa.update(Novasinfos, {where: {id: Number(id)}})
            const pessoaAtualizada = await database.Pessoa.findOne({where:{ 
                id:Number(id)}})
                return res.status(200).json(pessoaAtualizada)
        }catch(error){
            return res.status(500).json(error.message)
        }

    }

    static async removePessoa(req,res){
        const {id} = req.params
        try{
            await database.Pessoa.destroy({where:{ 
                idPessoa:Number(id)}})
            return res.status(200).json({message: `Pessoa removida com sucesso`})
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
    static async tokenId(req,res){
        const token = req.body.token
        try{
            const decode = await promisify(jwt.verify)(token, "D62ST92Y7A6V7K5C6W9ZU6W8KS3");
            const id = decode.id
             const Pessoa = await database.Pessoa.findOne( {where: {
                 id : id}})
            return res.status(200).json(id).json(Pessoa)
            
        }
        catch(error){
            return res.status(500)//.json(error.message)
        }

    }                          

}

module.exports = PessoaController