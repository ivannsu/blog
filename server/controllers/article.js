const Article = require('../models/article');

module.exports = {
  findAll(req, res) {
    Article.find({})
    .then(articles => {
      res.status(200).json({
        message: 'success get all articles data',
        articles
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
  },

  findById(req, res) {

  },

  create(req, res) {

  },

  update(req, res) {

  },

  remove(req, res) {

  }
}