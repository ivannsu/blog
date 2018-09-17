const router = require('express').Router();
const { findAll } = require('../controllers/article');
const isLogin = require('../middlewares/isLogin');

router.get('/', findAll);

module.exports = router;