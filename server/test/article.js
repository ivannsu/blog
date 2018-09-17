const app = require('../app');
const Article = require('../models/article');

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

  it('GET /article/ should return array of object articles data', function(done) {  
    chai.request(app)
    .get('/article/')
    .end(function(err, res) {
      let response = res.body;

      assert.equal(res.status, 200);
      assert.typeOf(response, 'object');
      assert.property(response, 'message');
      assert.property(response, 'articles');

      done();
    });

  });
  // it('should return object contain article data', function(done) {
  //   done();
  // });
  // it('should return object contain old article data before update', function() {});
  // it('should return object contain deleted id', function() {});
});