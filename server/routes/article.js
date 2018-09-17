const router = require('express').Router();
const { findAll, create, update } = require('../controllers/article');
const isLogin = require('../middlewares/isLogin');

router.get('/', findAll);
router.post('/', isLogin, create);
router.put('/:id', isLogin, update)

module.exports = router;