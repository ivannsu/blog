const router = require('express').Router();
const { findAll } = require('../controllers/article');

router.get('/', findAll);

module.exports = router;