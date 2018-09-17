const app = require('../app');
const Article = require('../models/article');
const User = require('../models/user');

const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;

chai.use(chaiHttp);

describe('Article', function() {

  beforeEach(function(done) {

    let seed = {
      title: 'sample title',
      author: 'John Doe',
      content: 'hello world'
    }

    Article.create(seed)
    .then(newArticle => {
      done();
    })
    .catch(err => {
      throw err;
      done();
    });
  });

  afterEach(function(done) {
    Article.deleteMany({})
    .then(affected => {
      done();
    })
    .catch(err => {
      throw err;
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

  // it('POST /article/ - ', function(done) {
  //   chai.request(app)
  //   .post('/articles/')
  //   .type('form')
  //   .send({
  //     title: 'sample title',
  //     author: 'John Doe',
  //     content: 'hello world'
  //   })
  //   .end(function(err, res) {

  //   });
  // });
});