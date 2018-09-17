const router = require('express').Router();
const { findAll, create, update, remove } = require('../controllers/comment');
const isLogin = require('../middlewares/isLogin');

router.get('/', findAll);
router.post('/', create);
router.put('/:id', isLogin, update);
router.delete('/:id', isLogin, remove);

module.exports = router;