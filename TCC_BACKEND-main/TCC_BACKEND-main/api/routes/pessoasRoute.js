const {Router} = require('express')
const PessoaController = require('../controllers/PessoaController.js')

const { eAdmin } = require('../middlewares/auth.js');
const router = Router()

router.get('/pessoas', PessoaController.pegaPessoas)
router.get('/pessoas/:id', eAdmin, PessoaController.buscaPorId)
router.post('/pessoas', PessoaController.cadastraPessoas)
router.put('/pessoas/:id', eAdmin, PessoaController.alterarPessoa),
router.delete('/pessoas/:id', eAdmin, PessoaController.removePessoa),
router.post('/login', PessoaController.login),
router.post('/logout', eAdmin, PessoaController.logout)
router.post('/token', eAdmin, PessoaController.tokenId)

module.exports = router