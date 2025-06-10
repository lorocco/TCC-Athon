const express = require('express') // importando biblioteca responsável pelas APIs
const routes = require('./routes') //  importa o arquivo index de routes 
const cors = require('cors')
const app= express() //instancia o express
const port = process.env.PORT || 3000

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE' )
    res.header("Access-Control-Allow-Headers","Authorization, content-type");
    app.use(cors());
    app.use(express.static('public/uploads'));
    next();
});

routes(app) // passa o app como parametro para a função routes que importamos 


app.listen(port, ()=> console.log(`servidor rodando na porta ${port}`)) //servidor iniciado 


module.exports = app 