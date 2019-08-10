import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server/app';

chai.use(chaiHttp);
chai.should();


describe('users', () => {
  describe('POST /', () => {
    it('should post a user', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send({
          firstname: 'abiola', lastname: 'ojo', email: 'ojo@gmail.com', password: 'oladimeji1',
        })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('data');
          res.body.data.should.be.a('object');

          done();
        });
    });
    it('should not create a user without any of the required field ', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send({
          lastname: 'ojo', email: 'ojo@gmail.com', password: 'fggfdgfd123',
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          done();
        });
    });
    it('should not create a user without a firstName ', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send({
          firstname: '', lastname: 'ojo', email: 'ojo@gmail.com', password: 'fggfdgfd123',
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          done();
        });
    });
    it('should not create a user without a lastName ', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send({
          firstname: 'abiola', lastname: '', email: 'ojo@gmail.com', password: 'sdsdxxsx123',
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('message');

          done();
        });
    });
    it('should not create a user without an email ', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send({
          firstname: 'abiola', lastname: 'ojo', email: '', password: 'wdwedew123',
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          done();
        });
    });

    it('should not create a user without a password ', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send({
          firstname: 'abiola', lastname: 'ojo', email: 'ojo@gmail.com', password: '',
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          done();
        });
    });
    it('should not create a user with a used email ', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send({
          firstname: 'abiola', lastname: 'ojo', email: 'ojo@gmail.com', password: 'oladimeji1',
        })
        .end((err, res) => {
          res.should.have.status(409);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          done();
        });
    });
    it('should not create a user with a wrong email ', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send({
          firstname: 'abiola', lastname: 'ojo', email: 'ojo.com', password: 'oladimeji1',
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          done();
        });
    });
    it('should not create a user without a correct name ', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send({
          firstname: 'ab1', lastname: 'ojo', email: 'ojo@gmail.com', password: 'oladimeji1',
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          done();
        });
    });
    it('should not create a user if password is less than 5 ', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send({
          firstname: 'ab', lastname: 'ojo', email: 'ojo@gmail.com', password: 'ade',
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          done();
        });
    });
    // it('should signin a user', (done) => {
    //   chai.request(app)
    //     .post('/api/v1/auth/signin')
    //     .send({
    //       email: 'doyin@gmail.com', password: 'adedoyin1',
    //     })
    //     .end((err, res) => {
    //       res.should.have.status(200);
    //       res.body.should.be.a('object');
    //       res.body.should.have.property('data');
    //       done();
    //     });
    // });
    // it('should not signin a user with incorrect email', (done) => {
    //   chai.request(app)
    //     .post('/api/v1/auth/signin')
    //     .send({
    //       email: 'dee@gmail.com', password: 'adedoyin1',
    //     })
    //     .end((err, res) => {
    //       res.should.have.status(400);
    //       res.body.should.be.a('object');
    //       res.body.should.have.property('error');
    //       done();
    //     });
    // });
    // it('should not signin a user without email ', (done) => {
    //   chai.request(app)
    //     .post('/api/v1/auth/signin')
    //     .send({
    //       email: '', password: 'adedoyin1',
    //     })
    //     .end((err, res) => {
    //       res.should.have.status(400);
    //       res.body.should.be.a('object');
    //       res.body.should.have.property('error');
    //       done();
    //     });
    // });
    // it('should not signin a user without password ', (done) => {
    //   chai.request(app)
    //     .post('/api/v1/auth/signin')
    //     .send({
    //       email: 'doyin@gmail.com', password: '',
    //     })
    //     .end((err, res) => {
    //       res.should.have.status(400);
    //       res.body.should.be.a('object');
    //       res.body.should.have.property('error');
    //       done();
    //     });
    // });
    // it('should not signin without required field ', (done) => {
    //   chai.request(app)
    //     .post('/api/v1/auth/signin')
    //     .send({
    //       password: 'oljfcjjdjncjn1',
    //     })
    //     .end((err, res) => {
    //       res.should.have.status(400);
    //       res.body.should.be.a('object');
    //       res.body.should.have.property('error');
    //       done();
    //     });
    // });
  });
});
