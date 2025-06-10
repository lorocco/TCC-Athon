const {Router} = require('express')
const PostsController = require('../controllers/PostController.js')

const { eAdmin } = require('../middlewares/auth.js');
const LikeController = require('../controllers/LikeController.js');
const router = Router()


router.get('/likes',  LikeController.pegaLikes)
router.get('/likes/:id', LikeController.buscaPorUsuario)
router.get('/likes/:pessoaLike/:postLike', LikeController.buscaUmLike)
router.post('/likes', LikeController.cadastraLikes)
router.delete('/likes/:pessoaLike/:postLike', LikeController.removeLike)

module.exports = router