const Article = require('../models/article');

module.exports = {
  findAll(req, res) {
    Article.find({}).populate('author')
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
    let input = {
      title: req.body.title,
      author: req.decoded.id,
      content: req.body.content
    }

    Article.create(input)
    .then(newArticle => {
      res.status(500).json({
        message: 'success create new article',
        article: newArticle
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
  },

  update(req, res) {

  },

  remove(req, res) {

  }
}