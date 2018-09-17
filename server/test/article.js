require('dotenv').config();

const app = require('../app');
const Article = require('../models/article');
const User = require('../models/user');
const crypt = require('../helpers/crypt');
const jwt = require('jsonwebtoken');

const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;

chai.use(chaiHttp);

let articleId;
let userId;
let token;

describe('Article', function() {

  beforeEach(function(done) {

    let seed = {
      name: 'ivan',
      email: 'ivan456@mail.com',
      password: '123'
    }

    User.create(seed)
    .then(newUser => {

      let articleSeed = {
        title: 'sample title',
        author: newUser._id,
        content: 'hello world'
      }
  
      Article.create(articleSeed)
      .then(newArticle => {
        articleId = newArticle._id;
        userId = newUser._id;

        let token = jwt.sign({ 
          id: userId, name: newUser.name, email: newUser.email 
        }, process.env.JWT_SECRET_KEY);

        console.log(token, '<== TOKEN');

        done();
      })
      .catch(err => {
        console.error(err.message);
        done();
      });
    })
    .catch(err => {
      console.error(err.message);
      done();
    });
  });

  afterEach(function(done) {
    Article.deleteMany({})
    .then(affected => {
      done();
    })
    .catch(err => {
      console.error(err);
      done();
    })
  });

  it('GET /article/ - should return array of object articles data', function(done) {  
    chai.request(app)
    .get('/articles/')
    .end(function(err, res) {
      let response = res.body;

      assert.equal(res.status, 200);
      assert.typeOf(response, 'object');
      assert.property(response, 'message');
      assert.property(response, 'articles');

      done();
    });

  });

  it('POST /article/ - ', function(done) {
    chai.request(app)
    .post('/articles/')
    .type('form')
    .send({
      title: 'sample title -2',
      author: userId,
      content: 'no coding no life :V'
    })
    .end(function(err, res) {
      if(err) {
        console.error(err);
        done();
      } else {
          let response = res.body;

          console.log(response);

          assert.equal(res.status, 200);
          assert.typeOf(response, 'object');
          assert.property(response, 'message');
          assert.property(response, 'article');

          done();
        }
    });
  });
});