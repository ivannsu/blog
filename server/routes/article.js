const router = require('express').Router();
const { findAll, findById, create, update } = require('../controllers/article');
const isLogin = require('../middlewares/isLogin');

router.get('/', findAll);
router.get('/:id', (req, res) => {
  res.send('hello');
});
router.post('/', isLogin, create);
router.put('/:id', isLogin, update)

module.exports = router;