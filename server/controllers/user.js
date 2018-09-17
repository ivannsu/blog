const User = require('../models/user');
const crypt = require('../helpers/crypt');

module.exports = {
  signup(req, res) {
    let input = {
      name: req.body.name,
      email: req.body.email,
      password: crypt(req.body.password)
    }

    User.findOne({ email: input.email })
    .then(user => {
      if(!user) {

        User.create(input)
        .then(newUser => {
          res.status(201).json({
            message: 'success signup',
            user: newUser
          });    
        })
        .catch(err => {
          res.status(500).json({
            message: err.message
          });    
        });

      } else {
        res.status(500).json({
          message: 'this email already registered'
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
  },

  signin(req, res) {

  }
}