const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: {
    type: String
  },
  author: {
    type: String
  },
  content: {
    type: String
  },
  comments: [{ type: mongoose.Types.ObjectId, ref: 'Comment' }]
}, {
  timestamps: true
});

const Article = mongoose.model('Article', articleSchema);
module.exports = Article;