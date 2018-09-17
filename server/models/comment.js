const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  name: {
    type: String
  },
  content: {
    type: String
  }
}, {
  timestamps: true
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;