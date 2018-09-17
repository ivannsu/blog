const Comment = require('../models/comment');

module.exports = {
  findAll(req, res) {
    Comment.find().populate('user')
    .then(comments => {
      res.status(200).json({
        messsage: 'success get all comments',
        comments
      });
    })
    .catch(err => {
      res.status(500).json({
        messsage: err.messsage
      });
    })
  },

  create(req, res) {
    let input = {
      user: req.body.user,
      content: req.body.content
    }

    Comment.create(input)
    .then(newComment => {
      res.status(201).json({
        messsage: 'success create new comment',
        comment: newComment
      });
    })
    .catch(err => {
      res.status(500).json({
        messsage: err.messsage
      });
    });
  },

  update(req, res) {
    let commentId = req.params.id;
    let user = req.decoded.id;

    Comment.findOne({ _id: commentId, user: user })
    .then(comment => {
      if(!comment) {
        res.status(500).json({
          messsage: 'no comment created by this user'
        });
      } else {
        Comment.updateOne()
        .then(affected => {
          res.status(200).json({
            messsage: 'success update comment',
            id: comment._id
          });
        })
        .catch(err => {
          res.status(500).json({
            messsage: err.messsage
          });    
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        messsage: err.messsage
      });
    })
  },

  remove(req, res) {

  }
}