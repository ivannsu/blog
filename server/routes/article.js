const router = require('express').Router();
const { findAll, create } = require('../controllers/article');
const isLogin = require('../middlewares/isLogin');

router.get('/', findAll);
router.post('/', isLogin, create);

module.exports = router;