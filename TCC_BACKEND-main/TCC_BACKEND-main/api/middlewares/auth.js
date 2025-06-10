const jwt = require('jsonwebtoken');
const { promisify } = require('util');
require('dotenv').config();

module.exports = {
    eAdmin: async function (req, res, next){
        const authHeader = req.headers.authorization;
        //console.log(authHeader);
        if(!authHeader){
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Necessário realizar o login para acessar a página!"
            });
        }

        const [, token ]= authHeader.split(' ');
        //console.log("Token: " + token);

        if(!token){
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Necessário realizar o login para acessar a página! Faltam o token B!"
            });
        }

        try{
            //payload = jwt.verify(token,  "process.env.TOKEN")
            const decode = await promisify(jwt.verify)(token, "D62ST92Y7A6V7K5C6W9ZU6W8KS3");
            console.log(req.userId)
            req.userId = decode.id;
            console.log(req.userId)
            return next();
        }catch(err){
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Necessário realizar o login para acessar a página! Token inválido!"
            });
        }

    }
}