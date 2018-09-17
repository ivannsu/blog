const app = require('../app');
const User = require('../models/user');
const crypt = require('../helpers/crypt');

const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;

chai.use(chaiHttp);

describe('User', function() {
  beforeEach(function(done) {
    let seed = {
      name: 'ivan',
      email: 'ivan@mail.com',
      password: crypt('123')
    }

    User.create(seed)
    .then(newUser => {
      done();
    })
    .catch(err => {
      throw err.message;
      done();
    });
  });

  afterEach(function(done) {
    User.deleteMany({})
    .then(affected => {
      done();
    })
    .catch(err => {
      throw err.message;
      done();
    })
  });

  it('POST /users/signup should return new object user', function(done) {  
    chai.request(app)
    .('/users/signup')
    .end(function(err, res) {
      let response = res.body;

      assert.equal(res.status, 200);
      assert.typeOf(response, 'object');
      assert.property(response, 'message');
      assert.property(response, 'user');
      done();
    });
  });
})